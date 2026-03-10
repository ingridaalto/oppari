import { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { themes } from "./data/teemat"; // <-- sinun polku
import  exam  from "./data/teemat/exam";

import perehtyjaImg from "./assets/perehtyja_temp.png";
import osaajaImg from "./assets/osaaja_temp.png";
import mestariImg from "./assets/mestari_temp.png";
import taustaImg from "./assets/tausta.png";
import correctSound from "./assets/correct.mp3";
import wrongSound from "./assets/wrong.mp3";



// ===== CONFIG =====

const EXAM_PASS_PERCENT = 80;    // testissä vaadittu läpäisy

// ===== helpers =====
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function percent(correct, total) {
  if (!total) return 0;
  return Math.round((correct / total) * 100);
}
function arraysEqualAsSets(a, b) {
  const aa = [...a].sort((x, y) => x - y);
  const bb = [...b].sort((x, y) => x - y);
  if (aa.length !== bb.length) return false;
  for (let i = 0; i < aa.length; i++) if (aa[i] !== bb[i]) return false;
  return true;
}
function getEnding(pct) {
  if (pct === 100) {
    return {
      level: "Tietoturvamestari",
      image: mestariImg,
      text: "Erinomaista työtä. Hallitset keskeiset tietoturvakäytännöt erittäin hyvin ja osaat tehdä turvallisia valintoja myös käytännön tilanteissa. Osaamisesi tukee sekä potilasturvallisuutta että luottamuksellisten tietojen suojaa."
    };
  }

  if (pct >= 80) {
    return {
      level: "Vastuullinen osaaja",
      image: osaajaImg,
      text: "Hyvä suoritus. Tunnet tärkeimmät tietoturvan periaatteet ja osaat toimia vastuullisesti tavallisissa työtilanteissa. Osaamisesi on hyvällä tasolla, ja pieni lisäkertaus vahvistaa varmuutta entisestään."
    };
  }

  return {
    level: "Perehtyjä",
    image: perehtyjaImg,
    text: "Olet ottanut hyvän ensimmäisen askeleen tietoturvaosaamisen kehittämisessä. Keskeiset periaatteet ovat jo tulleet tutuiksi, mutta osaamista kannattaa vielä vahvistaa harjoittelemalla ja kertaamalla sisältöjä. Näin toimintasi muuttuu yhä varmemmaksi arjen tilanteissa."
  };
}
export default function App() {
  // ===== Flatten opiskeluosion kysymykset teemoista (järjestyksessä) =====
  const studyFlow = useMemo(() => {
    // luo lista "askelista": slide-step tai question-step
    // Mutta koska haluat: info → teeman kysymykset → seuraava teema,
    // me pidämme teemaindeksit erikseen kuten ennen, ja vain rajoitamme study-kysymysten määrän 50:een.
    return null;
  }, []);

  const totalStudyQuestions = useMemo(() => {
  return themes.reduce((sum, t) => sum + (t.questions?.length ?? 0), 0);
}, []);

  const totalExamQuestions = exam.length;

  const totalAllQuestions = totalStudyQuestions + totalExamQuestions;


  // ===== game state =====
  // screens:
  // start | slides | studyQuiz | studyFeedback | studyDone | examQuiz | examFeedback | result
  const [screen, setScreen] = useState("start");

  // opiskelu: teema/slide/kysymys
  const [themeIndex, setThemeIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [themeQuestionIndex, setThemeQuestionIndex] = useState(0);

  // exam: index
  const [examIndex, setExamIndex] = useState(0);

  // selections
  const [selected, setSelected] = useState([]);
  const [dragOrder, setDragOrder] = useState([]); // sisältää item-indeksit järjestyksessä
  const [categorized, setCategorized] = useState({});


  // counters
  const [answeredAll, setAnsweredAll] = useState(0);
  const [correctAll, setCorrectAll] = useState(0);

  const [studyAnswered, setStudyAnswered] = useState(0);
  const [studyCorrect, setStudyCorrect] = useState(0);

  const [examAnswered, setExamAnswered] = useState(0);
  const [examCorrect, setExamCorrect] = useState(0);

  const [popMessage, setPopMessage] = useState("");
 

  // feedback state
  const [lastCorrect, setLastCorrect] = useState(null);
  const [activeMatchLeft, setActiveMatchLeft] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchFeedback, setMatchFeedback] = useState(null);
  const [interactiveChoice, setInteractiveChoice] = useState(null);
  const [activeWarningSpot, setActiveWarningSpot] = useState(null);

  useEffect(() => {
  setInteractiveChoice(null);
  setActiveWarningSpot(null);
}, [themeIndex, slideIndex, screen]);

  const theme = themes[themeIndex];
  const slides = theme?.slides ?? [];
  const studyQuestionsInTheme = theme?.questions ?? [];
  const studyQ = studyQuestionsInTheme[themeQuestionIndex];
  const currentSlide = slides[slideIndex];
  const currentInteractive = currentSlide?.interactive;

  const examQ = exam[examIndex];

  const shuffledMatchRights = useMemo(() => {
  if (currentInteractive?.type !== "match") return [];

  const arr = currentInteractive.pairs.map((pair, index) => ({
    id: index,
    text: pair.right
  }));

  return [...arr].sort(() => Math.random() - 0.5);
}, [themeIndex, slideIndex]);


  const overallPct = percent(correctAll, totalAllQuestions);
  const overallProgressPct = totalAllQuestions
    ? Math.round((answeredAll / totalAllQuestions) * 100)
    : 0;

  const [moduleProgress, setModuleProgress] = useState(() => themes.map((t) => ({ id: t.id, answered: 0, total: t.questions?.length ?? 0 })) );
  
    const [showModulesDone, setShowModulesDone] = useState(false);

  function modulePct(m) {
    return m.total ? Math.round((m.answered / m.total) * 100) : 0;
  }

  function moduleDone(m) {
    return m.total > 0 && m.answered >= m.total;
  }

  const doneCount = useMemo(() => {
    return moduleProgress.filter(moduleDone).length;
  }, [moduleProgress]);

  useEffect(() => {
  setActiveMatchLeft(null);
  setMatchedPairs([]);
  setMatchFeedback(null);
}, [themeIndex, slideIndex, screen]);

  // missä asti moduulit ovat "auki" (lineaarinen eteneminen):
  // - kaikki indeksit <= themeIndex ovat auki
  const unlockedIndex = themeIndex;
  // ===== actions =====
  function startGame() {
    // reset everything
    setScreen("slides");
    setThemeIndex(0);
    setSlideIndex(0);
    setThemeQuestionIndex(0);
    setExamIndex(0);
    setSelected([]);

    setAnsweredAll(0);
    setCorrectAll(0);

    setStudyAnswered(0);
    setStudyCorrect(0);

    setExamAnswered(0);
    setExamCorrect(0);

    setLastCorrect(null);
    setDragOrder([]);

    setModuleProgress(
  themes.map((t) => ({
    id: t.id,
    answered: 0,
    total: t.questions?.length ?? 0
  }))
);

  }





    function nextSlide() {
    const next = slideIndex + 1;
    if (next >= slides.length) {
      setScreen("studyQuiz");
      return;
    }
    setSlideIndex(next);
  }

  
function prevSlide() {
  // saa mennä vain saman moduulin info-slideissa taaksepäin
  if (slideIndex > 0) {
    setSlideIndex((s) => s - 1);
    resetAnswersForNext();
  }
}
  function prevStudy() {
    // paluu edelliseen opiskelu-kysymykseen tai infoon
    resetAnswersForNext();

    if (themeQuestionIndex > 0) {
      setThemeQuestionIndex((q) => q - 1);
      setScreen("studyQuiz");
      return;
    }

    // jos ollaan teeman ensimmäisessä kysymyksessä -> palaa teeman infoslidelle
    setSlideIndex(Math.max(0, slides.length - 1));
    setScreen("slides");
  }

  function prevExam() {
    // paluu edelliseen testikysymykseen (tai testin aloitukseen jos index 0)
    resetAnswersForNext();

    if (examIndex > 0) {
      setExamIndex((n) => n - 1);
      setScreen("examQuiz");
      return;
    }

    // jos testin ensimmäinen, palaa opiskeluvalikkoon (studyDone)
    setScreen("studyDone");
  }

  function selectSingle(idx) {
    setSelected([idx]);
  }

  function toggleMulti(idx) {
  setSelected((prev) =>
    prev.includes(idx) ? prev.filter((x) => x !== idx) : [...prev, idx]
  );
}

function triggerPopMessage(message) {
  setPopMessage(message);

  setTimeout(() => {
    setPopMessage("");
  }, 1400);
}

function resetAnswersForNext() {
  setSelected([]);
  setDragOrder([]);
  setCategorized({});
  setLastCorrect(null);
  setInteractiveChoice(null);
  setActiveWarningSpot(null);
  setPopMessage("");
}

function handleMatchLeftClick(index) {
  if (matchedPairs.includes(index)) return;
  setActiveMatchLeft(index);
  setMatchFeedback(null);
}

function handleMatchRightClick(index) {
  if (currentInteractive?.type !== "match") return;
  if (activeMatchLeft === null) return;
  if (matchedPairs.includes(index)) return;

    if (activeMatchLeft === index) {
    setMatchedPairs((prev) => [...prev, index]);
    setMatchFeedback("correct");
    triggerPopMessage("✨ Hyvä havainto");
    playCorrectSound();
  } else {
    setMatchFeedback("wrong");
    playWrongSound();
  }

  setActiveMatchLeft(null);
}

function isOrderEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function gradeQuestion(q) {
  if (!q) return false;

  if (q.type === "single" || q.type === "multi") {
    return arraysEqualAsSets(selected, q.correct);
  }

  if (q.type === "drag_order") {
    return isOrderEqual(dragOrder, q.correctOrder);
  }

  if (q.type === "categorize") {
    // tarkistetaan että jokaisessa kategoriassa on täsmälleen oikeat itemit
    return q.categories.every((cat) => {
      const userItems = categorized[cat.id] || [];
      return arraysEqualAsSets(userItems, cat.correctItems);
    });
  }

  return false;
}

function validateBeforeSubmit(q) {
  if (!q) return false;

  if (q.type === "single") {
    if (selected.length !== 1) {
      alert("Valitse yksi vaihtoehto.");
      return false;
    }
  }

  if (q.type === "multi") {
    if (selected.length === 0) {
      alert("Valitse vähintään yksi vaihtoehto.");
      return false;
    }
  }

  if (q.type === "drag_order") {
    if (!dragOrder || dragOrder.length !== q.items.length) {
      alert("Järjestä kaikki kohdat ennen vastaamista.");
      return false;
    }
  }

  if (q.type === "categorize") {
    const allPlaced = q.categories.reduce((sum, cat) => {
      return sum + ((categorized[cat.id] || []).length);
    }, 0);

    if (allPlaced !== q.items.length) {
      alert("Sijoita kaikki kohdat laatikoihin ennen vastaamista.");
      return false;
    }
  }

  return true;
}
  function submitStudyAnswer() {
  if (!studyQ) return;

  if (!validateBeforeSubmit(studyQ)) return;

  const correct = gradeQuestion(studyQ);
  setLastCorrect(correct);

  setAnsweredAll((n) => n + 1);
  setStudyAnswered((n) => n + 1);

  if (correct) {
    setCorrectAll((n) => n + 1);
    setStudyCorrect((n) => n + 1);
    playCorrectSound();
  } else {
    playWrongSound();
  }

  setModuleProgress((prev) =>
    prev.map((m, i) =>
      i === themeIndex
        ? { ...m, answered: Math.min(m.total, m.answered + 1) }
        : m
    )
  );

  setScreen("studyFeedback");
}

  function nextAfterStudyFeedback() {
    resetAnswersForNext();


    // Jos opiskeluosio jo täynnä (50), lopeta siihen
  if (studyAnswered >= totalStudyQuestions) {
  setScreen("studyDone");
  return;
}

    // siirry seuraavaan kysymykseen teemassa, tai seuraavaan teemaan (infoon)
    const nextQ = themeQuestionIndex + 1;
    if (nextQ < studyQuestionsInTheme.length) {
      setThemeQuestionIndex(nextQ);
      setScreen("studyQuiz");
      return;
    }

    // teema loppui → seuraava teema → info-slidet
        const nextTheme = themeIndex + 1;
    if (nextTheme < themes.length) {
      setThemeIndex(nextTheme);
      setSlideIndex(0);
      setThemeQuestionIndex(0);
      setScreen("slides");
      return;
    }
    // jos teemat loppuivat ennen 50, mennään silti studyDone
    setScreen("studyDone");
  }

  function beginExam() {
    setSelected([]);
    setCategorized({});
    setLastCorrect(null);
    setExamIndex(0);
    setScreen("examQuiz");
    setDragOrder([]);

  }

  function submitExamAnswer() {
  if (!examQ) return;

  if (!validateBeforeSubmit(examQ)) return;

  const correct = gradeQuestion(examQ);
  setLastCorrect(correct);

  setAnsweredAll((n) => n + 1);
  setExamAnswered((n) => n + 1);

  if (correct) {
    setCorrectAll((n) => n + 1);
    setExamCorrect((n) => n + 1);
    playCorrectSound();
  } else {
    playWrongSound();
  }

  setScreen("examFeedback");
}

  function nextAfterExamFeedback() {
    resetAnswersForNext();


    const next = examIndex + 1;
    if (next < totalExamQuestions) {
      setExamIndex(next);
      setScreen("examQuiz");
      return;
    }

    setScreen("result");
  }

  // ===== guard =====
  if (!themes.length) {
    return (
      <div className="app">
        <Topbar />
        <main className="container">
          <Card>
            <h1 className="title">Turvallinen työvuoro</h1>
            <p className="muted">Teemoja ei löydy. Tarkista src/data/teemat/index.js export.</p>
          </Card>
        </main>
      </div>
    );
  }

  function playCorrectSound() {
  const audio = new Audio(correctSound);
  audio.volume = 0.4;
  audio.play().catch(() => {});
}

function playWrongSound() {
  const audio = new Audio(wrongSound);
  audio.volume = 0.4;
  audio.play().catch(() => {});
}

  const ending = getEnding(overallPct);
  const examPct = percent(examCorrect, totalExamQuestions);
  const examPassed = examPct >= EXAM_PASS_PERCENT;

  return (
    <div className="app">
      <Topbar />

   <main>

  {/* ===== START SCREEN (FULL WIDTH HERO) ===== */}
 {screen === "start" && (
 <section
  className="coverHero"
  style={{ backgroundImage: `url(${taustaImg})` }}
  onMouseMove={(e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x}%`);
    e.currentTarget.style.setProperty("--my", `${y}%`);
  }}
>
    <div className="coverHeroOverlay" />

    {/* EKG taustakoriste */}
<svg className="coverEKG" viewBox="0 0 1200 220" aria-hidden="true">
  <path
    d="M0,130
       L420,130
       L450,130
       L480,40
       L510,210
       L540,130
       L800,130
       L830,40
       L860,210
       L890,130
       L1600,130"
    fill="none"
  />
</svg>
    {/* pieni “status”-elementti (pelillinen, mutta asiallinen) */}
    <div className="coverCorner">
      <span className="coverDot" aria-hidden="true" />
      <span>Koulutusmoduuli</span>
    </div>

    <div className="coverHeroInner">
      <div className="coverPanel">
        <div className="coverTopRow">
          <div className="coverBadge">SOTE · KYBERTURVALLISUUS</div>
        </div>

        <h1 className="coverTitle">Kyberturvaopas</h1>

        <p className="coverLead">
  Tämä kyberturvaoppaana toimiva peli on suunnattu sosiaali- ja terveysalan työntekijöille. Koulutus etenee aiheen teoriaosuuksilla, joiden ymmärtämistä testataan kouluttavilla monivalintakysymyksillä. Peli päättyy tenttiin, jonka läpipääsemiseksi vähintään 80% on oltava oikein.
</p>

        <div className="coverActions">
          <button className="btn primary" onClick={startGame}>
            Aloita koulutus
          </button>
        </div>

        <div className="coverMeta">
          <span className="pill">Opiskelumoduulit: {themes.length}</span>
          <span className="pill">Kysymykset: {totalStudyQuestions}</span>
          <span className="pill">Testi: {totalExamQuestions}</span>
        </div>

        {/* “progress teaser” = tuntuu peliltä, mutta näyttää yritysmäiseltä 
        <div className="coverProgress">
          <div className="coverProgressTop">
            <span className="muted small">Valmiusaste</span>
            <span className="muted small">0%</span>
          </div>
          <div className="bar" aria-hidden="true">
            <div className="barFill" style={{ width: "0%" }} />
          </div>
        </div>*/}
      </div> 
    </div>
  </section>
)}

{/* ===== MUUT NÄKYMÄT ===== */}
{screen !== "start" && (
  <div className="container">


{/* ProgressBar = koko koulutuksen eteneminen */}
{screen !== "start" && screen !== "result" && (
  <ProgressBar
    phaseLabel="Koko koulutus"
    answeredCount={answeredAll}
    totalQuestions={totalAllQuestions}
    progressPct={overallProgressPct}
  />
)}

   {/* ===== STUDY: SLIDES ===== */}
{screen === "slides" && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">
          Opiskelu · Teema {themeIndex + 1}/{themes.length}
        </div>
        <h2 className="sceneTitle">{theme.title}</h2>
      </div>

  <div className="lessonRight">
        <span className="tag">
          Info {slideIndex + 1}/{slides.length}
        </span>
      </div>
    </div>

    <div className="lessonBody">
      <div className="slideFrame">

      {/* LEFT RAIL */}
<aside className="slideRail">
  <div className="slideRailTitle">MODUULIT</div>

  <ModuleSidebar
    themes={themes}
    moduleProgress={moduleProgress}
    activeIndex={themeIndex}
    unlockedIndex={unlockedIndex}
    onSelect={(i) => {
      // sallitaan vain auki olevat
      if (i > unlockedIndex) return;
      setThemeIndex(i);
      setSlideIndex(0);
      setThemeQuestionIndex(0);
      setScreen("slides");
      resetAnswersForNext();
    }}
  />

</aside>

        {/* MAIN SURFACE */}
        <section className="slideSurface">

          {/* Stepper */}
          <div className="stepper" aria-label="Info-sivut">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`stepDot ${i < slideIndex ? "done" : ""} ${i === slideIndex ? "active" : ""}`}
                aria-hidden="true"
              />
            ))}
          </div>

          <h3 className="subtitle">{slides[slideIndex]?.title}</h3>

          {/* BULLETS */}
          {(slides[slideIndex]?.bullets ?? []).length > 0 && (
           <div className="microCards">
  {(slides[slideIndex]?.bullets ?? [])
    .filter((b) => b && b.trim().length > 0)
    .map((b, i) => (
      <div key={i} className="microCard microBullet">
        <div className="microBulletIcon" aria-hidden="true">•</div>
        <div className="microText">{b}</div>
      </div>
    ))}
</div>
          )}

          {/* LINES (✅ / ⚠️) */}
{Array.isArray(slides?.[slideIndex]?.lines) && slides[slideIndex].lines.length > 0 && (
  <div className="infoList" role="list">
    {slides[slideIndex].lines.map((line, i) => {
      const raw = typeof line === "string" ? line.trim() : "";
      const isOk = raw.startsWith("✅");
      const isWarn = raw.startsWith("⚠️");

      const text = raw
        .replace(/^✅\s?/, "")
        .replace(/^⚠️\s?/, "")
        .trim();

      return (
        <div
          key={i}
          className={`infoRow ${isOk ? "ok" : ""} ${isWarn ? "warn" : ""}`}
          role="listitem"
        >
          <div className="infoMarker" aria-hidden="true">
            {isOk ? "✓" : isWarn ? "!" : "•"}
          </div>

          <div className="infoContent">
            <div className="infoText">{text || line}</div>
          </div>
        </div>
      );
    })}
  </div>
)}

          {/* TEXT */}
          {slides[slideIndex]?.text && (
            <div className="slideText">{slides[slideIndex].text}</div>
          )}

          {/* CALLOUT */}
          {slides[slideIndex]?.callout && (
            <div className="callout calloutSoft">
              <div className="calloutTitle">
                <span className="calloutIcon" aria-hidden="true">
                  {slides[slideIndex].callout.icon ?? "💡"}
                </span>
                <span>{slides[slideIndex].callout.label ?? "Tiesitkö?"}</span>
              </div>
              <div className="calloutText">{slides[slideIndex].callout.text}</div>
            </div>
          )}

          {/* INTERACTIVE INFO BLOCK */}
{currentInteractive?.type === "choice_reveal" && (
  <div className="infoInteractive">
    {popMessage && (
      <div className="popToast">
        {popMessage}
      </div>
    )}
    <div className="infoInteractiveTop">
      <div className="infoInteractiveTitle">{currentInteractive.prompt}</div>
      {currentInteractive.helper && (
        <div className="infoInteractiveHelper">{currentInteractive.helper}</div>
      )}
    </div>

    <div className="infoInteractiveOptions">
      {currentInteractive.options.map((option, idx) => {
        const selected = interactiveChoice === idx;
        const highlight = currentInteractive.highlight === idx && interactiveChoice !== null;

        return (
          <button
  key={idx}
  type="button"
  className={`infoChoiceBtn ${selected ? "selected" : ""} ${highlight ? "highlight" : ""}`}
  onClick={() => {
  setInteractiveChoice(idx);
  if (currentInteractive.highlight === idx) {
    triggerPopMessage("✨ Hyvä havainto");
    playCorrectSound();
  } else {
    playWrongSound();
  }
}}
>
  {option.label}
</button>
        );
      })}
    </div>

    {interactiveChoice !== null && (
      <div className="infoChoiceFeedback">
        {currentInteractive.options[interactiveChoice].feedback}
      </div>
    )}
  </div>
)}

          {/* INTERACTIVE: MATCH */}
{currentInteractive?.type === "match" && (
  <div className="matchCard">
    {popMessage && (
      <div className="popToast">
        {popMessage}
      </div>
    )}
    <div className="matchTop">
      <div className="matchTitle">{currentInteractive.prompt}</div>
      <div className="matchMeta">
        Yhdistetty {matchedPairs.length}/{currentInteractive.pairs.length}
      </div>
    </div>

    <div className="matchGrid">
      <div className="matchCol">
        {currentInteractive.pairs.map((pair, index) => {
          const isMatched = matchedPairs.includes(index);
          const isActive = activeMatchLeft === index;

          return (
            <button
              key={`left-${index}`}
              type="button"
              className={`matchItem left ${isMatched ? "matched" : ""} ${isActive ? "active" : ""}`}
              onClick={() => handleMatchLeftClick(index)}
              disabled={isMatched}
            >
              {pair.left}
            </button>
          );
        })}
      </div>

      <div className="matchCol">
        {shuffledMatchRights.map((item) => {
          const isMatched = matchedPairs.includes(item.id);

          return (
            <button
              key={`right-${item.id}`}
              type="button"
              className={`matchItem right ${isMatched ? "matched" : ""}`}
              onClick={() => handleMatchRightClick(item.id)}
              disabled={isMatched}
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </div>

   

    {matchFeedback === "wrong" && (
      <div className="matchFeedback no">Ei aivan, kokeile uudelleen.</div>
    )}

  
  </div>
)}



{/* INTERACTIVE: WARNING SPOTS */}
{currentInteractive?.type === "warning_spots" &&
  currentInteractive?.message?.subject &&
  Array.isArray(currentInteractive?.message?.lines) &&
  Array.isArray(currentInteractive?.spots) && (
    <div className="warningCard">
      {popMessage && (
  <div className="popToast">
    {popMessage}
  </div>
)}
      <div className="warningTop">
        <div className="warningTitle">{currentInteractive.prompt}</div>
      </div>

      <div className="warningMessage">
        <div className="warningSubject">
          <span className="warningLabel">Aihe:</span> {currentInteractive.message.subject}
        </div>

        <div className="warningBody">
          {currentInteractive.message.lines.map((line, i) => (
            <div key={i} className="warningLine">
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="warningSpots">
        {currentInteractive.spots.map((spot, idx) => {
          const selected = activeWarningSpot === idx;

          return (
            <button
              key={idx}
              type="button"
              className={`warningSpotBtn ${selected ? "selected" : ""}`}
              onClick={() => {
  setActiveWarningSpot(idx);
  triggerPopMessage("");
}}
            >
              {spot.label}
            </button>
          );
        })}
      </div>

      {activeWarningSpot !== null && currentInteractive.spots[activeWarningSpot] && (
        <div className="warningFeedback">
          {currentInteractive.spots[activeWarningSpot].feedback}
        </div>
      )}
    </div>
)}

        </section>
      </div>
    </div>

  

    <div className="cardFooter">
  {slideIndex > 0 ? (
    <button className="btn ghost" onClick={prevSlide}>
      Edellinen
    </button>
  ) : (
    <div />
  )}

  <button className="btn primary" onClick={nextSlide}>
    {slideIndex + 1 >= slides.length ? "Siirry kysymyksiin" : "Seuraava"}
  </button>
</div>
</Card>
)}
    {/* ===== STUDY QUIZ ===== */}
{screen === "studyQuiz" && studyQ && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Opiskelu · {theme.title}</div>
        <h2 className="sceneTitle">Kysymys</h2>
      </div>
      <div className="lessonRight">
        <span className="tag">
          Moduuli {themeQuestionIndex + 1}/{studyQuestionsInTheme.length}
        </span>
      </div>
    </div>

    <div className="lessonBody">
      <div className="legendRow">
        <span className="legendPill">
  {examQ.type === "multi"
    ? "Valitse yksi tai useampi"
    : examQ.type === "drag_order"
    ? "Järjestä kohdat"
    : examQ.type === "categorize"
    ? "Vedä oikeisiin laatikoihin"
    : "Valitse yksi"}
</span>
      </div>

      <p className="prompt">{studyQ.question}</p>

      {(studyQ.type === "single" || studyQ.type === "multi") && (
        <div className="options">
          {studyQ.options.map((opt, idx) => {
            const checked = selected.includes(idx);
            return (
              <label
                key={`${studyQ.id}-${idx}`}
                className={`option optionPro ${checked ? "selected" : ""}`}
              >
                <input
                  type={studyQ.type === "multi" ? "checkbox" : "radio"}
                  name={`study-${studyQ.id}`}
                  checked={checked}
                  onChange={() =>
                    studyQ.type === "multi"
                      ? toggleMulti(idx)
                      : selectSingle(idx)
                  }
                />
                <span className="optionText">{opt}</span>
              </label>
            );
          })}
        </div>
      )}

      {studyQ.type === "drag_order" && (
        <div className="dragProWrap">
          <DragOrder items={studyQ.items} value={dragOrder} onChange={setDragOrder} />
        </div>
      )}
    </div>

    <div className="cardFooter">
      <div />
      <button className="btn primary" onClick={submitStudyAnswer}>Vastaa</button>
    </div>
  </Card>
)}

{/* ===== STUDY FEEDBACK ===== */}
{screen === "studyFeedback" && studyQ && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Opiskelu · {theme.title}</div>
        <h2 className="sceneTitle">Palaute</h2>
      </div>

      <div className="lessonRight">
        <span className={`tag ${lastCorrect ? "tagOk" : "tagNo"}`}>
          {lastCorrect ? "Oikein" : "Väärin"}
        </span>
      </div>
    </div>

    <div className="lessonBody">
      <div className={`feedback feedbackPro ${lastCorrect ? "ok" : "no"}`} role="status" aria-live="polite">
        <div className="feedbackTitle">{lastCorrect ? "✅ Oikein" : "❌ Väärin"}</div>
        <div className="feedbackText">{studyQ.explanation}</div>
      </div>
    </div>

    <div className="cardFooter">
      <div />
      <button className="btn primary" onClick={nextAfterStudyFeedback}>Seuraava</button>
    </div>
  </Card>
)}
  
      {/* ===== STUDY DONE ===== */}
{screen === "studyDone" && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Opiskelu</div>
        <h2 className="sceneTitle">Opiskeluosio valmis</h2>
      </div>
      <div className="lessonRight">
        <span className="tag">Seuraavaksi: Testi</span>
      </div>
    </div>

    <div className="lessonBody">
      <p className="muted" style={{ lineHeight: 1.7 }}>
        Hyvä! Nyt voit siirtyä testiin ja varmistaa osaamisesi.
      </p>

      <div className="studyDoneSummary">
  <div className="studyDoneRow">
    <div>
      <div className="strong">Moduulit</div>
      <div className="muted small">
        Suoritettu {doneCount}/{themes.length}
      </div>
    </div>

    <button
      className="btn ghost small"
      type="button"
      onClick={() => setShowModulesDone((s) => !s)}
      aria-expanded={showModulesDone}
    >
      {showModulesDone ? "Piilota moduulit" : "Näytä moduulit"}
    </button>
  </div>

  {showModulesDone && (
    <div className="moduleMiniList" role="list">
      {moduleProgress.map((m, i) => {
        const done = moduleDone(m);
        const pct = modulePct(m);

        return (
          <div key={m.id} className="moduleMiniItem" role="listitem">
            <div className="moduleMiniLeft">
              <span className={`moduleMiniIcon ${done ? "ok" : ""}`} aria-hidden="true">
                {done ? "✅" : "•"}
              </span>
              <span className="moduleMiniTitle">{themes[i].title}</span>
            </div>

            <div className="moduleMiniRight muted small">
              {m.answered}/{m.total} · {pct}%
            </div>
          </div>
        );
      })}
    </div>
  )}
</div>

      <div className="callout calloutSoft" style={{ marginTop: 14 }}>
        <div className="calloutTitle">
          <span className="calloutIcon" aria-hidden="true">🧪</span>
          <span>Testi</span>
        </div>
        <div className="calloutText">
          Läpäisyraja on <b>{EXAM_PASS_PERCENT}%</b>. Vastaa rauhassa – palaute tulee jokaisen kysymyksen jälkeen.
        </div>
      </div>
    </div>

    <div className="cardFooter">
      <div className="cardFooterLeft" />
      <div className="cardFooterRight">
        <button className="btn primary" onClick={beginExam}>
          Tee testi
        </button>
      </div>
    </div>
  </Card>
)}

{/* ===== EXAM QUIZ ===== */}
{screen === "examQuiz" && examQ && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Testi</div>
        <h2 className="sceneTitle">
          Kysymys {examIndex + 1}/{totalExamQuestions}
        </h2>
      </div>

            <div className="lessonRight">
        <span className="tag">Testi {examIndex + 1}/{totalExamQuestions}</span>
      </div>
    </div>

    <div className="lessonBody">
      <div className="legendRow">
        <span className="legendPill">
          {examQ.type === "multi"
            ? "Valitse yksi tai useampi"
            : examQ.type === "drag_order"
            ? "Järjestä kohdat"
            : "Valitse yksi"}
        </span>
      </div>

      <p className="prompt">{examQ.question}</p>

    {(examQ.type === "single" || examQ.type === "multi") && (
  <div className="options">
    {examQ.options.map((opt, idx) => {
      const checked = selected.includes(idx);
      return (
        <label
          key={`${examQ.id}-${idx}`}
          className={`option optionPro ${checked ? "selected" : ""}`}
        >
          <input
            type={examQ.type === "multi" ? "checkbox" : "radio"}
            name={`exam-${examQ.id}`}
            checked={checked}
            onChange={() =>
              examQ.type === "multi"
                ? toggleMulti(idx)
                : selectSingle(idx)
            }
          />
          <span className="optionText">{opt}</span>
        </label>
      );
    })}
  </div>
)}

{examQ.type === "drag_order" && (
  <div className="dragProWrap">
    <DragOrder items={examQ.items} value={dragOrder} onChange={setDragOrder} />
  </div>
)}

{examQ.type === "categorize" && (
  <div className="dragProWrap">
    <CategorizeQuestion
      categories={examQ.categories}
      items={examQ.items}
      value={categorized}
      onChange={setCategorized}
    />
  </div>
)}
    </div>

    <div className="cardFooter">
      <button className="btn primary" onClick={submitExamAnswer}>Vastaa</button>
    </div>
  </Card>
)}

{/* ===== EXAM FEEDBACK ===== */}
{screen === "examFeedback" && examQ && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Testi</div>
        <h2 className="sceneTitle">Palaute</h2>
      </div>

      <div className="lessonRight">
        <span className={`tag ${lastCorrect ? "tagOk" : "tagNo"}`}>
          {lastCorrect ? "Oikein" : "Väärin"}
        </span>
      </div>
    </div>

    <div className="lessonBody">
      <div
        className={`feedback feedbackPro ${lastCorrect ? "ok" : "no"}`}
        role="status"
        aria-live="polite"
      >
        <div className="feedbackTitle">{lastCorrect ? "✅ Oikein" : "❌ Väärin"}</div>
        <div className="feedbackText">{examQ.explanation}</div>

        {!lastCorrect && (
  <div className="muted small" style={{ marginTop: 8 }}>
    <b>Oikea vastaus:</b>{" "}

    {(examQ.type === "single" || examQ.type === "multi") &&
      examQ.correct.map((i) => examQ.options[i]).join(" · ")}

    {examQ.type === "drag_order" &&
      examQ.correctOrder.map((i) => examQ.items[i]).join(" → ")}

    {examQ.type === "categorize" && (
      <div style={{ marginTop: 8 }}>
        {examQ.categories.map((cat) => (
          <div key={cat.id} style={{ marginBottom: 6 }}>
            <b>{cat.label}:</b>{" "}
            {cat.correctItems.map((i) => examQ.items[i]).join(" · ")}
          </div>
        ))}
      </div>
    )}
  </div>
)}
      </div>
    </div>

    <div className="cardFooter">
      <div />
      <button className="btn primary" onClick={nextAfterExamFeedback}>
        {examIndex + 1 >= totalExamQuestions ? "Näytä tulokset" : "Seuraava"}
      </button>
    </div>
  </Card>
)}

{/* ===== RESULT ===== */}
{screen === "result" && (
  <Card>
    <div className="lessonHeader">
      <div className="lessonLeft">
        <div className="kicker">Tulokset</div>
        <h2 className="sceneTitle">Yhteenveto</h2>
      </div>
      <div className="lessonRight">
        <span className="tag">Kokonais-%: {overallPct}%</span>
      </div>
    </div>

    <div className="lessonBody">
      <div className="resultHero">
  <img
    src={ending.image}
    alt={ending.level}
    className="resultCharacter"
  />
  <div>
    <div className="resultLevel">{ending.level}</div>
    <div className="muted">{ending.text}</div>
  </div>
</div>

      <div className="statsRow">
  <div className="stat">
    <div className="statLabel">Opiskelu</div>
    <div className="statValue">{percent(studyCorrect, totalStudyQuestions)}%</div>
    <div className="statMeta">{studyCorrect}/{totalStudyQuestions} oikein</div>
  </div>

  <div className="stat">
    <div className="statLabel">Testi</div>
    <div className="statValue">{examPct}%</div>
    <div className="statMeta">{examCorrect}/{totalExamQuestions} oikein</div>
  </div>

  <div className="stat">
  <div className="statLabel">Läpäisty</div>

  <div className="statValue statValuePass">
    <span className={`passBadge ${examPassed ? "ok" : "no"}`} aria-hidden="true">
      {examPassed ? "✓" : "✕"}
    </span>
    <span>{examPassed ? "Kyllä" : "Ei"}</span>
  </div>

  <div className="statMeta">Läpäisyraja {EXAM_PASS_PERCENT}%</div>
</div>
</div>
    </div>

    {/* ===== USER TESTING FEEDBACK ===== */}
<div className="feedbackBox">
  <div className="feedbackBoxText">
    <div className="feedbackBoxTitle">
      Kiitos osallistumisesta!
    </div>

    <div className="feedbackBoxDesc">
      Vastaathan lyhyeen käyttäjäkyselyyn. Vastauksesi auttavat kehittämään koulutusta osana opinnäytetyötä.
    </div>
  </div>

  <a
    className="feedbackBoxLink"
    href="https://forms.office.com/Pages/ResponsePage.aspx?id=b6ZgTI0KbkSawINqANhFQpRoH_Ujb25Iu_GvZyenDwRURFdEQkRSRlFMWTJaNDg4UFA3QTBTOTgwQS4u&origin=Invitation&channel=0I"
    target="_blank"
    rel="noopener noreferrer"
  >
    Vastaa kyselyyn →
  </a>
</div>

    <div className="cardFooter">
      <button className="btn ghost" onClick={() => setScreen("start")}>Etusivulle</button>
      <button className="btn primary" onClick={startGame}>Pelaa uudelleen</button>
    </div>
  </Card>
)}

     </div>
  )}
</main>

<footer className="footer">
  <div className="container muted small">
    © 2026 Ingrid Aalto ja Piia Suhonen · Turvallinen työvuoro – opinnäytetyö
  </div>
</footer>


</div>
);
}


// ===== UI components (pidetään samana tyylinä kuin sulla) =====
function Topbar() {
  return (
    <header className="topbar">
      <div className="topbarInner">
        <span className="brandDot" aria-hidden="true" />
        <span className="brandText">Turvallinen työvuoro</span>
      </div>
    </header>
  );
}

function Card({ children }) {
  return <section className="card">{children}</section>;
}

function ProgressBar({ phaseLabel, answeredCount, totalQuestions, progressPct }) {
  const pct = clamp(progressPct, 0, 100);
  return (
    <div className="progressCard" role="region" aria-label="Edistyminen">
      <div className="progressTop">
        <div className="progressLeft">
          <div className="small muted">{phaseLabel}</div>
          <div className="strong">Edistyminen</div>
        </div>
        <div className="progressRight">
          <div className="small muted">Kysymykset</div>
          <div className="strong">{answeredCount}/{totalQuestions}</div>
        </div>
      </div>

      <div className="bar" aria-hidden="true">
        <div className="barFill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function DragDropOrder({ items, value, onChange }) {


  if (!Array.isArray(items) || items.length === 0) {
    return <div className="muted">Drag-kysymyksen items puuttuu.</div>;
  }

  // value = drop-laatikossa olevien itemien indeksit (järjestyksessä)
  const placed = Array.isArray(value) ? value : [];
  const available = items.map((_, i) => i).filter((i) => !placed.includes(i));

  function onDragStartFromPool(e, itemIndex) {
    e.dataTransfer.setData("text/plain", JSON.stringify({ from: "pool", itemIndex }));
  }

  function onDragStartFromDrop(e, positionIndex) {
    e.dataTransfer.setData("text/plain", JSON.stringify({ from: "drop", positionIndex }));
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function dropIntoPool(e) {
  e.preventDefault();
  const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");

  // Jos vedetään laatikosta takaisin pooliin -> poista placed-listasta
  if (data.from === "drop") {
    const next = [...placed];
    next.splice(data.positionIndex, 1);
    onChange(next);
  }
}

  function dropIntoBox(e) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");

    // Jos vedetään poolista → lisää loppuun
    if (data.from === "pool") {
      const next = [...placed, data.itemIndex];
      onChange(next);
    }

    // Jos vedetään dropista takaisin dropiin → ei tehdä mitään tässä
  }

  function dropIntoBoxAt(e, targetPos) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");

    // Poolista -> insert targetPos
    if (data.from === "pool") {
      const next = [...placed];
      next.splice(targetPos, 0, data.itemIndex);
      onChange(next);
      return;
    }

    // Dropista -> reorder
    if (data.from === "drop") {
      const fromPos = data.positionIndex;
      if (fromPos === targetPos) return;
      const next = [...placed];
      const [moved] = next.splice(fromPos, 1);
      next.splice(targetPos, 0, moved);
      onChange(next);
    }
  }

  function removeFromBox(positionIndex) {
    const next = [...placed];
    next.splice(positionIndex, 1);
    onChange(next);
  }

  return (
    <div className="ddWrap">
      <div className="muted small" style={{ marginBottom: 10 }}>
        Vedä kortit laatikkoon oikeassa järjestyksessä. Klikkaa korttia poistaaksesi.
      </div>

      <div className="ddGrid">
        {/* POOL */}
        <div className="ddPanel">
          <div className="ddTitle">Kortit</div>
          <div className="ddPool" onDragOver={allowDrop} onDrop={dropIntoPool}>
            {available.length === 0 && (
              <div className="muted small">Kaikki kortit on siirretty.</div>
            )}
            {available.map((itemIndex) => (
              <div
                key={`pool-${itemIndex}`}
                className="ddCard"
                draggable
                onDragStart={(e) => onDragStartFromPool(e, itemIndex)}
              >
                <span className="ddHandle" aria-hidden="true">⠿</span>
                <span>{items[itemIndex]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DROP BOX */}
        <div className="ddPanel">
          <div className="ddTitle">Oikea järjestys</div>

          <div className="ddBox" onDragOver={allowDrop} onDrop={dropIntoBox}>
            {placed.length === 0 && (
              <div className="ddEmpty">Pudota ensimmäinen vaihe tähän…</div>
            )}

            {placed.map((itemIndex, pos) => (
              <div
                key={`box-${itemIndex}-${pos}`}
                className="ddCard placed"
                draggable
                onDragStart={(e) => onDragStartFromDrop(e, pos)}
                onDragOver={allowDrop}
                onDrop={(e) => dropIntoBoxAt(e, pos)}
                onClick={() => removeFromBox(pos)}
                title="Klikkaa poistaaksesi"
              >
                <span className="ddIndex">{pos + 1}</span>
                <span>{items[itemIndex]}</span>
              </div>
            ))}
          </div>

          {placed.length > 0 && (
            <button className="btn small" type="button" onClick={() => onChange([])} style={{ marginTop: 10 }}>
              Tyhjennä laatikko
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ModuleSidebar({ themes, moduleProgress, activeIndex, unlockedIndex, onSelect }) {
  return (
    <nav className="moduleTimeline" aria-label="Moduulit">
      <div className="moduleLine" aria-hidden="true" />

      {themes.map((t, i) => {
        const m = moduleProgress[i] || { answered: 0, total: 0 };
        const done = m.total > 0 && m.answered >= m.total;
        const locked = i > unlockedIndex;
        const active = i === activeIndex;

        const status = done ? "done" : locked ? "locked" : active ? "active" : "open";

        return (
          <button
            key={t.id ?? i}
            type="button"
            className={`moduleNode ${status}`}
            onClick={() => !locked && onSelect(i)}
            disabled={locked}
            aria-current={active ? "step" : undefined}
            title={`${i + 1}. ${t.title} (${m.answered}/${m.total})`}
          >
            {/* piste */}
            <span className="nodeDot" aria-hidden="true" />

            {/* lukko vain jos locked */}
            {locked && <span className="nodeLock" aria-hidden="true">🔒</span>}
          </button>
        );
      })}
    </nav>
  );
}

function CategorizeQuestion({ categories, items, value, onChange }) {
  const placedMap = value || {};

  const placedIds = Object.values(placedMap).flat();
  const available = items
    .map((text, index) => ({ index, text }))
    .filter((item) => !placedIds.includes(item.index));

  function allowDrop(e) {
    e.preventDefault();
  }

  function onDragStartFromPool(e, itemIndex) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ from: "pool", itemIndex })
    );
  }

  function onDragStartFromCategory(e, categoryId, itemIndex) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ from: "category", categoryId, itemIndex })
    );
  }

  function dropIntoCategory(e, targetCategoryId) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");

    // poolista laatikkoon
    if (data.from === "pool") {
      const current = placedMap[targetCategoryId] || [];
      if (current.includes(data.itemIndex)) return;

      onChange({
        ...placedMap,
        [targetCategoryId]: [...current, data.itemIndex]
      });
      return;
    }

    // kategoriasta toiseen
    if (data.from === "category") {
      const sourceCategory = data.categoryId;
      const itemIndex = data.itemIndex;

      if (sourceCategory === targetCategoryId) return;

      const sourceItems = (placedMap[sourceCategory] || []).filter(
        (id) => id !== itemIndex
      );
      const targetItems = placedMap[targetCategoryId] || [];

      onChange({
        ...placedMap,
        [sourceCategory]: sourceItems,
        [targetCategoryId]: [...targetItems, itemIndex]
      });
    }
  }

  function dropBackToPool(e) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");

    if (data.from === "category") {
      const sourceCategory = data.categoryId;
      const itemIndex = data.itemIndex;

      onChange({
        ...placedMap,
        [sourceCategory]: (placedMap[sourceCategory] || []).filter(
          (id) => id !== itemIndex
        )
      });
    }
  }

  function removeFromCategory(categoryId, itemIndex) {
    onChange({
      ...placedMap,
      [categoryId]: (placedMap[categoryId] || []).filter((id) => id !== itemIndex)
    });
  }

  return (
  <div className="categorizeWrap">
    <div className="muted small" style={{ marginBottom: 6 }}>
      Vedä jokainen ilmiö oikeaan kategoriaan.
    </div>

    <div className="categorizeTopPool">
      {available.length === 0 && (
        <div className="ddEmpty">Kaikki kohdat on sijoitettu.</div>
      )}

      {available.map((item) => (
        <div
          key={item.index}
          className="ddCard categorizeChip"
          draggable
          onDragStart={(e) => onDragStartFromPool(e, item.index)}
        >
          <span className="ddHandle" aria-hidden="true">⠿</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>

    <div className="categorizeBottomRow">
      {categories.map((cat) => {
        const catItems = placedMap[cat.id] || [];

        return (
          <div key={cat.id} className="categorizePanel compact">
            <div className="ddTitle">{cat.label}</div>

            <div
              className="categorizeDropZone compact"
              onDragOver={allowDrop}
              onDrop={(e) => dropIntoCategory(e, cat.id)}
            >
              {catItems.length === 0 && (
                <div className="ddEmpty">Pudota tähän…</div>
              )}

              {catItems.map((itemIndex) => (
                <div
                  key={`${cat.id}-${itemIndex}`}
                  className="ddCard placed categorizeChip"
                  draggable
                  onDragStart={(e) =>
                    onDragStartFromCategory(e, cat.id, itemIndex)
                  }
                  onClick={() => removeFromCategory(cat.id, itemIndex)}
                  title="Klikkaa poistaaksesi"
                >
                  <span className="ddHandle" aria-hidden="true">⠿</span>
                  <span>{items[itemIndex]}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

const DragOrder = DragDropOrder;

