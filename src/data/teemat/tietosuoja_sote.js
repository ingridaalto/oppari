const tietosuoja_sote = {
  id: "tietosuoja_sote",
  title: "Tietosuoja",
  slides: [

    {
      title: "Tietosuoja on osa potilasturvallisuutta",
      text:
        "Tietosuoja tarkoittaa henkilötietojen suojaamista ja asianmukaista käsittelyä. Sosiaali- ja terveysalalla käsitellään erityisen arkaluonteisia tietoja, kuten terveystietoja ja sosiaalihuollon asiakastietoja. Tietosuoja ei ole vain lakisääteinen velvollisuus – se on osa luottamusta ja potilasturvallisuutta. Jos tietoja käsitellään huolimattomasti, seuraukset voivat koskea sekä yksityisyyttä että hoidon laatua."
    },

    {
      title: "GDPR ja lainsäädäntö",
      bullets: [
        "GDPR on EU:n yleinen tietosuoja-asetus.",
        "Se määrittelee, miten henkilötietoja tulee käsitellä ja suojata.",
        "Sote-alalla käsitellään erityisiin henkilötietoryhmiin kuuluvia tietoja (esim. terveystiedot).",
        "Organisaation on pystyttävä osoittamaan, että tietosuojaa noudatetaan."
      ]
    },

    {
  title: "Tietovuoto ja tietomurto – mitä eroa?",
  text:
    "Tietovuoto tarkoittaa tilannetta, jossa henkilötietoja päätyy vääriin käsiin tai tulee julki ilman lupaa. Tietomurto on luvaton tunkeutuminen tietojärjestelmään. Tietomurto voi johtaa tietovuotoon, mutta tietovuoto voi syntyä myös inhimillisen virheen seurauksena, esimerkiksi väärälle vastaanottajalle lähetetystä viestistä. Siksi kaikki tietosuojaongelmat eivät johdu hakkeroinnista, vaan myös arjen huolimattomuus voi aiheuttaa vakavan tilanteen.",
  interactive: {
    type: "choice_reveal",
    prompt: "Työntekijä lähettää vahingossa potilastietoja väärälle vastaanottajalle. Mistä on kyse?",
    options: [
      {
        label: "Tietovuoto",
        feedback:
          "Kyllä. Tässä tiedot päätyvät vääriin käsiin ilman lupaa, mutta kyse ei välttämättä ole tietojärjestelmään kohdistuneesta murrosta."
      },
      {
        label: "Tietomurto",
        feedback:
          "Ei suoraan. Tietomurto tarkoittaa luvatonta tunkeutumista tietojärjestelmään. Tässä kyse on inhimillisestä virheestä."
      },
      {
        label: "Ei kumpikaan",
        feedback:
          "Ei. Tilanne on tietosuojaongelma, koska henkilötietoja on päätynyt väärälle vastaanottajalle."
      }
    ],
    highlight: 0
  }
},

    {
      title: "Miten tietovuoto voi vaikuttaa sote-alalla?",
      lines: [
        "✅ Potilaan tai asiakkaan yksityisyys voi vaarantua.",
        "✅ Luottamus organisaatioon voi heikentyä.",
        "⚠️ Virheelliset tai puuttuvat tiedot voivat vaikuttaa hoitopäätöksiin.",
        "⚠️ Organisaatiolle ja sen työntekijöille voi seurata oikeudellisia ja taloudellisia seuraamuksia."
      ],
     
    },

    {
      title: "Kuka vastaa tietosuojasta?",
      text:
        "Vaikka organisaatiolla on johto, tietosuojavastaava ja IT-asiantuntijat, tietosuoja toteutuu arjessa jokaisen työntekijän toiminnassa. Huolellinen kirjautuminen, oikeiden vastaanottajien tarkistaminen ja ohjeiden noudattaminen ovat osa jokaisen ammatillista vastuuta. Tietosuoja ei siis ole vain johdon tai IT-osaston tehtävä, vaan jokainen työntekijä vaikuttaa omalla toiminnallaan siihen, pysyvätkö tiedot turvassa."
    }

  ],

  questions: [

    {
      id: "t1",
      type: "single",
      question: "Mikä on GDPR?",
      options: ["Haittaohjelma", "EU:n tietosuoja-asetus", "Toimintatapasuositus", "Monivaiheinen tunnistautuminen"],
      correct: [1],
      explanation:
        "GDPR (General Data Protection Regulation) on EU:n yleinen tietosuoja-asetus. Se määrittelee, miten henkilötietoja tulee käsitellä, suojata ja säilyttää. Sote-alalla tämä koskee erityisesti terveystietoja ja muita arkaluonteisia henkilötietoja."
    },

    {
      id: "t2",
      type: "single",
      question: "Kuka vastaa kyberturvasta organisaatiossa?",
      options: ["Johto", "IT-osasto", "Jokainen työntekijä", "Tietoturvatiimi"],
      correct: [2],
      explanation:
        "Vaikka organisaatiossa on nimettyjä vastuutahoja, tietoturva ja tietosuoja toteutuvat arjen toiminnassa. Jokainen työntekijä vastaa omasta toiminnastaan, kuten tunnusten suojaamisesta ja tietojen huolellisesta käsittelystä."
    },

    {
      id: "t3",
      type: "single",
      question: "Mikä näistä kuvaa tietovuotoa parhaiten?",
      options: ["Tietojen katoaminen", "Tietoturvan toinen nimitys", "Tietojen päätyminen vääriin käsiin", "Tietojen varmuuskopiointia"],
      correct: [2],
      explanation:
        "Tietovuoto tarkoittaa tilannetta, jossa henkilötietoja tai muuta luottamuksellista tietoa päätyy luvattomasti ulkopuolisille. Se voi johtua tietomurrosta tai inhimillisestä virheestä."
    },

    {
      id: "t4",
      type: "multi",
      question: "Miten tietovuoto voi vaikuttaa sosiaali- ja terveysalalla? Valitse useita.",
      options: [
        "Potilaan turvallisuus voi vaarantua",
        "Potilaiden arkaluonteiset tiedot voivat päätyä vääriin käsiin",
        "Internet-yhteys hidastuu hetkellisesti",
        "Organisaation maine ja luottamus voivat kärsiä"
      ],
      correct: [0, 1, 3],
      explanation:
        "Tietovuodolla voi olla vakavia seurauksia: potilaan yksityisyys ja turvallisuus voivat vaarantua, arkaluonteiset tiedot voivat päätyä vääriin käsiin ja organisaation maine sekä luottamus voivat heikentyä. Kyse ei ole vain teknisestä häiriöstä."
    },

    {
      id: "t5",
      type: "single",
      question: "Mikä on tietomurto?",
      options: ["Sallittu tietojen käyttö", "Luvaton murtautuminen tietojärjestelmään", "Tietoturvan toinen nimitys", "Salasanan murtamattomuus"],
      correct: [1],
      explanation:
        "Tietomurto tarkoittaa luvatonta pääsyä tietojärjestelmään. Se voi mahdollistaa tietojen katselun, muuttamisen tai varastamisen ilman oikeutta."
    }

  ]
};

export default tietosuoja_sote;