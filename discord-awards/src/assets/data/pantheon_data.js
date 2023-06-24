// Import groups
import groupClc from "../images/pantheon/clc.jpg";
import groupFromis9 from "../images/pantheon/fromis9.jpg";
import groupIoi from "../images/pantheon/ioi.jpg";
import groupItzy from "../images/pantheon/itzy.jpg";
import groupIve from "../images/pantheon/ive.jpg";
import groupIzone from "../images/pantheon/izone.jpg";
import groupLapillus from "../images/pantheon/lapillus.jpg";
import groupLesserafim from "../images/pantheon/lesserafim.jpg";
import groupPurplekiss from "../images/pantheon/purplekiss.jpg";
import groupTwice from "../images/pantheon/twice.jpg";
import groupBpFromis9Lsrfm from "../images/pantheon/bpFromis9Lsrfm.gif";
import groupBpItzy from "../images/pantheon/bpItzy.gif";
import groupDreamcatcherIdleTwice from "../images/pantheon/dreamcatcherIdleTwice.gif";
import groupDreamcatcherTwice from "../images/pantheon/dreamcatcherTwice.gif";
import groupIoiFromis9 from "../images/pantheon/ioiFromis9.gif";
import groupLesserafimPurplekiss from "../images/pantheon/lesserafimPurplekiss.gif";
import groupOmgTwiceWjsn from "../images/pantheon/omgTwiceWjsn.gif";

// Import solos
import soloChungha from "../images/pantheon/chungha.jpg";
import soloHeize from "../images/pantheon/heize.jpg";
import soloLisa from "../images/pantheon/lisa.jpg";
import soloSunmi from "../images/pantheon/sunmi.jpg";
import soloTaeyeon from "../images/pantheon/taeyeon.jpg";
import soloYena from "../images/pantheon/yena.jpg";
import soloYuqi from "../images/pantheon/yuqi.jpg";
import soloClHeizeLisaRose from "../images/pantheon/clHeizeLisaRose.gif";
import soloChunghaHeizeSunmiTaeyeon from "../images/pantheon/chunghaHeizeSunmiTaeyeon.gif";
import soloChunghaTaeyeon from "../images/pantheon/chunghaTaeyeon.gif";
import soloTaeyeonYuqi from "../images/pantheon/taeyeonYuqi.gif";
import soloYuriSomi from "../images/pantheon/yuriSomi.gif";

// Import albums
import albumFromis9From9 from "../images/pantheon/fromis9-from9.jpg";
import albumTaeyeonFourSeasons from "../images/pantheon/taeyeon-four-seasons.jpg";
import albumTwiceFancyYou from "../images/pantheon/twice-fancy-you.jpg";
import albumYuqiPage from "../images/pantheon/yuqi-page.jpg";
import albumLisaLalisa from "../images/pantheon/lisa-lalisa.jpg";
import albumFromis9Ioi from "../images/pantheon/fromis9Ioi.gif";

import discordUser from "../images/pantheon/discord.jpg";

