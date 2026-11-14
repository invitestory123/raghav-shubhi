# Customer Editing Guide — ghibli-selfie (Raghav & Shubhi)

Retro camera & selfie framing invitation featuring an interactive couple selfie, camera countdown, background music player (Sai Pallavi's Intro from Amaran), complete 3-day itinerary, venue map for Ananta Resorts & Spa Pushkar, calendar links, and downloadable photo keepsake.

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

### 3. Calendar & Event Details
- `title`: `"Raghav & Shubhi — Wedding Celebrations"`
- `start`: `"20261203T063000Z"` (3 Dec 2026, 12:00 PM IST)
- `end`: `"20261205T063000Z"` (5 Dec 2026, 12:00 PM IST)
- `location`: `"Ananta Spa & Resorts, Ajmer-Pushkar Road, Pushkar, Rajasthan 305022"`
- `details`: `"Wedding celebrations of Raghav & Shubhi at Ananta Resorts & Spa, Pushkar from 3rd to 5th December 2026. We can't wait to see you there!"`
- `icsFilename`: `"raghav-and-shubhi-wedding.ics"`

### 4. Venue & Map
- `name`: `"Ananta Resorts & Spa"`
- `address`: `"Ajmer-Pushkar Road, Pushkar, Rajasthan 305022"`
- `mapsUrl`: `"https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396da39cb2edc1d3:0xd9cc1f3d0916b4c1?entry=s&sa=X&ved=2ahUKEwj4qIWOnbSXAxWjaHADHSVCDwcQ4kB6BAgUEAA&hl=en"`

### 5. Day Schedule / Itinerary
Full 3-day wedding schedule from 3rd to 5th December 2026:
- **Day 1: Thursday, 3rd December 2026**
  - 12:00 - 4:00 PM: The Welcome Lunch & Mehndi
  - 02:00 PM: The Bhaat Ceremony
  - 03:00 PM: The Cricket Match
  - 04:00 PM: Siesta Time
  - 06:30 PM: Sagan, Sangeet & Cocktail Night
  - 11:00 PM onwards: Late Night After Party
- **Day 2: Friday, 4th December 2026**
  - 08:00 AM: The Big Buffet Breakfast
  - 09:00 AM: Bride's Gour
  - 09:00 AM: Groom’s Jaago
  - 11:00 AM: Bride & Groom’s Haldi Ceremony
  - 03:00 PM: Rest & Recharge
  - 05:00 PM: Sehrabandi
  - 06:00 PM: The Baraat Procession
  - 08:00 PM: Jaimala
  - 11:00 PM: Phere
- **Day 3: Saturday, 5th December 2026**
  - 08:30 AM: Goodbye Breakfast

### 6. Background Music (BGM)
- `src`: `"./editable/assets/bgm.mp3"` (Sai Pallavi's Intro from Amaran - Sayee Rakshith)
- Audio starts on first user interaction (touch/click/scroll) and can be toggled via the floating gramophone button.

### 7. Images
Configured in `editable/assets/` or `images` in `wedding-data.js`:
- `couple`: Main selfie illustration (`couple.png`)
- `mosque`: Venue illustration (`mosque.png`)
- `bouquet`: Bouquet graphic (`bouquet.png`)
- `gramophone`: Gramophone music icon (`gramophone.png`)
- `cloud`: Cloud overlay (`cloud-a.png`)
- `petal` & `butterfly`: Floating particle graphics
