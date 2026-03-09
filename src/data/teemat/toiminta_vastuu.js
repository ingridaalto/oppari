const toiminta_vastuu = {
  id: "toiminta_vastuu",
  title: "Käyttäjän toiminta ja vastuu",
 slides: [

  {
    title: "Kyberturva toteutuu arjessa",
    text:
      "Tekniset ratkaisut, kuten palomuurit ja suojausjärjestelmät, luovat perustan kyberturvalle. Käytännössä turvallisuus toteutuu kuitenkin käyttäjän toiminnassa: huolellisessa kirjautumisessa, viestien tarkistamisessa ja ohjeiden noudattamisessa. Sote-ympäristössä tämä liittyy suoraan potilasturvallisuuteen ja luottamukseen."
  },

  {
    title: "Mitä käyttäjän vastuu tarkoittaa?",
    lines: [
      "✅ Noudata organisaation ohjeita ja käytä hyväksyttyjä järjestelmiä.",
      "✅ Käsittele potilas- ja asiakastietoja vain työtehtävän edellyttämässä laajuudessa.",
      "⚠️ Älä ohita turvallisuuskäytäntöjä kiireen vuoksi.",
      "⚠️ Älä jaa tunnuksia tai käyttöoikeuksia toisille."
    ]
  },

  {
    title: "Pääsynhallinta – miksi kaikilla ei ole samoja oikeuksia?",
    text:
      "Pääsynhallinta tarkoittaa käyttöoikeuksien määrittelyä siten, että työntekijä pääsee vain niihin tietoihin ja järjestelmiin, joita hän tarvitsee työtehtävässään. Tämä vähentää vahinkojen riskiä ja suojaa arkaluonteisia tietoja. Liialliset käyttöoikeudet lisäävät tietovuodon tai väärinkäytön mahdollisuutta. Jokaisen tulee kirjautua vain omilla tunnuksillaan. Tunnuksia ei saa luovuttaa kollegalle edes kiireessä, sillä kaikki toimenpiteet järjestelmässä yhdistyvät käyttäjätunnukseen.",
  callout: {
    label: "Ammatillinen vastuu",
    icon: "📂",
    text:
      "Potilastietojärjestelmissä kaikki katselut ja muutokset lokitetaan käyttäjätunnuksen mukaan. Tunnusten suojaaminen on myös oman ammatillisen vastuun suojaamista."
  }
  },

  {
    title: "Epäilyttävä viesti – pysähdy ennen kuin toimit",
    text:
      "Tuntemattomat tai poikkeavat viestit voivat olla huijausyrityksiä. Kiireellinen sävy, painostus tai poikkeava linkki ovat varoitusmerkkejä. Tärkeintä on olla klikkaamatta ja toimia organisaation ohjeiden mukaisesti.",
  },

  {
    title: "Huolellisuus on paras suoja",
    bullets: [
      "Huolimattomuus on yksi merkittävimmistä kyberturvariskeistä.",
      "Turvallinen toiminta ei hidasta työtä – se suojaa sitä.",
      "Kysy mieluummin kuin arvaa, jos olet epävarma.",
      "Nopea raportointi vähentää vahinkoja."
    ]
  }

],
 questions: [

  {
    id: "k1",
    type: "single",
    question: "Mikä on käyttäjän vastuu toimivassa kyberturvassa?",
    options: [
      "Ei mitään vastuuta, vastuu on IT-osastolla",
      "Valvoa verkkoa itsenäisesti",
      "Kehittää ohjelmia itsenäisesti",
      "Noudattaa ohjeita ja toimia huolellisesti"
    ],
    correct: [3],
    explanation:
      "Kyberturva ei ole vain IT-osaston tehtävä. Jokainen työntekijä vastaa omasta toiminnastaan, kuten ohjeiden noudattamisesta, tunnusten suojaamisesta ja epäilyttävien tilanteiden raportoinnista."
  },

  {
    id: "k2",
    type: "single",
    question: "Mitä tarkoittaa pääsynhallinta?",
    options: [
      "Salasanan luonti",
      "Käyttöoikeuksien hallintaa",
      "Palomuurin suodatus",
      "VPN-yhteyden käyttö"
    ],
    correct: [1],
    explanation:
      "Pääsynhallinta tarkoittaa käyttöoikeuksien hallintaa siten, että käyttäjällä on pääsy vain niihin tietoihin ja järjestelmiin, joita hän työssään tarvitsee. Tämä vähentää väärinkäytön ja tietovuodon riskiä."
  },

  {
    id: "k3",
    type: "single",
    question: "Miten tulisi toimia tuntemattoman ja epäilyttävän sähköpostiviestin kanssa?",
    options: [
      "Avata liite ja tarkistaa viestin sisältö rauhallisesti",
      "Vastata heti sen enempää miettimättä",
      "Raportoida viesti ja poistaa se ohjeen mukaan.",
      "Jakaa eteenpäin työkavereille, jotta muut voivat kertoa sinulle viestin sisällöstä"
    ],
    correct: [2],
    explanation:
      "Epäilyttävää viestiä ei tule avata tai vastata siihen. Oikea toimintatapa on olla klikkaamatta linkkejä, raportoida viesti organisaation ohjeen mukaan ja poistaa se ohjeiden mukaisesti."
  },

  {
    id: "k4",
    type: "single",
    question: "Mikä on suuri riski kyberturvalle?",
    options: ["Tehokkuus", "Oppiminen", "Huolimattomuus", "Päivitykset"],
    correct: [2],
    explanation:
      "Huolimattomuus, kuten ohjeiden sivuuttaminen tai linkkien klikkaaminen ilman tarkistusta, on yksi merkittävimmistä kyberturvariskeistä. Usein kyse ei ole tekniikasta vaan inhimillisestä toiminnasta."
  },

  {
    id: "k5",
    type: "drag_order",
    question: "Järjestä vaiheet oikeaan järjestykseen kun epäilet phishing-viestiä:",
    items: [
      "Älä klikkaa linkkejä tai avaa liitteitä",
      "Tarkista lähettäjä ja osoite huolellisesti",
      "Raportoi viesti organisaation ohjeen mukaan",
      "Poista viesti ohjeen mukaan"
    ],
    correctOrder: [0, 1, 2, 3],
    explanation:
      "Ensimmäinen ja tärkein vaihe on olla klikkaamatta linkkejä tai liitteitä. Sen jälkeen tarkistetaan lähettäjä, raportoidaan viesti organisaation ohjeen mukaisesti ja lopuksi poistetaan viesti ohjeiden mukaan."
  }

]
};

export default toiminta_vastuu;