const pantheon_data = {
  filles: [
    {
      category: "Groups",
      results: [
        {
          category: "Plus de nominations (Song of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 24,
          type: "top",
        },
        {
          category: "Plus de nominations sur une année (Song of the Year)",
          img: groupIzone,
          winner: "IZ*ONE",
          value: 7,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une nomination (Song of the Year)",
          img: groupOmgTwiceWjsn,
          winner: "Oh My Girl, TWICE, WJSN",
          value: 6,
          type: "top",
        },
        {
          category: "Meilleure moyenne (Song of the Year, au moins 5 sons)",
          img: groupIzone,
          winner: "IZ*ONE",
          value: 15.67,
          type: "top",
        },
        {
          category:
            "Meilleure moyenne sur une année (Song of the Year, au moins 2 sons)",
          img: groupIve,
          winner: "IVE",
          value: 17.31,
          type: "top",
        },
        {
          category: "Plus d'apparitions dans le top 10 (Song of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 7,
          type: "top",
        },
        {
          category:
            "Plus d'apparitions dans le top 10 sur une année (Song of the Year)",
          img: groupClc,
          winner: "CLC",
          value: 3,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une apparition dans le top 10 (Song of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 5,
          type: "top",
        },
        {
          category: "Meilleur classement pour un rookie (Song of the Year)",
          img: groupIoiFromis9,
          winner: "I.O.I, fromis_9",
          value: 1,
          type: "top",
        },
        {
          category: "Plus de nominations pour un rookie (Song of the Year)",
          img: groupLesserafimPurplekiss,
          winner: "LE SSERAFIM, Purple Kiss",
          value: 4,
          type: "top",
        },
        {
          category:
            "Meilleure moyenne pour un rookie (Song of the Year, au moins 2 sons)",
          img: groupFromis9,
          winner: "fromis_9",
          value: 16.85,
          type: "top",
        },
        {
          category:
            "Plus d'apparitions dans le top 10 pour un rookie (Song of the Year)",
          img: groupBpFromis9Lsrfm,
          winner: "BLACKPINK, fromis_9, LE SSERAFIM",
          value: 2,
          type: "top",
        },
        {
          category:
            "Top 1 le plus rapide depuis les débuts du groupe (Song of the Year)",
          img: groupIoi,
          winner: "I.O.I",
          value: "242 jours",
          type: "top",
        },
        {
          category:
            "Meilleur nombre de points sur une année (Group of the Year)",
          img: groupLesserafim,
          winner: "LE SSERAFIM",
          value: 31,
          type: "top",
        },
        {
          category: "Plus de sélections sur une année (Group of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 8,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une sélection (Group of the Year)",
          img: groupDreamcatcherIdleTwice,
          winner: "Dreamcatcher, (G)I-DLE, Twice",
          value: 4,
          type: "top",
        },
        {
          category: "Meilleur classement pour un rookie (Group of the Year)",
          img: groupLesserafim,
          winner: "LE SSERAFIM",
          value: 1,
          type: "top",
        },
        {
          category:
            "Meilleur nombre de points pour un rookie (Group of the Year)",
          img: groupLesserafim,
          winner: "LE SSERAFIM",
          value: 31,
          type: "top",
        },
        {
          category: "Meilleur nombre de points sur une année (Best New Artist)",
          img: groupLesserafim,
          winner: "LE SSERAFIM",
          value: 51,
          type: "top",
        },
        {
          category: "Plus de sélections sur une année (Best New Artist)",
          img: groupItzy,
          winner: "ITZY",
          value: 11,
          type: "top",
        },
        {
          category: "Plus de victoires (Album of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 2,
          type: "top",
        },
        {
          category: "Plus d'albums sélectionnés (Album of the Year)",
          img: groupTwice,
          winner: "TWICE",
          value: 7,
          type: "top",
        },
        {
          category:
            "Plus d'albums sélectionnés sur une année (Album of the Year)",
          img: groupIzone,
          winner: "IZ*ONE",
          value: 3,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins un album sélectionné (Album of the Year)",
          img: groupDreamcatcherTwice,
          winner: "Dreamcatcher, Twice",
          value: 4,
          type: "top",
        },
        {
          category: "Pire moyenne (Song of the Year, au moins 5 sons)",
          img: groupPurplekiss,
          winner: "Purple Kiss",
          value: 13.14,
          type: "flop",
        },
        {
          category:
            "Pire moyenne sur une année (Song of the Year, au moins 2 sons)",
          img: groupLapillus,
          winner: "Lapillus",
          value: 10.88,
          type: "flop",
        },
        {
          category: "Plus d'apparitions dans le flop 10 (Song of the Year)",
          img: groupBpItzy,
          winner: "BLACKPINK, ITZY",
          value: 3,
          type: "flop",
        },
      ],
    },
    {
      category: "Solo Artists",
      results: [
        {
          category: "Plus de nominations (Song of the Year)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 15,
          type: "top",
        },
        {
          category: "Plus de nominations sur une année (Song of the Year)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 7,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une nomination (Song of the Year)",
          img: soloChunghaHeizeSunmiTaeyeon,
          winner: "Chungha, Heize, Sunmi, Taeyeon",
          value: 5,
          type: "top",
        },
        {
          category: "Meilleure moyenne (Song of the Year, au moins 5 sons)",
          img: soloChungha,
          winner: "Chungha",
          value: 15.06,
          type: "top",
        },
        {
          category:
            "Meilleure moyenne sur une année (Song of the Year, au moins 2 sons)",
          img: soloSunmi,
          winner: "Sunmi",
          value: 16.09,
          type: "top",
        },
        {
          category: "Meilleur classement (Song of the Year)",
          img: soloYuqi,
          winner: "Yuqi",
          value: 3,
          type: "top",
        },
        {
          category: "Plus d'apparitions dans le top 10 (Song of the Year)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 2,
          type: "top",
        },
        {
          category:
            "Plus d'apparitions dans le top 10 sur une année (Song of the Year)",
          img: soloTaeyeonYuqi,
          winner: "Taeyeon, Yuqi",
          value: 1,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une apparition dans le top 10 (Song of the Year)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 2,
          type: "top",
        },
        {
          category: "Meilleur classement pour un rookie (Song of the Year)",
          img: soloYena,
          winner: "Yena",
          value: 17,
          type: "top",
        },
        {
          category:
            "Meilleur nombre de points sur une année (Best Solo Artist)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 42,
          type: "top",
        },
        {
          category: "Plus de sélections sur une année (Best Solo Artist)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 10,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins une sélection (Best Solo Artist)",
          img: soloChunghaTaeyeon,
          winner: "Chungha, Taeyeon",
          value: 4,
          type: "top",
        },
        {
          category: "Meilleur nombre de points sur une année (Best New Artist)",
          img: soloYuriSomi,
          winner: "Jo Yuri, Somi",
          value: 6,
          type: "top",
        },
        {
          category: "Plus de sélections sur une année (Best New Artist)",
          img: soloYuriSomi,
          winner: "Jo Yuri, Somi",
          value: 2,
          type: "top",
        },
        {
          category: "Plus de victoires (Album of the Year)",
          img: soloTaeyeon,
          winner: "Taeyeon",
          value: 2,
          type: "top",
        },
        {
          category: "Plus d'albums sélectionnés (Album of the Year)",
          img: soloHeize,
          winner: "Heize",
          value: 3,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins un album sélectionné (Album of the Year)",
          img: soloHeize,
          winner: "Heize",
          value: 3,
          type: "top",
        },
        {
          category: "Pire moyenne (Song of the Year, au moins 5 sons)",
          img: soloHeize,
          winner: "Heize",
          value: 13.4,
          type: "flop",
        },
        {
          category:
            "Pire moyenne sur une année (Song of the Year, au moins 2 sons)",
          img: soloLisa,
          winner: "Lisa",
          value: 8.33,
          type: "flop",
        },
        {
          category: "Plus d'apparitions dans le flop 10 (Song of the Year)",
          img: soloClHeizeLisaRose,
          winner: "CL, Heize, Lisa, Rosé",
          value: 2,
          type: "flop",
        },
      ],
    },
    {
      category: "Songs",
      results: [
        {
          category: "Meilleure moyenne (Song of the Year)",
          img: albumTwiceFancyYou,
          winner: "FANCY - TWICE",
          value: 18.57,
          type: "top",
        },
        {
          category:
            "Plus grand écart moyen avec le deuxième (Song of the Year)",
          img: albumTwiceFancyYou,
          winner: "FANCY - TWICE",
          value: 1.14,
          type: "top",
        },
        {
          category:
            "Meilleur classement pour une artiste solo (Song of the Year)",
          img: albumYuqiPage,
          winner: "Bonnie & Clyde - Yuqi",
          value: 3,
          type: "top",
        },
        {
          category:
            "Meilleure moyenne pour une artiste solo (Song of the Year)",
          img: albumTaeyeonFourSeasons,
          winner: "Four Seasons - Taeyeon",
          value: 16.86,
          type: "top",
        },
        {
          category: "Meilleur classement pour un rookie (Song of the Year)",
          img: albumFromis9Ioi,
          winner: "Love Bomb - fromis_9, Very Very Very - I.O.I",
          value: 1,
          type: "top",
        },
        {
          category: "Meilleure moyenne pour un rookie (Song of the Year)",
          img: albumFromis9From9,
          winner: "Love Bomb - fromis_9",
          value: 18.18,
          type: "top",
        },
        {
          category: "Pire moyenne (Song of the Year)",
          img: albumLisaLalisa,
          winner: "Lalisa - Lisa",
          value: 8,
          type: "flop",
        },
      ],
    },
    {
      category: "Participants",
      results: [
        {
          category: "Plus de participations",
          img: discordUser,
          winner: "Soyeon",
          value: 6,
          type: "top",
        },
        {
          category: "Plus de Top 1 dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Souflor",
          value: 2,
          type: "top",
        },
        {
          category: "Plus de Top 10 dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Smart",
          value: 8,
          type: "top",
        },
        {
          category:
            "Plus de Top 10 sur une année dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Smart, YooA",
          value: 3,
          type: "top",
        },
        {
          category:
            "Plus d'années avec au moins un Top 10 dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Smart",
          value: 5,
          type: "top",
        },
        {
          category:
            "Meilleur moyenne pour les sons proposés sur une année (Song of the Year)",
          img: discordUser,
          winner: "Momorin",
          value: 15.93,
          type: "top",
        },
        {
          category:
            "Moins de Flop 10 dans les sons proposés (Song of the Year, au moins 2 participations)",
          img: discordUser,
          winner: "Momorin, Smart, Souflor",
          value: 0,
          type: "top",
        },
        {
          category:
            "Plus de dernière place dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Backhal",
          value: 2,
          type: "flop",
        },
        {
          category: "Plus de Flop 10 dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Backhal, GermanQueen, Soyeon",
          value: 6,
          type: "flop",
        },
        {
          category:
            "Plus de Flop 10 sur une année dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Soyeon",
          value: 4,
          type: "flop",
        },
        {
          category:
            "Plus d'années avec au moins un Flop 10 dans les sons proposés (Song of the Year)",
          img: discordUser,
          winner: "Backhal, GermanQueen, Ketur, Stern",
          value: 3,
          type: "flop",
        },
        {
          category:
            "Pire moyenne pour les sons proposés sur une année (Song of the Year)",
          img: discordUser,
          winner: "Jennie",
          value: 11.05,
          type: "flop",
        },
        {
          category:
            "Moins de Top 10 dans les sons proposés (Song of the Year, au moins 2 participations)",
          img: discordUser,
          winner: "Fritos, Pulitu, Untitled",
          value: 0,
          type: "flop",
        },
      ],
    },
  ],
  garcons: {},
};

export default pantheon_data;
