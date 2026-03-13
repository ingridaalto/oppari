const salasanat = {
  id: "salasanat",
  title: "Salasanat ja tunnistautuminen",
  slides: [

  {
    title: "Tunnistautuminen on osa ammatillista vastuuta",
    text:"Sosiaali- ja terveydenhuollon työympäristössä käyttäjätunnuksia ei käytetä ainoastaan järjestelmiin kirjautumiseen, vaan niiden avulla hallitaan pääsyä potilastietoihin. Tunnuksiin liitetään käyttäjän tekemät kirjaukset, jotka tallentuvat osaksi järjestelmän lokitietoja. Tunnusten asianmukainen suojaaminen on keskeinen osa potilasturvallisuutta sekä työntekijän oikeuturvaa, sillä lokitietojen avulla voidaan jälkikäteen todentaa, kuka on käyttänyt järjestelmää ja milloin."
  },

  {
  title: "Vahva salasana: pituus ja ainutlaatuisuus",
  lines: [
    "✅ Suosi pitkää salasanaa tai useasta sanasta muodostettua lausetta (vähintään 14–16 merkkiä).",
    "✅ Käytä eri salasanaa eri palveluissa, sillä näin estät ketjuvuodot, jos jokin palvelu vaarantuu.",
    "⚠️ Älä käytä henkilötietoja, työpaikan nimeä tai syntymävuosia.",
    "⚠️ Älä kirjoita salasanaa näkyville tai säilytä sitä helposti löydettävässä paikassa."
  ],
  interactive: {
  type: "choice_reveal",
  prompt: "Mikä näistä on vahvin vaihtoehto työympäristössä?",
  helper: "Paina esimerkkiä ja katso, miksi se on heikompi tai vahvempi.",
  options: [
    {
      label: "Ingrid1991!",
      feedback: "Tämä on heikko valinta, koska siinä käytetään henkilötietoa ja helposti arvattavaa rakennetta. Nimi ja syntymävuosi ovat juuri sellaisia tietoja, joita ei kannata käyttää salasanassa."
    },
    {
      label: "Sairaala1234",
      feedback: "Tämäkin on heikko valinta. Työpaikkaan liittyvä sana ja yksinkertainen numerosarja tekevät salasanasta ennustettavan, vaikka se olisi melko pitkä."
    },
    {
      label: "Kuu!Joki7-Lasi?Metsä92",
      feedback: "Tämä on selvästi vahvempi vaihtoehto. Se on pitkä, siinä on vaihtelua, eikä se perustu henkilötietoihin tai helposti arvattavaan sanaan. Tällainen pitkä ja ainutlaatuinen salasana tukee paremmin turvallista tunnistautumista."
    }
  ],
  highlight: 2
}
  },

  {
    title: "Salasana tulee vaihtaa: ",
    bullets: [
      "Jos epäilet kirjautuneesi huijaussivulle tai kalasteluviestiin.",
      "Jos saat odottamattoman kirjautumisvahvistuksen.",
      "Jos laite katoaa tai varastetaan.",
      "Jos organisaation ohjeistus sitä edellyttää.",
      "Jos huomaat tilillä toimintaa, jota et tunnista."
    ]
  },

  {
  title: "Monivaiheinen tunnistautuminen (MFA)",
  text:
    "MFA tarkoittaa, että kirjautuminen varmistetaan kahdella tai useammalla tekijällä (esim. salasana + kertakäyttökoodi tai hyväksyntä sovelluksessa). Tämä vähentää riskiä, että pelkkä vuotanut salasana riittäisi kirjautumiseen. Hyväksy vahvistus vain silloin, kun itse olet kirjautumassa. Odottamaton hyväksyntäpyyntö voi olla merkki hyökkäyksestä.",
  interactive: {
    type: "choice_reveal",
    prompt: "Saat puhelimeesi kirjautumisen hyväksyntäpyynnön, vaikka et itse ole kirjautumassa.",
    helper: "Mitä tekisit?",
    options: [
      {
        label: "Hyväksyn pyynnön nopeasti",
        feedback: "Tämä on riskialtista. Odottamaton MFA-pyyntö voi tarkoittaa, että joku muu yrittää kirjautua tunnuksillasi."
      },
      {
        label: "En hyväksy pyyntöä",
        feedback: "Tämä on turvallinen toimintatapa. Hyväksy vahvistus vain silloin, kun tiedät itse kirjautuvasi."
      }
    ],
    highlight: 1
  }
},

  {
    title: "Biometria ja jaetut työasemat",
    text:
      "Biometrinen tunnistautuminen (esim. sormenjälki tai kasvojentunnistus) voi nopeuttaa kirjautumista ja helpottaa turvallista käyttöä. Se ei kuitenkaan poista vastuuta laitteen lukitsemisesta. Sote-ympäristössä jaetut työasemat ovat erityinen riski, sillä jos laite jää auki, seuraava käyttäjä voi vahingossa toimia edellisen käyttäjän tunnuksilla, tehden kirjauksia hänen nimissään."
  }

],

  questions: [
    {
      id: "s1",
      type: "single",
      question: "Mikä näistä on vahva salasana?",
      options: [
        "Lyhyt ja helppo muistaa",
        "Nimi ja syntymävuosi",
        "Pitkä ja monimutkainen, sisältäen eri merkkejä",
        "Sama kuin käyttäjätunnus"
      ],
      correct: [2],
      explanation:
        "Vahvin vaihtoehto on pitkä salasana (tai salalause), jossa on riittävästi vaihtelua. Lyhyet ja henkilökohtaisiin tietoihin perustuvat salasanat (kuten nimi ja syntymävuosi) arvataan ja murretaan helposti. Myös käyttäjätunnuksen käyttäminen salasanana on erittäin riskialtista."
    },

    {
      id: "s2",
      type: "multi",
      question: "Milloin salasana tulisi vaihtaa?",
      options: [
        "Ei koskaan, jos se on riittävän hyvä",
        "Tietyin väliajoin työnantajan pyynnöstä",
        "Joka päivä",
        "Jos epäillään vuotoa tai salasana on muutoin huono"
      ],
      correct: [1, 3],
      explanation:
        "Salasana kannattaa vaihtaa, kun organisaation ohjeistus sitä vaatii ja erityisesti silloin, jos epäillään vuotoa tai salasana on heikko. Päivittäinen vaihtaminen ei paranna turvallisuutta käytännössä, vaan voi jopa johtaa huonoihin salasanavalintoihin (esim. toistuviin kaavoihin)."
    },

    {
      id: "s3",
      type: "single",
      question: "Mikä on monivaiheinen tunnistautuminen (MFA)?",
      options: [
        "Käyttäjätunnus ja salasana",
        "Tunnistautuminen kahdella tai useammalla tavalla",
        "Tarkoittaa samaa kuin biometrinen tunnistautuminen ",
        "VPN-yhteys"
      ],
      correct: [1],
      explanation:
        "MFA tarkoittaa, että kirjautumisessa tarvitaan vähintään kaksi vahvistusta (esim. salasana + kertakäyttökoodi tai hyväksyntä sovelluksessa). Biometria voi olla yksi tunnistustapa, mutta MFA ei tarkoita automaattisesti biometriaa."
    },

    {
      id: "s4",
      type: "single",
      question: "Miksi MFA tuo lisäturvaa?",
      options: [
        "Se hidastaa kirjautumista",
        "Se vaatii käyttäjältä lisävahvistuksen kirjautumisessa",
        "Se estää tietojenkalastelua",
        "Se estää virukset suojatun yhteyden avulla"
      ],
      correct: [1],
      explanation:
        "MFA tuo lisäturvaa, koska pelkkä salasana ei riitä kirjautumiseen. Jos salasana vuotaa, hyökkääjä tarvitsee silti toisen vahvistuksen. MFA ei automaattisesti estä tietojenkalastelua tai viruksia, mutta se voi pienentää vahinkoa, jos salasana päätyy vääriin käsiin."
    },

    {
      id: "s5",
      type: "single",
      question: "Mitä biometrinen tunnistautuminen tarkoittaa?",
      options: [
        "Salasanaan perustuvaa tunnistusta",
        "Laitteeseen perustuvaa tunnistusta",
        "Henkilön fyysisiin tai biologisiin ominaisuuksiin perustuvaa tunnistusta",
        "Kertakäyttökoodia"
      ],
      correct: [2],
      explanation:
        "Biometrinen tunnistautuminen perustuu ihmisen ominaisuuksiin (kuten sormenjälki, kasvonpiirteet tai iiris). Se ei ole sama asia kuin salasana tai kertakäyttökoodi, vaikka biometriaa voidaankin käyttää osana monivaiheista tunnistautumista."
    },

    {
      id: "s6",
      type: "single",
      question: "Mikä seuraavista on biometrinen tunnistustapa?",
      options: ["PIN-koodi", "Käyttäjätunnus", "Sormenjälkitunnistus", "VPN-yhteys"],
      correct: [2],
      explanation:
        "Sormenjälkitunnistus on biometrinen tunnistustapa, koska se perustuu fyysiseen ominaisuuteen. PIN-koodi ja käyttäjätunnus ovat tietoon perustuvia (ei-biometrisiä) tunnisteita."
    }
  ]
};

export default salasanat;