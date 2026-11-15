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
    // 3rd DEC 2026
    {
      day: "Day 1 · 3rd Dec 2026",
      label: "Check-in",
      time: "12:00 PM onwards",
      desc: "Check-in begins at 12:00 PM onwards.",
    },
    {
      label: "Welcome Lunch",
      time: "Afternoon",
      desc: "At Triangular Lawn",
    },
    {
      label: "Bhaat",
      time: "Afternoon",
      desc: "At Triangular Lawn",
    },
    {
      label: "High Tea",
      time: "Late Afternoon",
      desc: "At Kissaten Tea lounge",
    },
    {
      label: "Sagan Ceremony",
      time: "Evening",
      desc: "At Sakura",
    },
    {
      label: "Brews & Bites",
      time: "24 Hours Available",
      desc: "24hr available Brews & Bites @ Kissaten Tea lounge",
    },

    // 4th DEC 2026
    {
      day: "Day 2 · 4th Dec 2026",
      label: "Breakfast",
      time: "Morning",
      desc: "At Shio kosho Restaurant",
    },
    {
      label: "Haldi",
      time: "Morning / Midday",
      desc: "At Ikigai Lawn",
    },
    {
      label: "High Tea",
      time: "4:00 PM",
      desc: "At Kissaten Tea lounge",
    },
    {
      label: "Wedding",
      time: "Evening",
      desc: "At Waterfall Lawn",
    },
    {
      label: "Brews & Bites",
      time: "24 Hours Available",
      desc: "24hr available Brews & Bites @ Kissaten Tea lounge",
    },

    // 5th DEC 2026
    {
      day: "Day 3 · 5th Dec 2026",
      label: "Breakfast",
      time: "Morning",
      desc: "At Shio kosho Restaurant",
    },
    {
      label: "Check-out",
      time: "9:00 AM",
      desc: "Check-out at 9:00 AM",
    },
  ],

  guestServices: {
    title: "Services available for guests",
    items: ["Men grooming", "Women salon"],
    note: "Enquire at help desk for further information",
  },

  messages: {
    heroHeading: "The beginning of our forever",
    coupleEyebrow: "wedding celebrations of",
    speechBubble: "", // removed per customer request
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
    title: "Humsafar Humraaz Tu — Yasser Desai, Arko",
    startTime: "1:29",
    volume: 0.8,
  },
};
