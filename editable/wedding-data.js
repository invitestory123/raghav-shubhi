/**
 * wedding-data.js — Customer-facing editable data layer for ghibli-selfie
 * Couple: Raghav & Shubhi
 * Wedding Dates: 3 - 4 December 2026
 * Venue: Ananta Resorts & Spa, Pushkar, Rajasthan
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Raghav",
    bride: "Shubhi",
    title: "Raghav ♡ Shubhi",
  },

  wedding: {
    dateLabel: "03 - 04 · DECEMBER · 2026",
    dayNumber: "03 - 04",
    month: "December",
    year: "2026",
    dateTimeLine: "Thursday & Friday, 3 - 4 December 2026 · Celebrations begin 12:00 PM",
    footerLine: "Raghav & Shubhi · 03 - 04 · 12 · 2026",
  },

  calendar: {
    title: "Raghav & Shubhi — Wedding Celebrations",
    start: "20261203T063000Z", // 3 Dec 2026, 12:00 PM IST (UTC+5:30)
    end: "20261205T063000Z",   // 5 Dec 2026, 12:00 PM IST
    location: "Ananta Spa & Resorts, Ajmer-Pushkar Road, Pushkar, Rajasthan 305022",
    details: "Wedding celebrations of Raghav & Shubhi at Ananta Resorts & Spa, Pushkar from 3rd to 5th December 2026. We can't wait to celebrate with you!",
    icsFilename: "raghav-and-shubhi-wedding.ics",
  },

  venue: {
    name: "Ananta Resorts & Spa",
    address: "Ajmer-Pushkar Road, Pushkar, Rajasthan 305022",
    mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396da39cb2edc1d3:0xd9cc1f3d0916b4c1?entry=s&sa=X&ved=2ahUKEwj4qIWOnbSXAxWjaHADHSVCDwcQ4kB6BAgUEAA&hl=en",
  },

  schedule: [
    // Day 1: Thursday, 3rd December 2026
    {
      day: "Day 1 · Thursday, 3rd Dec 2026",
      label: "The Welcome Lunch & Mehndi",
      time: "12:00 - 4:00 PM",
      desc: "Arrive hungry, leave happy! Check in, catch up, and kick off the celebrations over a lavish lunch at Ananta Resorts & Spa. Add a touch of color to our celebrations. We invite you to join us for a fun-filled Mehndi afternoon.",
    },
    {
      label: "The Bhaat Ceremony",
      time: "02:00 PM",
      desc: "Tradition takes centre stage with family blessings, heartfelt rituals, and all the warmth that makes a wedding truly special.",
    },
    {
      label: "The Cricket Match",
      time: "03:00 PM",
      desc: "Put on your accessories and bring your front foot forward as we gear up for a fun, friendly but competitive Cricket Match between the “ladke waale” and “ladki waale”.",
    },
    {
      label: "Siesta Time",
      time: "04:00 PM",
      desc: "Nap, recharge, hydrate — and begin the serious business of getting wedding-ready. The evening has no plans of ending early!",
    },
    {
      label: "Sagan, Sangeet & Cocktail Night",
      time: "06:30 PM",
      desc: "Henna on the hands, cocktails in the air, music on full volume — consider this your official permission to dance irresponsibly. Wear your party clothes and get ready for an unforgettable evening of dance performances followed by Sufi night.",
    },
    {
      label: "Late Night After Party",
      time: "11:00 PM onwards",
      desc: "Still awake? Perfect. The heels come off, the volume goes up, and the party carries on for everyone who believes sleep is strictly a post-wedding activity. ‘Abhi to party shuru hui hai’",
    },

    // Day 2: Friday, 4th December 2026
    {
      day: "Day 2 · Friday, 4th Dec 2026",
      label: "The Big Buffet Breakfast",
      time: "08:00 AM",
      desc: "Breakfast is not optional today. Load up on favourites, chai and courage — there is a full day of celebrations ahead!",
    },
    {
      label: "Bride's Gour",
      time: "09:00 AM",
      desc: "A heartfelt family ceremony for Shubhi, filled with blessings, tradition and the kind of emotions that may require waterproof mascara.",
    },
    {
      label: "Groom’s Jaago",
      time: "09:00 AM",
      desc: "Its time to wake the sleepy heads with our loud and cheerful ‘Jaago’ crowd. Dance to dhol, songs and boliyan as we make way around the resort.",
    },
    {
      label: "Bride & Groom’s Haldi Ceremony",
      time: "11:00 AM",
      desc: "Time to turn the celebration yellow! Expect turmeric, sunshine, laughter and a few people who will definitely take the Haldi too seriously.",
    },
    {
      label: "Rest & Recharge",
      time: "03:00 PM",
      desc: "A strategic pause: rest those dancing feet, recharge your social battery, and transform into your wedding-best.",
    },
    {
      label: "Sehrabandi",
      time: "05:00 PM",
      desc: "The groom gets his finishing touch! Gather around as Raghav is dressed for the big moment, blessed by family and prepared for his grand Baraat entry.",
    },
    {
      label: "The Baraat Procession",
      time: "06:00 PM",
      desc: "Raghav is on his way! Bring your best moves, loudest cheers and absolutely no concern for rhythm — the Baraat has officially taken over.",
    },
    {
      label: "Jaimala",
      time: "08:00 PM",
      desc: "The moment everyone has been waiting for: Raghav and Shubhi meet on stage, exchange garlands, smiles and perhaps a little friendly competition.",
    },
    {
      label: "Phere",
      time: "11:00 PM",
      desc: "Under the stars and around the sacred fire, Raghav and Shubhi take the seven vows — officially beginning forever (and a lifetime of deciding what to order for dinner).",
    },

    // Day 3: Saturday, 5th December 2026
    {
      day: "Day 3 · Saturday, 5th Dec 2026",
      label: "Goodbye Breakfast",
      time: "08:30 AM",
      desc: "One last breakfast, one last round of hugs, and one last “when are we meeting again?” before we head home with full hearts and fuller camera rolls.",
    },
  ],

  messages: {
    speechBubble: "Hey! You're invited ❤️",
    bouquetClick: "Can't wait to celebrate with you.",
    secretNote: "You found our little secret.\nSome people you just want in every photo —\nyou're one of them.",
    secretSignoff: "— Raghav & Shubhi",
    thankYou: "Thank you for being part of our story.",
  },

  images: {
    couple: "./editable/assets/couple.png",
    mosque: "./editable/assets/mosque.png",
    bouquet: "./editable/assets/bouquet.png",
    gramophone: "./editable/assets/gramophone.png",
    cloud: "./editable/assets/cloud-a.png",
    petal: "./editable/assets/petal.png",
    butterfly: "./editable/assets/butterfly.png",
  },

  bgm: {
    src: "./editable/assets/bgm.mp3",
    title: "Sai Pallavi's Intro (From 'Amaran') — Sayee Rakshith",
    volume: 0.8,
  },
};
