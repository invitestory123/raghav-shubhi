# Customer Editing Guide — ghibli-selfie (Raghav & Shubhi)

Retro camera & selfie framing invitation featuring an interactive couple selfie, camera countdown, background music player (*Humsafar Humraaz Tu* from 1:29), complete 3-day itinerary with day-switching tabs, highlighted time & venue buttons, guest services information, Japanese castle venue map for Ananta Spa & Resort Jaipur, calendar links, and downloadable photo keepsake.

---

## Current Customer Configuration

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### 1. Couple Names & Title
- `groom`: `"Raghav"`
- `bride`: `"Shubhi"`
- `title`: `"Raghav ♡ Shubhi"`

### 2. Wedding Date & Times
- `dateLabel`: `"03 - 04 · DECEMBER · 2026"`
- `dayNumber`: `"03 - 04"`
- `month`: `"December"`
- `year`: `"2026"`
- `dateTimeLine`: `"Thursday & Friday, 3 - 4 December 2026 · Celebrations begin 12:00 PM"`
- `footerLine`: `"Raghav & Shubhi · 03 - 04 · 12 · 2026"`

### 3. Venue & Location
- `venue.name`: `"Ananta Spa & Resort, Jaipur"`
- `venue.address`: `"Delhi-Jaipur Highway, Kukas, Jaipur, Rajasthan 302001"`
- `venue.mapsUrl`: `"https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396da39cb2edc1d3:0xd9cc1f3d0916b4c1?entry=s&sa=X&ved=2ahUKEwj4qIWOnbSXAxWjaHADHSVCDwcQ4kB6BAgUEAA&hl=en"`

### 4. Hero & Display Messages
- `messages.heroHeading`: `"The beginning of our forever"`
- `messages.coupleEyebrow`: `"wedding celebrations of"`
- `messages.speechBubble`: `""` (speech bubble removed per request)

### 5. Day Schedule / Itinerary
Interactive day tabs: `Day 1 (3 Dec)`, `Day 2 (4 Dec)`, and `Day 3 (5 Dec)`. Clicking on any day tab instantly displays only that day's itinerary with smooth reveal animations.
- **Day 1: Thursday, 3rd December 2026**
  - `12:00 PM onwards`: Check-in (Resort Reception)
  - `12:00 - 4:00 PM`: The Welcome Lunch & Mehndi (Triangular Lawn)
  - `02:00 PM`: The Bhaat Ceremony (Triangular Lawn)
  - `03:00 PM`: The Cricket Match (Resort Grounds)
  - `04:00 PM`: Siesta Time & High Tea (Kissaten Tea Lounge)
  - `06:30 PM`: Sagan, Sangeet & Cocktail Night (Sakura)
  - `11:00 PM onwards`: Late Night After Party (Sakura)
  - `24hr Available`: Brews & Bites (Kissaten Tea Lounge)
- **Day 2: Friday, 4th December 2026**
  - `08:00 AM`: The Big Buffet Breakfast (Shio Kosho Restaurant)
  - `09:00 AM`: Bride's Gour (No venue pill)
  - `09:00 AM`: Groom’s Jaago (Resort Courtyard)
  - `11:00 AM`: Bride & Groom’s Haldi Ceremony (Ikigai Lawn)
  - `03:00 PM`: Rest & Recharge (Resort Rooms)
  - `04:00 PM`: High Tea (Kissaten Tea Lounge)
  - `05:00 PM`: Sehrabandi (Promenade to Pagoda)
  - `06:00 PM`: The Baraat Procession (Promenade to Pagoda)
  - `08:00 PM`: Jaimala (Waterfall Lawn)
  - `11:00 PM`: Phere (Waterfall Lawn)
  - `24hr Available`: Brews & Bites (Kissaten Tea Lounge)
- **Day 3: Saturday, 5th December 2026**
  - `08:30 AM`: Goodbye Breakfast (Shio Kosho Restaurant)
  - `09:00 AM`: Check-out (Resort Reception)

### 6. Services Available for Guests
- Men grooming
- Women salon
- Enquire at help desk for further information

### 7. Background Music (BGM)
- Track: *Humsafar Humraaz Tu* — Yasser Desai, Arko
- Audio configured in `editable/assets/bgm.mp3` trimmed from 1:29 with seamless loop.
- Audio starts on first user interaction and can be toggled via the floating gramophone button.

### 8. Images
Configured in `editable/assets/` or `images` in `wedding-data.js`:
- `couple`: Studio Ghibli watercolor anime couple selfie with clean-shaven groom (no beard) and bride without sindoor (`couple.png`)
- `mosque`: Japanese castle / fort illustration on map (`mosque.png`)
- `bouquet`: Bouquet graphic (`bouquet.png`)
- `gramophone`: Gramophone music icon (`gramophone.png`)
- `cloud`: Cloud overlay (`cloud-a.png`)
- `petal` & `butterfly`: Floating particle graphics
