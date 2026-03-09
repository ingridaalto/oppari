const haittaohjelmat = {
  id: "haittaohjelmat",
  title: "Haittaohjelmat",
  slides: [
  {
    title: "Mitä haittaohjelmat ovat?",
    text:
      "Haittaohjelma on ohjelma, jonka tarkoitus on vahingoittaa järjestelmää tai kerätä tietoa ilman lupaa. Sote-ympäristössä haitta voi kohdistua potilastietoihin, työasemien toimintaan ja palveluiden saatavuuteen. Haittaohjelma ei ole vain 'tekninen ongelma' – se voi häiritä hoidon ja palvelun jatkuvuutta."
  },

  {
    title: "Miten haittaohjelmat yleensä pääsevät sisään?",
    lines: [
      "✅ Huijausviestin liite tai linkki (sähköposti, tekstiviesti, viestisovellus).",
      "✅ Haitallinen lataus tai ohjelma, joka näyttää hyödylliseltä.",
      "⚠️ Päivittämätön ohjelmisto tai selain (haavoittuvuus).",
      "⚠️ USB-laitteet ja muut siirrettävät mediat (jos käytäntö sallii)."
    ]
  },

  {
    title: "Ransomware (kiristyshaittaohjelma)",
    text:
      "Ransomware on haittaohjelma, joka salaa tiedostoja tai estää pääsyn järjestelmiin ja vaatii lunnaita palauttamisesta. Sote-alalla seuraukset voivat näkyä nopeasti: ajanvaraukset, kirjaaminen ja hoitotiedon saatavuus voivat häiriintyä. Maksaminen ei takaa tietojen palautumista eikä poista riskiä, vaan tärkeintä on ennaltaehkäisy ja varautuminen."
  },

  {
    title: "Keylogger & vakoiluohjelma: hiljainen riski",
    bullets: [
      "Keylogger tallentaa näppäilyt (esim. salasanat ja kirjautumistiedot).",
      "Vakoiluohjelma kerää tietoa taustalla (esim. selaintiedot, viestit, asiakastiedot).",
      "Nämä voivat olla vaikeita huomata, koska laite voi näyttää toimivan 'normaalisti'."
    ]
  },

 {
  title: "Toimi oikein, jos epäilet haittaohjelmaa",
  lines: [
    "✅ Lopeta toiminta ja ilmoita välittömästi organisaation ohjeen mukaan (IT-tuki / tietoturva).",
    "✅ Noudata annettuja ohjeita – älä tee teknisiä toimenpiteitä omin päin.",
    "⚠️ Älä yritä korjata tai 'testata lisää' (voi levittää haittaa).",
    "⚠️ Älä syötä salasanoja tai kirjautumiskoodeja, jos laite tai ikkuna vaikuttaa poikkeavalta."
  ]
}
],
  questions: [
  {
    id: "h1",
    type: "single",
    question: "Mikä on haittaohjelma?",
    options: [
      "Hyötyohjelma kodinkoneisiin",
      "Päivitys kyberturvan vahvistamiseksi",
      "Palomuurin suojaustaso",
      "Järjestelmää vahingoittava ohjelma"
    ],
    correct: [3],
    explanation:
      "Haittaohjelma on ohjelma, joka on suunniteltu vahingoittamaan laitetta tai järjestelmää, häiritsemään toimintaa tai keräämään tietoa ilman lupaa. Sote-ympäristössä se voi vaarantaa potilastietojen luottamuksellisuuden ja palveluiden jatkuvuuden."
  },

  {
    id: "h2",
    type: "single",
    question: "Mikä on ransomware?",
    options: ["Vakoiluohjelma", "Kiristyshaittaohjelma", "Virustorjuntaohjelma", "VPN"],
    correct: [1],
    explanation:
      "Ransomware (kiristyshaittaohjelma) on haittaohjelma, joka estää pääsyn tietoihin tai järjestelmiin, tyypillisesti salaamalla tiedostoja, ja vaatii lunnaita palauttamisesta. Se ei ole VPN eikä pelkkä vakoiluohjelma."
  },

  {
    id: "h3",
    type: "single",
    question: "Mitä ransomware tekee?",
    options: [
      "Hidastaa hieman käyttäjän verkkoa",
      "Salaa tiedot ja vaatii lunnaita tietojen palauttamiseksi ",
      "Poistaa viruksia omatoimisesti",
      "Päivittää järjestelmän automaattisesti"
    ],
    correct: [1],
    explanation:
      "Ransomware salaa tiedostoja tai lukitsee järjestelmän ja vaatii lunnaita, jotta pääsy palautettaisiin. Siksi varmuuskopiot, päivitykset ja nopea ilmoittaminen ovat keskeisiä suojakeinoja – lunnasmaksu ei takaa palautusta."
  },

  {
    id: "h4",
    type: "single",
    question: "Mikä on keylogger?",
    options: [
      "Salasananhallintapalvelu",
      "Näppäilyjä tallentava haittaohjelma",
      "Palomuurin lukitusjärjestelmä",
      "Avainkotelo"
    ],
    correct: [1],
    explanation:
      "Keylogger on haittaohjelma, joka tallentaa näppäimistön painalluksia. Sen avulla hyökkääjä voi saada esimerkiksi käyttäjätunnuksia, salasanoja ja muita luottamuksellisia tietoja."
  },

  {
    id: "h5",
    type: "single",
    question: "Mikä on vakoiluohjelma?",
    options: [
      "Tietoa keräävä haittaohjelma",
      "Päivitystyökalu, joka vakoilee uusimmat päivitykset asennettavaksi",
      "Selaimen lisäosa tietoturvan lisäämiseksi",
      "Palvelinympäristö"
    ],
    correct: [0],
    explanation:
      "Vakoiluohjelma (spyware) kerää tietoa käyttäjästä tai laitteesta ilman lupaa. Se voi kerätä esimerkiksi selaustietoja, kirjautumistietoja tai muuta arkaluonteista dataa ja välittää sen eteenpäin."
  }
]
};

export default haittaohjelmat;
