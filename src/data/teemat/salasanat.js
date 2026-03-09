const salasanat = {
  id: "salasanat",
  title: "Salasanat ja tunnistautuminen",
  slides: [

  {
    title: "Tunnistautuminen on osa ammatillista vastuuta",
    text:
      "Sote-ympäristössä tunnuksilla ei vain 'kirjauduta sisään'. Niillä avataan pääsy potilastietoihin ja tehdään kirjauksia, jotka yhdistyvät yksilöityyn käyttäjään. Jokainen katselu ja muutos lokitetaan. Tunnusten suojaaminen on osa potilasturvallisuutta ja myös työntekijän omaa oikeusturvaa, koska lokitietojen avulla voidaan nähdä kuka on käyttänyt järjestelmää ja milloin."
  },

  {
  title: "Vahva salasana: pituus ja ainutlaatuisuus",
  lines: [
    "✅ Suosi pitkää salasanaa tai useasta sanasta muodostettua lausetta (vähintään 14–16 merkkiä).",
    "✅ Käytä eri salasanaa eri palveluissa – näin estät ketjuvuodot, jos yksi palvelu vaarantuu.",
    "⚠️ Älä käytä henkilötietoja, työpaikan nimeä tai syntymävuosia.",
    "⚠️ Älä kirjoita salasanaa näkyville tai säilytä sitä helposti löydettävässä paikassa."
  ]
},

  {
    title: "Milloin salasana vaihdetaan?",
    bullets: [
      "Jos epäilet kirjautuneesi huijaussivulle tai kalasteluviestiin.",
      "Jos saat odottamattoman kirjautumisvahvistuksen.",
      "Jos laite katoaa tai varastetaan.",
      "Kun organisaation ohjeistus sitä edellyttää.",
      "Jos huomaat tilillä toimintaa, jota et tunnista."
    ]
  },

  {
    title: "Monivaiheinen tunnistautuminen (MFA)",
    text:
      "MFA tarkoittaa, että kirjautuminen varmistetaan kahdella tai useammalla tekijällä (esim. salasana + kertakäyttökoodi tai hyväksyntä sovelluksessa). Tämä vähentää riskiä, että pelkkä vuotanut salasana riittäisi kirjautumiseen. Hyväksy vahvistus vain silloin, kun itse olet kirjautumassa – odottamaton hyväksyntäpyyntö voi olla merkki hyökkäyksestä."
  },

  {
    title: "Biometria ja jaetut työasemat",
    text:
      "Biometrinen tunnistautuminen (esim. sormenjälki tai kasvojentunnistus) voi nopeuttaa kirjautumista ja helpottaa turvallista käyttöä. Se ei kuitenkaan poista vastuuta laitteen lukitsemisesta. Sote-ympäristössä jaetut työasemat ovat erityinen riski: jos laite jää auki, seuraava käyttäjä voi toimia edellisen tunnuksilla ja tehdä kirjauksia hänen nimissään."
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
        "Vahvin vaihtoehto on pitkä salasana (tai salalause), jossa on riittävästi vaihtelua. Lyhyet ja henkilökohtaisiin tietoihin perustuvat salasanat (kuten nimi ja syntymävuosi) arvataan tai murretaan helposti. Myös käyttäjätunnuksen käyttäminen salasanana on erittäin riskialtista."
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
        "MFA tarkoittaa, että kirjautumisessa tarvitaan vähintään kaksi vahvistusta (esim. salasana + kertakäyttökoodi tai hyväksyntä sovelluksessa). Biometria voi olla yksi tunnistustapa, mutta MFA ei tarkoita automaattisesti biometriaa. VPN taas liittyy yhteyden suojaamiseen, ei käyttäjän tunnistamiseen."
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
        "Biometrinen tunnistautuminen perustuu ihmisen ominaisuuksiin (kuten sormenjälki, kasvonpiirteet tai iiris). Se ei ole sama asia kuin salasana tai kertakäyttökoodi, vaikka biometriaa voidaan käyttää osana monivaiheista tunnistautumista."
    },

    {
      id: "s6",
      type: "single",
      question: "Mikä seuraavista on biometrinen tunnistustapa?",
      options: ["PIN-koodi", "Käyttäjätunnus", "Sormenjälkitunnistus", "VPN-yhteys"],
      correct: [2],
      explanation:
        "Sormenjälkitunnistus on biometrinen tunnistustapa, koska se perustuu fyysiseen ominaisuuteen. PIN-koodi ja käyttäjätunnus ovat tietoon perustuvia (ei-biometrisiä) tunnisteita. VPN ei ole tunnistautumismenetelmä vaan yhteystapa."
    }
  ]
};

export default salasanat;