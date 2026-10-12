# Eternal Moments — Digital Wedding Invitation

A romantic blush-pink digital wedding invitation for Punshashini and Thushan, with a floral opening cover, wedding details, a live countdown, gallery, venue directions, and a preview wish form.

## Run the project

You need Node.js and npm.

```bash
npm install
npm run dev
```

Open the local address Vite prints, usually `http://127.0.0.1:5173/`.

To create a production build:

```bash
npm run build
npm run preview
```

The `dist` folder can be deployed to any static host, such as Vercel, Netlify, or GitHub Pages. There is no backend, database, or API key.

## Personalize the invitation

Edit only `src/data/weddingConfig.js`. Every scene reads from that file.

| What to change | Where |
| --- | --- |
| Bride and groom names | `couple.bride` and `couple.groom` |
| Wedding date and countdown | `dateTime`, `dateLine`, `year`, `shortDate` |
| Ceremony time | `ceremonyTime` |
| Reception | `reception` |
| Venue name, address, and note | `venue` |
| Google Maps pin and embedded map | `venue.mapsUrl` and `venue.mapEmbedUrl` |
| Dress code | `dressCode` |
| Invitation lines | `invitation` |
| Our Story chapters | `story.chapters` |
| Schedule | `schedule.events` |
| Gallery | `gallery.images` |
| Music file | `music.src` |

`dateTime` must be an ISO 8601 string with a timezone offset, so every guest counts down to the same moment:

```js
dateTime: "2027-07-20T09:30:00+05:30",
```

The venue section shows the hotel on an embedded Google Map. **Get Directions** opens the same Kashyapa Hotel pin. Both come from the hotel’s published map. The wish form is a preview only and does not send or save messages.

## Photographs

Placeholder images live in `public/images/`. Replace the files, or add your own and update the `src` and `alt` values in `weddingConfig.js`.

Keep the same filenames if you do not want to edit the config:

- `story-meeting.jpg`, `story-journey.jpg`, `story-promise.jpg`
- `gallery-1.jpg` through `gallery-6.jpg`
- `venue.jpg`

Use compressed `.jpg` or `.webp` files around 1600 pixels wide. The included photographs are Unsplash placeholders for demonstration and should be replaced with the couple's own pictures.

## Music

`public/audio/background.wav` is a quiet generated tone so the player works before you add a real recording. Replace it with the couple's chosen piece:

1. Add an `.mp3` or `.wav` file to `public/audio/`.
2. Set `music.src` in `weddingConfig.js`, for example `"/audio/our-song.mp3"`.

Music never starts by itself. A guest presses the music button to play or pause.

## Accessibility

- Buttons and links have visible focus styles and accessible names.
- The gallery opens a keyboard-friendly lightbox. Escape closes it. Arrow keys move between photographs.
- If a guest has **Reduce motion** enabled, entrance animations, floating petals, and particle movement are turned off, and the opening appears immediately.

## Project structure

```text
src/
├── components/
│   ├── OpeningScene.jsx
│   ├── WeddingInvitation.jsx
│   ├── OurStory.jsx
│   ├── WeddingDetails.jsx
│   ├── WeddingCountdown.jsx
│   ├── CoupleGallery.jsx
│   ├── WeddingTimeline.jsx
│   ├── VenueSection.jsx
│   ├── FinalScene.jsx
│   ├── MusicPlayer.jsx
│   ├── FloatingPetals.jsx
│   └── GoldenParticles.jsx
├── data/
│   └── weddingConfig.js
├── hooks/
│   ├── useCountdown.js
│   └── usePrefersReducedMotion.js
├── App.jsx
├── main.jsx
└── index.css
public/
├── images/
└── audio/
```
