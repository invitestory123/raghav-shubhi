# Customer Editing Guide — ghibli-selfie (Raghav & Shubhi)

Retro camera & selfie framing invitation featuring an interactive couple selfie, camera countdown, background music player (*Humsafar Humraaz Tu* from 1:29), complete 3-day itinerary, guest services information, venue map for Ananta Resorts & Spa Pushkar, calendar links, and downloadable photo keepsake.

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

### 3. Hero & Display Messages
- `messages.heroHeading`: `"The beginning of our forever"`
- `messages.coupleEyebrow`: `"wedding celebrations of"`
- `messages.speechBubble`: `""` (speech bubble removed per request)

### 4. Day Schedule / Itinerary
Full 3-day wedding schedule from 3rd to 5th December 2026:
- **3rd DEC 2026 (Day 1)**
  - `12:00 PM onwards`: Check-in
  - `Afternoon`: Welcome Lunch (At Triangular Lawn)
  - `Afternoon`: Bhaat (At Triangular Lawn)
  - `Late Afternoon`: High Tea (At Kissaten Tea lounge)
  - `Evening`: Sagan Ceremony (At Sakura)
  - `24 Hours Available`: Brews & Bites (At Kissaten Tea lounge)
- **4th DEC 2026 (Day 2)**
  - `Morning`: Breakfast (At Shio kosho Restaurant)
  - `Morning / Midday`: Haldi (At Ikigai Lawn)
  - `4:00 PM`: High Tea (At Kissaten Tea lounge)
  - `Evening`: Wedding (At Waterfall Lawn)
  - `24 Hours Available`: Brews & Bites (At Kissaten Tea lounge)
- **5th DEC 2026 (Day 3)**
  - `Morning`: Breakfast (At Shio kosho Restaurant)
  - `9:00 AM`: Check-out

### 5. Services Available for Guests
- Men grooming
- Women salon
- Enquire at help desk for further information

### 6. Background Music (BGM)
- Track: *Humsafar Humraaz Tu* — Yasser Desai, Arko
- Audio configured in `editable/assets/bgm.mp3` trimmed from 1:29 with seamless loop.
- Audio starts on first user interaction and can be toggled via the floating gramophone button.

### 7. Images
Configured in `editable/assets/` or `images` in `wedding-data.js`:
- `couple`: Studio Ghibli watercolor anime couple selfie (`couple.png`)
- `mosque`: Venue illustration (`mosque.png`)
- `bouquet`: Bouquet graphic (`bouquet.png`)
- `gramophone`: Gramophone music icon (`gramophone.png`)
- `cloud`: Cloud overlay (`cloud-a.png`)
- `petal` & `butterfly`: Floating particle graphics
