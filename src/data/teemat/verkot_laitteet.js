const verkot_laitteet = {
  id: "verkot_laitteet",
  title: "Verkot ja laitteet",
  slides: [

  {
    title: "Verkkoturvallisuus on osa toiminnan jatkuvuutta",
    text:
      "Sote-ympäristössä verkko mahdollistaa potilastietojen käsittelyn, ajanvaraukset, viestinnän ja laitteiden välisen tiedonsiirron. Verkkoturvallisuus ei ole vain tekninen asia, vaan osa hoidon jatkuvuutta ja tietosuojan toteutumista. Häiriö tai väärinkäyttö voi vaikuttaa suoraan palvelun saatavuuteen."
  },

  {
    title: "Palomuuri ja VPN – eri tarkoitukset",
    bullets: [
      "Palomuuri valvoo ja rajoittaa verkkoliikennettä ennalta määriteltyjen sääntöjen mukaan.",
      "Se estää luvattomia yhteyksiä organisaation verkkoon.",
      "VPN luo salatun yhteyden käyttäjän ja organisaation verkon välille.",
      "VPN on erityisen tärkeä etätyössä ja julkisissa verkoissa."
    ]
  },

 {
  title: "Julkiset Wi-Fi-verkot – mitä riskejä?",
  text:
    "Avoimissa Wi-Fi-verkoissa (esim. kahviloissa, hotelleissa tai lentoasemilla) liikenne voi olla suojaamatonta. Hyökkääjä voi yrittää kaapata tietoliikennettä, ohjata käyttäjän huijaussivulle tai esiintyä valheellisena verkon tarjoajana. Arkaluonteisia potilas- tai asiakastietoja ei tule käsitellä julkisessa verkossa ilman organisaation hyväksymää suojattua yhteyttä. Etätyötilanteissa on erityisen tärkeää varmistaa, että käytössä on suojattu ja organisaation ohjeistuksen mukainen verkkoyhteys.",
  callout: {
    label: "Ilmiö",
    icon: "📡",
    text:
      "Hyökkääjä voi luoda julkiseen tilaan vale-Wi-Fi-verkon, jonka nimi muistuttaa oikeaa verkkoa (ns. 'evil twin'). Kun käyttäjä yhdistää siihen, liikennettä voidaan seurata tai ohjata huijaussivuille."
  }
},

  {
    title: "Turvallinen laite- ja verkkokäyttäytyminen",
    lines: [
      "✅ Käytä organisaation hyväksymiä verkkoja ja yhteyksiä.",
      "✅ Käytä VPN-yhteyttä etätyössä ohjeiden mukaisesti.",
      "⚠️ Älä käsittele potilas- tai asiakastietoja avoimessa Wi-Fi-verkossa.",
      "⚠️ Älä yhdistä laitetta tuntemattomiin verkkoihin ilman tarvetta."
    ]
  }

],
 questions: [
  {
    id: "v1",
    type: "single",
    question: "Mikä on palomuuri?",
    options: ["Virustorjunta", "Verkon suojamekanismi", "VPN", "Reititin"],
    correct: [1],
    explanation:
      "Palomuuri on verkon suojamekanismi, joka valvoo ja suodattaa liikennettä ennalta määriteltyjen sääntöjen perusteella. Se estää luvattomia yhteyksiä ja suojaa organisaation verkkoa ulkoisilta uhkilta."
  },

  {
    id: "v2",
    type: "single",
    question: "Mikä on VPN?",
    options: ["Avoin verkko", "Suojattu verkkoyhteys", "Haittaohjelma", "Kiristysviesti"],
    correct: [1],
    explanation:
      "VPN (Virtual Private Network) on suojattu, salattu verkkoyhteys käyttäjän ja organisaation verkon välillä. Se suojaa tietoliikennettä erityisesti julkisissa verkoissa ja etätyössä."
  },

  {
    id: "v3",
    type: "single",
    question: "Mikä näistä on julkisen Wi-Fi-verkon riski?",
    options: ["Nopeus", "Palomuuri", "Automaattiset päivitykset", "Tietojen kaappaus ja urkinta"],
    correct: [3],
    explanation:
      "Avoimessa Wi-Fi-verkossa tietoliikenne voi olla suojaamatonta, jolloin hyökkääjä voi yrittää kaapata tai seurata liikennettä. Tämä voi johtaa kirjautumistietojen tai muun luottamuksellisen tiedon paljastumiseen."
  },

  {
    id: "v4",
    type: "single",
    question: "Miksi mobiilidataa on usein turvallisempi käyttää kuin avointa Wi-Fi-yhteyttä?",
    options: ["Se on salatumpi", "Se on hitaampi", "Se ei vaadi tunnuksia tai tunnistautumista", "Se on ilmainen käyttäjälle"],
    correct: [0],
    explanation:
      "Mobiilidata on yleensä salattu operaattorin verkossa, eikä sitä jaeta muiden käyttäjien kanssa samalla tavalla kuin avointa Wi-Fi-verkkoa. Siksi riski tietojen kaappaamiseen on usein pienempi."
  }
]
};

export default verkot_laitteet;
