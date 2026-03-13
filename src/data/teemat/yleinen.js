const yleinen = {
  id: "yleinen",
  title: "Kyberturvallisuuden perusteet sote-alalla",
  slides: [

    // 1) AINOA bullet-slide
    {
      title: "Kyberturvallisuudella suojataan",
      bullets: [
        "Potilas- ja asiakastiedot: luottamuksellisuus, oikeellisuus ja turvallinen käsittely.",
        "Järjestelmät ja palvelut: käytettävyys myös häiriötilanteissa ja hyökkäysten aikana.",
        "Toiminnan jatkuvuus: hoito ja palvelut eivät saa pysähtyä teknisten ongelmien vuoksi."
      ],

      image: "src/assets/ikoni1.PNG" 
    },

    // 2) y1 + y3
    {
      title: "Kyberturvallisuus sosiaali- ja terveydenhuoltoalalla",
      text:
        "Kyberturvallisuudella tarkoitetaan digitaalisen tiedon, tietojärjestelmien ja palveluiden suojaamista luvattomalta käytöltä, muutoksilta sekä toiminnan häiriöiltä. Sosiaali- ja terveydenhuollon toimintaympäristössä kyberturvallisuus ei rajoitu pelkästään teknisiin ratkaisuihin, vaan sillä on suora yhteys myös ihmisten turvallisuuteen. Potilasturvallisuus ja luottamuksellisuus perustuvat siihen, että potilastiedot säilyvät eheinä, ovat saatavilla oikeaan aikaan hoidon toteuttamiseksi ja ovat ainoastaan siihen oikeutettujen henkilöiden käytettävissä."
    },

    // 3) y2 + y5 + y4
   {
  title: "Kyberuhka, haavoittuvuus ja päivitykset",
  text:
    "Kyberuhka on mahdollinen haitallinen tapahtuma, kuten kalasteluviesti, haittaohjelma tai luvaton kirjautumisyritys. Haavoittuvuus taas on järjestelmässä, ohjelmistossa tai toimintatavassa oleva heikkous, jota uhka voi hyödyntää toteutuakseen. Säännölliset päivitykset ovat tärkeä osa suojautumista, koska ne muun muassa korjaavat huomattuja tietoturva-aukkoja ennen kuin niitä ehditään käyttämään väärin.",

  interactive: {
    type: "match",
    prompt: "Yhdistä käsite oikeaan kuvaukseen",
    pairs: [
      {
        left: "Kyberuhka",
        right: "Mahdollinen haitallinen tapahtuma"
      },
      {
        left: "Haavoittuvuus",
        right: "Järjestelmän heikkous"
      },
      {
        left: "Päivitys",
        right: "Korjaus tunnettuun tietoturva-aukkoon"
      }
    ]
  }
},
    // 4) y6
    {
      title: "Ihmisten toiminta on keskeinen osa kyberturvaa",
      text:
        "Tekniikka auttaa, mutta arjen toimintatavat ratkaisevat paljon. Huolellinen kirjautuminen, turvallinen salasanojen käyttö, ohjeiden noudattaminen ja epäselvien tilanteiden varmistaminen vähentävät riskejä merkittävästi. Hyvä kyberturva tarkoittaa myös sitä, että työntekijä uskaltaa kysyä ja ilmoittaa poikkeamista ajoissa, koska nopea reagointi voi estää suuremman vahingon syntymisen.",
      callout: {
        label: "Tapaus",
        icon: "💡",
        text:
          "Vuonna 2020 psykoterapiakeskus Vastaamon tietomurrossa potilaiden arkaluonteisia tietoja varastettiin ja käytettiin kiristämiseen. Tapaus osoitti konkreettisesti, että sote-alan kyberturva ei suojaa vain järjestelmiä, vaan myös ihmisten yksityisyyttä, luottamusta ja turvallisuuden tunnetta."
      }
    }
  ],

  questions: [
    {
      id: "y1",
      type: "single",
      question: "Mitä kyberturvallisuus tarkoittaa?",
      options: [
        "Tietokoneiden puutteellista käyttökuntoa",
        "Internetin nopeuden hallintaa",
        "Digitaalisen tiedon ja järjestelmien suojaamista",
        "Sosiaalisen median valvontaa"
      ],
      correct: [2],
      explanation: "Kyberturvallisuus tarkoittaa digitaalisten järjestelmien ja niissä olevan tiedon suojaamista luvattomalta käytöltä, vahingoilta ja häiriöiltä. Terveydenhuollossa tämä liittyy erityisesti potilas- ja henkilötietojen suojaamiseen sekä hoitojärjestelmien toiminnan turvaamiseen."
    },
    {
      id: "y2",
      type: "single",
      question: "Mikä on kyberuhka?",
      options: [
        "Ohjelmistopäivitys",
        "Potilastietojärjestelmä",
        "Mahdollinen riski tietojärjestelmille",
        "Palomuuri"
      ],
      correct: [2],
      explanation: "Kyberuhka on mahdollinen tapahtuma tai toiminta, joka voi vaarantaa järjestelmän toiminnan tai tietojen turvallisuuden. Esimerkiksi haittaohjelmat, tietomurrot ja kalasteluviestit ovat kyberuhkia, koska ne voivat aiheuttaa vahinkoa organisaatiolle."
    },
    {
      id: "y3",
      type: "single",
      question: "Mikä on kyberturvan perusajatus?",
      options: [
        "Estää työnteko",
        "Suojata tietoa ja ihmisiä",
        "Lisätä riskejä",
        "Vaikeuttaa järjestelmien käyttöä"
      ],
      correct: [1],
      explanation: "Kyberturvan keskeinen tavoite on suojata tietoa, järjestelmiä ja ihmisiä. Terveydenhuollossa tämä tarkoittaa myös potilasturvallisuuden varmistamista, sillä toimimattomat järjestelmät voivat viivästyttää hoitoa tai vaarantaa potilaan."
    },
    {
      id: "y4",
      type: "single",
      question: "Mikä seuraavista tukee hyvää kyberturvaa?",
      options: [
        "Sama salasana kaikissa palveluissa",
        "Säännölliset päivitykset",
        "Julkinen Wi-Fi",
        "Tuntemattomien linkkien avaaminen"
      ],
      correct: [1],
      explanation: "Säännölliset päivitykset korjaavat ohjelmistojen tietoturva-aukkoja. Ilman päivityksiä järjestelmään voi jäädä haavoittuvuuksia, joita hyökkääjät voivat hyödyntää. Hyvä kyberturva perustuu ajantasaisiin järjestelmiin ja turvallisiin toimintatapoihin."
    },
    {
      id: "y5",
      type: "single",
      question: "Mikä on haavoittuvuus?",
      options: [
        "Käyttäjän sormen haava",
        "Järjestelmän heikkous, joka mahdollistaa riskin toteutumisen",
        "Palomuuri, joka estää hyökkäyksiä",
        "Murteella kirjoitettu salasanalause"
      ],
      correct: [1],
      explanation: "Haavoittuvuus tarkoittaa heikkoutta järjestelmässä, ohjelmistossa tai toiminnassa. Jos tällainen heikkous jää korjaamatta, sitä voidaan käyttää hyväksi tietomurrossa tai muussa hyökkäyksessä."
    },
    {
      id: "y6",
      type: "single",
      question: "Mikä on tärkeintä kyberturvassa?",
      options: [
        "Vanhat toimivat järjestelmät",
        "Ihmisten huolellinen toiminta ja kouluttaminen",
        "Nopeus",
        "Huolella suunniteltu design"
      ],
      correct: [1],
      explanation: "Teknologia on tärkeää, mutta ratkaisevaa on ihmisten toiminta. Huolellisuus, ohjeiden noudattaminen ja koulutus ehkäisevät tehokkaasti monia kyberuhkia. Jokainen työntekijä vaikuttaa omalla toiminnallaan organisaation turvallisuuteen."
    }
  ]
};

export default yleinen;