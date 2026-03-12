const uhat_laitteet_ulkoiset = {
  id: "uhat_laitteet_ulkoiset",
  title: "Ulkoiset uhat ja laitteet",
  slides: [
    {
      title: "Ulkoisten uhkien merkitys sote-alalla",
      text:
        "Ulkoiset uhat ovat hyökkäyksiä, jotka tulevat organisaation ulkopuolelta: verkon kautta, huijausten avulla tai fyysisten laitteiden kautta. Hyökkääjät voivat yrittää häiritä palveluita, päästä käsiksi tietoihin tai hyödyntää järjestelmiä muihin hyökkäyksiin. Sote-ympäristössä vaikutus voi näkyä nopeasti palvelun saatavuudessa, esimerkiksi ajanvarauksen, viestinnän tai potilastietojärjestelmien toiminnassa. Ulkoiset uhat eivät aina kohdistu suoraan yksittäiseen työntekijään, mutta käyttäjän huolellinen toiminta, kuten epäilyttävien laitteiden välttäminen ja ohjeiden noudattaminen, vähentää riskiä merkittävästi."
    },

   {
  title: "Palvelunestohyökkäys (DDoS)",
  bullets: [
    "DDoS kuormittaa palvelua niin, että se hidastuu tai ei ole käytettävissä.",
    "Tavoite ei aina ole varastaa tietoa, vaan estää pääsy järjestelmiin tai aiheuttaa häiriötä.",
    "Sote-alalla vaikutus voi näkyä esimerkiksi ajanvarauksen, viestinnän tai potilastietojärjestelmän käytön vaikeutumisena.",
    "Jos kriittiset järjestelmät eivät ole saatavilla, hoitoprosessit voivat viivästyä ja potilasturvallisuus heikentyä."
  ]
},

    {
      title: "Identiteettivarkaus – luottamuksen väärinkäyttöä",
      text:
        "Identiteettivarkaudessa rikollinen käyttää toisen henkilöllisyyttä tai henkilötietoja esimerkiksi kirjautumiseen, tilausten tekemiseen tai huijauksiin. Työympäristössä tämä voi tarkoittaa myös sitä, että hyökkääjä esiintyy työntekijänä, IT-tukena tai yhteistyökumppanina ja yrittää saada käyttöoikeuksia, tietoja tai rahansiirtoja. Tällaisissa tilanteissa hyökkääjä pyrkii usein hyödyntämään luottamusta tai kiirettä. Siksi on tärkeää tarkistaa poikkeavat pyynnöt ja varmistaa henkilöllisyys ennen kuin luovuttaa tietoja tai tekee muutoksia järjestelmiin."
    },

    {
      title: "Tuntemattomat USB-laitteet",
      lines: [
        "✅ Tuntematon USB voi sisältää haittaohjelman tai käynnistää haitallisen toiminnon automaattisesti.",
        "✅ Toimi aina ohjeen mukaan: ilmoita löydöstä IT-tuelle / tietoturvalle.",
        "⚠️ Älä testaa laitetta omalla työasemalla tai katso mitä siellä on.",
        "⚠️ Älä anna sitä kollegalle kokeiltavaksi tai vie kotiin."
      ]
    },

   {
     title: "IoT-laitteet sairaalaympäristössä",
     text:
       "IoT (Internet of Things) tarkoittaa verkkoon liitettyjä fyysisiä laitteita. Sairaalassa tällaisia voivat olla esimerkiksi potilasmonitorit, infuusiopumput, kuvantamislaitteet, kulunvalvontajärjestelmät ja älykkäät kiinteistöjärjestelmät. Monet näistä laitteista ovat yhteydessä verkkoon huollon, etävalvonnan ja tiedonsiirron vuoksi. Jos laitteiden ohjelmistot eivät ole ajan tasalla tai etähallinta on heikosti suojattu, laitteita voidaan yrittää käyttää hyökkäyksissä tai häiriön aiheuttamiseen. Verkkoon liitettyjä laitteita voidaan myös käyttää bottiverkoissa esimerkiksi palvelunestohyökkäysten toteuttamiseen. Sairaalaympäristössä kyse ei ole vain tietosuojasta, vaan myös fyysisen ympäristön ja hoitoprosessien toimivuudesta. Siksi laitteiden verkottaminen, päivitykset ja käyttöoikeuksien hallinta ovat osa potilasturvallisuutta.",
      callout: {
        label: "Tapausesimerkki",
        icon: "🚰",
        text:
          "Yhdysvalloissa Oldsmarin kaupungissa (Florida) raportoitiin vuonna 2021 tapaus, jossa hyökkääjä pääsi etähallinnan kautta vedenkäsittelyjärjestelmään ja yritti muuttaa kemikaaliarvoja. Muutos huomattiin nopeasti ja peruttiin, eikä asukkaille aiheutunut vahinkoa. Tapaus havainnollistaa, että heikosti suojatut ohjausjärjestelmät voivat vaikuttaa fyysiseen maailmaan."
      }
    }
  ],

  questions: [
    {
      id: "u1",
      type: "single",
      question: "Mikä on palvelunestohyökkäys (DDoS)?",
      options: [
        "Tietojen varastamista",
        "Palvelun kuormittamista käytön estämiseksi",
        "Tietojenkalastelun muoto",
        "Virustorjunnan toimintaperiaate"
      ],
      correct: [1],
      explanation:
        "Palvelunestohyökkäyksessä (DDoS) palvelua kuormitetaan niin paljon, että se hidastuu tai muuttuu käyttökelvottomaksi. Tavoitteena on estää palvelun käyttö, ei välttämättä varastaa tietoa."
    },

    {
      id: "u2",
      type: "single",
      question: "Mikä on identiteettivarkaus?",
      options: ["Laitteen katoaminen", "Suojaava ohjelmistopäivitys", "Toisen henkilöllisyyden käyttö", "VPN"],
      correct: [2],
      explanation:
        "Identiteettivarkaus tarkoittaa toisen henkilön tietojen tai henkilöllisyyden luvatonta käyttöä. Sitä voidaan käyttää esimerkiksi huijauksiin, kirjautumiseen tai luottamuksen rakentamiseen organisaatiossa."
    },

    {
      id: "u3",
      type: "single",
      question: "Miksi tuntematon USB-muistitikku on riski?",
      options: ["Se voi olla rikki", "Se voi sisältää haittaohjelman", "Se hidastaa automaattisesti tietokonetta", "Se vie tallennustilaa"],
      correct: [1],
      explanation:
        "Tuntematon USB-laite voi sisältää haittaohjelman tai käynnistää haitallisen toiminnon. Siksi sitä ei tule liittää työasemaan, vaan toimia organisaation ohjeen mukaisesti."
    },

    {
      id: "u4",
      type: "single",
      question: "Mitä tulisi tehdä, jos työpaikalta löytyy tuntematon USB-laite?",
      options: ["Ilmoittaa IT-tuelle", "Antaa kollegalle kokeiltavaksi", "Viedä kotiin", "Testata se omalla työasemalla"],
      correct: [0],
      explanation:
        "Oikea tapa on ilmoittaa IT-tuelle tai tietoturvalle. USB-laitetta ei tule testata, jakaa eteenpäin tai viedä kotiin, koska se voi levittää haittaohjelmia."
    },

    {
      id: "u5",
      type: "single",
      question: "Mikä on IoT-laite?",
      options: ["Ohjelmisto", "VPN-yhteys", "Internetiin yhdistetty fyysinen laite", "Palomuuri"],
      correct: [2],
      explanation:
        "IoT-laite on fyysinen laite, joka on yhdistetty internetiin tai organisaation verkkoon (esim. mittari, kamera, älylaite). Jos suojaus on heikko, laitetta voidaan käyttää hyökkäyksissä."
    },

    {
      id: "u6",
      type: "single",
      question: "Voiko kyberrikollinen käyttää kodinkoneita hyökkäyksissään?",
      options: ["Ei sentään", "Kyllä, jos laite on internetissä ja suojaamaton", "Vain tietokoneita", "Vain palvelimia"],
      correct: [1],
      explanation:
        "Kyllä voi. Internetiin kytketty ja huonosti suojattu laite voi joutua bottiverkkoon ja sitä voidaan käyttää esimerkiksi palvelunestohyökkäyksissä tai muissa haitallisissa tarkoituksissa."
    },

    {
      id: "u7",
      type: "single",
      question: "Voiko kyberrikollinen vaikuttaa jopa juomaveden laatuun?",
      options: [
        "Ei missään olosuhteissa",
        "Kyllä, jos kriittisiä järjestelmiä ei ole suojattu kyberrikollisuudelta",
        "Vain fyysisesti",
        "Vain elokuvissa"
      ],
      correct: [1],
      explanation:
        "Kyllä, periaatteessa. Jos kriittiset ohjausjärjestelmät (esim. automaatio/etähallinta) ovat heikosti suojattuja, niihin voidaan yrittää vaikuttaa kyberkeinoin. Tunnettu esimerkki on Oldsmarin (Florida) vedenkäsittelyjärjestelmään kohdistunut etäkäyttöyritys."
    }
  ]
};

export default uhat_laitteet_ulkoiset;