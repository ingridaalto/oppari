// src/data/teemat/exam.js
const exam = [
  /*{
    id: "ex1",
    type: "single",
    question:
      "Saavut työvuoroon ja huomaat avoimen potilastietojärjestelmän koneella, jonka käyttäjää ei näy. Mikä on oikein?",
    options: [
      "Kirjaudun ulos ja jatkan työskentelyä",
      "Käytän tilannetta hyväkseni tarkistaakseni yhden potilaan tiedot",
      "Lukitsen työaseman ja ilmoitan tilanteesta ohjeen mukaan",
      "Jätän asian huomiotta"
    ],
    correct: [2],
    explanation:
      "Avoin työasema on tietosuojariski. Lukitse työasema ja ilmoita tilanteesta organisaation ohjeen mukaan."
  },

  {
    id: "ex2",
    type: "multi",
    question:
      "Mitkä tilanteet rikkovat pääsynhallinnan periaatetta? (Valitse useita)",
    options: [
      "Hoitaja tarkistaa tuttavansa potilastiedot uteliaisuudesta",
      "Lääkäri avaa vain oman potilaansa tiedot",
      "Työntekijä käyttää kollegan tunnuksia kiireessä",
      "Opiskelija käyttää rajattuja harjoitteluoikeuksia"
    ],
    correct: [0, 2],
    explanation:
      "Pääsynhallinta perustuu työtehtävään ja omiin tunnuksiin. Uteliaisuus ja tunnusten jakaminen rikkovat periaatetta."
  },

  {
    id: "ex3",
    type: "single",
    question:
      "Osastonhoitajalta näyttävä videopuhelu pyytää lähettämään potilaslistan \"välittömästi auditointiin\". Mikä on olennaisin riskitekijä?",
    options: [
      "Tietojen kiireellinen siirto ilman varmistusta",
      "Videoyhteyden huono laatu",
      "Potilaslista on pitkä",
      "Puhelu tulee työajalla"
    ],
    correct: [0],
    explanation:
      "Kiire ja varmistuksen puute ovat tyypillisiä manipulointikeinoja (myös deepfake-tilanteissa)."
  },

  {
    id: "ex4",
    type: "single",
    question:
      "Teet etätyövuoroa kotona ja huomaat VPN-yhteyden katkenneen, mutta potilastietojärjestelmä näyttää silti toimivan. Mitä teet?",
    options: [
      "Jatkan työskentelyä, koska järjestelmä toimii",
      "Kirjaudun ulos ja yhdistän VPN:n uudelleen ennen jatkamista",
      "Vaihdan selainta",
      "Lähetän potilastiedot nopeasti ennen kuin yhteys katkeaa"
    ],
    correct: [1],
    explanation:
      "Arkaluonteisia tietoja ei tule käsitellä ilman vaadittua suojattua yhteyttä. Palauta VPN ja jatka vasta sen jälkeen."
  },

  {
    id: "ex5",
    type: "single",
    question:
      "Henkilö esittäytyy laitehuollon työntekijäksi ja pyytää pääsyä laitetilaan ilman kulkulupaa. Hän vaikuttaa kiireiseltä. Mitä teet?",
    options: [
      "Päästän hänet sisään, koska hänellä on työvaatteet",
      "Pyydän virallisen tunnisteen ja varmistan asian esihenkilöltä",
      "Jätän oven raolleen ja jatkan työskentelyä",
      "Ohjaan hänet itse laitteelle"
    ],
    correct: [1],
    explanation:
      "Fyysinen sosiaalinen manipulointi on yleistä. Pääsy suojattuihin tiloihin vaatii tunnistamisen ja luvan varmistamisen."
  },

  {
    id: "ex6",
    type: "single",
    question:
      "Saat sähköpostin, jossa kehotetaan vaihtamaan salasanasi välittömästi tietoturvapäivityksen vuoksi. Viesti näyttää uskottavalta. Mikä on turvallisin toimintatapa?",
    options: [
      "Klikkaan viestin linkkiä ja vaihdan salasanan",
      "Kirjaudun organisaation järjestelmään suoraan virallisen osoitteen kautta ja tarkistan ilmoituksen",
      "Vastaan viestiin varmistaakseni sen aitouden",
      "Ohitan viestin kokonaan"
    ],
    correct: [1],
    explanation:
      "Salasanat vaihdetaan aina virallisen kirjautumistien kautta, ei sähköpostilinkin kautta."
  },

  {
    id: "ex7",
    type: "single",
    question:
      "Miksi verkkoon liitettyjä lääkintälaitteita pidetään erityisenä riskinä?",
    options: [
      "Ne ovat hitaita",
      "Niitä ei voi käyttää ilman internetiä",
      "Niiden haavoittuvuus voi vaikuttaa suoraan hoitoprosessiin",
      "Ne kuluttavat sähköä"
    ],
    correct: [2],
    explanation:
      "Verkkoon liitettyjen laitteiden haavoittuvuudet voivat vaikuttaa sekä saatavuuteen että hoitoprosessien toimivuuteen."
  },

  {
    id: "ex8",
    type: "drag_order",
    question:
      "Epäilet, että kirjautumistietosi ovat päätyneet vääriin käsiin (esim. klikkasit epäilyttävää linkkiä). Järjestä oikea toimintajärjestys:",
    items: [
      "Hylkää mahdolliset odottamattomat MFA-pyynnöt",
      "Vaihda salasana virallisen järjestelmän kautta",
      "Tarkista, onko kirjautumishistoriassa poikkeavaa toimintaa",
      "Ilmoita tilanteesta IT-tuelle/tietoturvalle"
    ],
    correctOrder: [3, 0, 2, 1],
    explanation:
      "Toimi ripeästi: ilmoita, hylkää epäilyttävät MFA-pyynnöt, tarkista poikkeamat ja vaihda salasana virallisesti."
  },

  {
    id: "ex9",
    type: "single",
    question:
      "Esihenkilösi pyytää salasanaasi, jotta hän voi kirjautua nopeasti järjestelmään, koska on unohtanut omansa ja tilanne on kiireellinen. Mitä teet?",
    options: [
      "Annan salasanan, koska kyseessä on esihenkilö ja potilastilanne on kiireellinen",
      "Kirjaudun itse hänen puolestaan ja poistun koneelta",
      "Kieltäydyn kohteliaasti ja ohjaan hänet noudattamaan organisaation tunnusten palautusprosessia",
      "Kirjoitan salasanan paperille, jotta hän voi käyttää sitä hetken"
    ],
    correct: [2],
    explanation:
      "Salasanoja ei jaeta kenellekään. Jokaisen tulee käyttää omia tunnuksiaan ja virallista palautusprosessia."
  },

  {
    id: "ex10",
    type: "single",
    question:
      "Tietokoneesi näytölle ilmestyy ilmoitus: “Tiedostosi on salattu. Maksa 48 tunnin kuluessa.” Potilastietojärjestelmä ei enää avaudu. Mikä on todennäköisin tilanne?",
    options: [
      "Tavallinen järjestelmäpäivitys",
      "Palvelunestohyökkäys",
      "Kiristyshaittaohjelma (ransomware)",
      "VPN-yhteyden katkeaminen"
    ],
    correct: [2],
    explanation:
      "Ransomware salaa tiedostoja ja vaatii lunnaita. Oireet sopivat kiristyshaittaohjelmaan."
  },

  {
    id: "ex11",
    type: "single",
    question:
      "Ajanvarausjärjestelmään ei pääse kirjautumaan, mutta mitään salausviestiä ei näy. Järjestelmä antaa jatkuvasti virheilmoituksia ja on erittäin hidas. Mikä voisi olla syynä?",
    options: [
      "Roskapostiviesti",
      "Kiristyshaittaohjelma",
      "Mahdollinen palvelunestohyökkäys (DDoS)",
      "Yksittäisen käyttäjän väärä salasana"
    ],
    correct: [2],
    explanation:
      "Laaja palvelun hidastuminen tai estyminen ilman salausviestejä voi viitata palvelunestohyökkäykseen."
  },

  {
    id: "ex12",
    type: "single",
    question:
      "Saat työpäivän aikana sähköpostin otsikolla: “Pakollinen koulutus – klikkaa tästä vahvistaaksesi.” Lähettäjän osoite muistuttaa organisaation osoitetta, mutta siinä on pieni kirjoitusvirhe. Mitä tämä todennäköisimmin on?",
    options: [
      "Organisaation kiireellinen ilmoitus",
      "VPN-päivitys",
      "Mahdollinen roskaposti- tai phishing-viesti",
      "Automaattinen kalenterikutsu"
    ],
    correct: [2],
    explanation:
      "Kirjoitusvirhe osoitteessa ja klikkauskehotus ovat tyypillisiä huijauksen merkkejä."
  },

  {
    id: "ex13",
    type: "single",
    question:
      "Miksi roskaposti on sote-ympäristössä erityinen riski?",
    options: [
      "Se vie sähköpostitilaa",
      "Se hidastaa tietokonetta",
      "Yksi huolimaton klikkaus voi vaarantaa potilastietojen luottamuksellisuuden ja saatavuuden",
      "Se lisää kalenterikutsuja"
    ],
    correct: [2],
    explanation:
      "Yksi klikkaus voi käynnistää haitallisen ketjun (tunnusten kalastelu, haittaohjelma), mikä voi vaarantaa sekä tietosuojan että toiminnan."
  },

  {
    id: "ex14",
    type: "single",
    question:
      "Aamuvuorossa huomataan, että useat työntekijät ovat saaneet saman sähköpostin, ja osa heistä klikkasi liitettä. Hetken kuluttua tiedostot eivät avaudu ja verkko hidastuu. Mikä tapahtumaketju on todennäköisin?",
    options: [
      "VPN-yhteys katkesi",
      "Haitallinen liite johti kiristyshaittaohjelman leviämiseen verkossa",
      "Palvelunestohyökkäys ilman sisäistä vaikutusta",
      "Automaattinen ohjelmistopäivitys"
    ],
    correct: [1],
    explanation:
      "Haitallinen liite + tiedostojen avautumattomuus viittaa kiristyshaittaohjelmaan, joka voi levitä ja häiritä verkkoa."
  } , */

  {
  id: "ex15",
  type: "categorize",
  question: "Yhdistä oikeat ilmiöt oikeaan kyberuhkaan.",
  categories: [
    {
      id: "ddos",
      label: "DDoS",
      correctItems: [0, 1]
    },
    {
      id: "phishing",
      label: "Phishing",
      correctItems: [2, 3]
    },
    {
      id: "ransomware",
      label: "Ransomware",
      correctItems: [4, 5]
    }
  ],
  items: [
    "Järjestelmä hidastuu merkittävästi",
    "Palvelu ei ole käyttäjien saatavilla suuren kuormituksen vuoksi",
    "Viestissä luodaan kiireen tuntua",
    "Epäilyttävä linkki tai kirjautumispyyntö sähköpostissa",
    "Tiedostoja ei voi avata",
    "Näytölle ilmestyy lunnasviesti"
  ],
  explanation:
    "DDoS näkyy usein palvelun hidastumisena tai estymisenä. Phishingiin liittyy kiire, huijausviestit ja linkit. Ransomware puolestaan salaa tiedostoja ja vaatii usein lunnaita."
}
];



export default exam;