

import phishingImg from "../../assets/rosvo1.png";

// src/data/themes/theme_phishing.js
const phishing = {
  id: "phishing",
  title: "Huijaukset ja tietojenkalastelu",
  slides: [

    // 1 — Roskaposti + peruskäsite
    {
      title: "Roskaposti ja tietojenkalastelu",
      text:"Roskaposti tarkoittaa häiritsevää tai ei-toivottua viestintää, jota lähetetään usein suurelle joukolle vastaanottajia. Kaikki roskaposti ei ole vaarallista, mutta osa siitä toimii huijausten välineenä. Muun muassa tietojenkalasteluviestien tarkoitus on saada käyttäjä luovuttamaan tietojaan, kuten salasanoja, kirjautumiskoodeja tai muita luottamuksellisia tietoja. Hyökkääjä esiintyy usein luotettavana tahona, esimerkiksi IT-tukena, viranomaisena tai organisaation sisäisenä toimijana. Viesteissä voidaan myös korostaa kiirettä tai uhata käyttöoikeuden vanhenemisella, jotta vastaanottaja toimisi nopeasti ilman tarkistamista.",

interactive: {
  type: "warning_spots",
  prompt: "Paina viestistä kohtaa, joka herättää epäilyä.",
  message: {
    subject: "Tilisi vahvistus",
    lines: [
      "Hei,",
      "organisaation käyttöoikeus vanhenee tänään.",
      "Kirjaudu heti alla olevasta linkistä ja vahvista tunnuksesi.",
      "Vahvista tästä"
    ]
  },
  spots: [
    {
      label: "vanhenee tänään",
      feedback: "Kiireellinen määräaika voi olla painostuskeino, jolla käyttäjä yritetään saada toimimaan nopeasti."
    },
    {
      label: "Kirjaudu heti",
      feedback: "Nopea toiminta ilman tarkistusta on juuri se, mitä huijausviestissä usein tavoitellaan."
    },
    {
      label: "vahvista tunnuksesi",
      feedback: "Tunnusten tai kirjautumistietojen pyytäminen viestissä tai linkin kautta on selvä varoitusmerkki."
    },
    {
      label: "Vahvista tästä",
      feedback: "Linkki kannattaa aina tarkistaa huolellisesti ennen avaamista. Huijauksissa juuri linkki ohjaa usein väärälle sivulle."
    }
  ]
}
    },

    // 2 — Muodot
    {
      title: "Huijausten eri muodot",
      bullets: [
        "Phishing: laajalle joukolle lähetetty yleinen huijausviesti.",
        "Spear phishing: kohdennettu huijaus tietylle henkilölle tai yksikölle.",
        "Huijaukset voivat tulla sähköpostilla, tekstiviestillä, puheluna tai viestisovelluksissa."
      ],

      image: phishingImg,
      type: "phishingImg"
    },

    // 3 — Sote-konteksti
    {
      title: "Sote-ympäristöä voidaan pitää erityisenä kohteena",
      text:
        "Sosiaali- ja terveydenhuollossa käsitellään arkaluonteisia henkilötietoja, joten onnistunut huijaus voi aiheuttaa vakavaa haittaa sekä organisaatiolle että yksittäisille ihmisille. Kiireinen työympäristö ja luottamukseen perustuva viestintäkulttuuri voivat lisätä riskiä reagoida nopeasti ilman tarkistusta. Hyökkääjä voi vedota potilasturvallisuuteen, kiireeseen tai organisaation sisäiseen auktoriteettiin, jotta viesti tuntuisi tavallista uskottavammalta."
    },

    // 4 — Deepfake
    {
      title: "Deepfake ja tekoälypohjaiset huijaukset",
      text:
        "Deepfake tarkoittaa tekoälyn avulla tuotettua väärennettyä ääni-, kuva- tai videomateriaalia. Työympäristössä tämä voi tarkoittaa esimerkiksi esihenkilöltä vaikuttavaa puhelua tai videoviestiä, jossa pyydetään kiireellisesti toimimaan. Tekninen laatu voi olla uskottava, vaikka sisältö on väärennös. Siksi pelkkä tuttu ääni, kasvot tai viestin tyyli ei aina riitä todisteeksi siitä, että yhteydenotto on aito."
    },

    // 5 — Käytännön toimintatapa
    {
      title: "Toiminta epäilyttävässä tilanteessa?",
      lines: [
        "✅ Tarkista lähettäjä ja viestin sisältö ennen linkkien avaamista.",
        "✅ Varmista poikkeava pyyntö esihenkilöltä tai IT-tuelta.",
        "⚠️ Älä luovuta salasanoja tai kertakäyttökoodeja sähköpostitse tai puhelimitse.",
        "⚠️ Älä toimi kiireen painostamana ilman varmistusta."
      ]
    }

  ],

  questions: [
    {
      id: "phi0",
      type: "single",
      question: "Mikä on roskaposti?",
      options: [
        "Viranomaisen lähettämä sähköpostiviesti",
        "Häiritsevää viestintää",
        "Kirjekuori",
        "VPN"
      ],
      correct: [1],
      explanation:
        "Roskaposti tarkoittaa häiritsevää tai ei-toivottua viestintää, jota lähetetään usein suurelle joukolle vastaanottajia. Se ei aina sisällä huijausta, mutta roskapostia voidaan käyttää myös tietojenkalastelun ja muiden petosten levittämiseen."
    },

    {
      id: "phi1",
      type: "single",
      question: "Mitä tietojenkalastelu tarkoittaa?",
      options: [
        "Tiedon varmuuskopiointia",
        "Huijausyritystä tiedon saamiseksi",
        "Verkon suojaamista",
        "Keskustelua kalastusharrastuksesta"
      ],
      correct: [1],
      explanation:
        "Tietojenkalastelu on huijausyritys, jossa pyritään saamaan käyttäjä luovuttamaan luottamuksellisia tietoja, kuten salasanoja tai kirjautumiskoodeja. Hyökkääjä esiintyy usein luotettavana tahona, esimerkiksi IT-tukena tai organisaation sisäisenä toimijana."
    },

    {
      id: "phi2",
      type: "single",
      question: "Mikä on phishing?",
      options: [
        "Haittaohjelma",
        "Tietojenkalastelun muoto",
        "VPN-yhteys",
        "Palvelunestohyökkäys"
      ],
      correct: [1],
      explanation:
        "Phishing on tietojenkalastelun muoto, jossa viesti lähetetään laajalle joukolle vastaanottajia. Tavoitteena on saada osa käyttäjistä klikkaamaan linkkiä tai luovuttamaan tietojaan."
    },

    {
      id: "phi3",
      type: "single",
      question: "Mitä spear phishing tarkoittaa?",
      options: [
        "Palvelunestohyökkäystä",
        "Kohdennettua huijausta",
        "Virustorjuntaohjelmaa",
        "Roskapostin suodatusta"
      ],
      correct: [1],
      explanation:
        "Spear phishing on kohdennettu huijaus, jossa viesti suunnataan tietylle henkilölle, yksikölle tai organisaatiolle. Viesti voi sisältää uskottavia yksityiskohtia, kuten nimen tai työtehtävän, mikä tekee siitä vaikeammin tunnistettavan."
    },

    {
      id: "phi4",
      type: "single",
      question: "Mikä on deepfake?",
      options: [
        "Haittaohjelma",
        "Tekoälyllä luotu väärennös",
        "VPN",
        "Varmuuskopiointi"
      ],
      correct: [1],
      explanation:
        "Deepfake on tekoälyn avulla tuotettu väärennetty ääni-, kuva- tai videomateriaali. Se voi näyttää tai kuulostaa aidolta henkilöltä, vaikka sisältö on manipuloitu tai täysin keksitty."
    },

    {
      id: "phi5",
      type: "single",
      question: "Miksi deepfake on riski työympäristössä?",
      options: [
        "Se voi huijata työntekijää luottamaan väärennettyyn viestiin",
        "Se parantaa videon laatua",
        "Se estää kirjautumisen",
        "Se nopeuttaa yhteyksiä"
      ],
      correct: [0],
      explanation:
        "Deepfake voi saada työntekijän uskomaan, että viesti tai puhelu tulee luotettavalta henkilöltä, kuten esihenkilöltä tai IT-tuelta. Tämä voi johtaa tietojen luovuttamiseen tai kiireellisiin toimenpiteisiin ilman asianmukaista varmistusta."
    }
  ]
};

export default phishing;