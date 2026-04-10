# Olive Hair Collectionz — Homepage

A fully production-ready, mobile-first homepage built with **React + Vite + Tailwind CSS**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
olive-hair-collectionz/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          ← Navigation + mobile menu
│   │   ├── Footer.jsx          ← Footer with links + socials
│   │   ├── FloatingWhatsApp.jsx ← Sticky WhatsApp button
│   │   └── ExitPopup.jsx       ← Community offer popup (10s scroll trigger)
│   ├── sections/
│   │   ├── Hero.jsx            ← 3-slide auto hero with swipe
│   │   ├── TrustStrip.jsx      ← Scrolling marquee trust signals
│   │   ├── Categories.jsx      ← Product categories (image + text + button)
│   │   ├── ShopByLength.jsx    ← Shop by length (14"–32")
│   │   ├── Hairstylist.jsx     ← Text a hairstylist (WhatsApp)
│   │   ├── Recommendations.jsx ← Swipeable product slider
│   │   ├── AsSeenOn.jsx        ← Influencer slider
│   │   ├── Community.jsx       ← ₦10,000 off community offer
│   │   └── FAQ.jsx             ← Expandable FAQ accordion
│   ├── constants.js            ← ⭐ ALL editable content lives here
│   ├── App.jsx                 ← Root component
│   ├── main.jsx                ← Entry point
│   └── index.css               ← Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## How to Edit

### ✅ Change WhatsApp Number
Open `src/constants.js` and update line 4:
```js
export const WA_NUMBER = '2348022150574'  // ← change this
```
All WhatsApp links across the entire site update automatically.

### ✅ Change WhatsApp Messages
In `src/constants.js`, edit the `WA_MESSAGES` object:
```js
export const WA_MESSAGES = {
  hairstylist: "Hi, I'd like to speak with a hairstylist",
  community: 'Hi, I want to join your community',
  inquiry: "Hi, I'd like to make an inquiry",
  product: (name) => `Hi, I'm interested in the ${name}`,
  style: (name) => `Hi, I want this style (${name})`,
}
```

### ✅ Replace Images
All image URLs are in `src/constants.js`.
Search for `image:` or `Image url` comments — replace the URL strings with your own hosted images.

Recommended free image hosting: [Imgur](https://imgur.com), [Cloudinary](https://cloudinary.com), or your own CDN.

### ✅ Edit Hero Copy
In `src/constants.js`, find `HERO_SLIDES` and update `headline`, `subtext`, and `cta` for each slide.

### ✅ Edit Product Categories
Find `CATEGORIES` in `src/constants.js` — update `title`, `description`, `cta`, `image`, and `label` per category.

### ✅ Edit Recommendations / Products
Find `RECOMMENDATIONS` in `src/constants.js` — update `name`, `price`, `desc`, and `image`.

### ✅ Edit Influencers
Find `INFLUENCERS` in `src/constants.js` — update `name`, `style`, `color`, and `image`.

### ✅ Edit FAQ
Find `FAQS` in `src/constants.js` — add, remove or edit question/answer pairs.

### ✅ Edit Brand Colors
Open `tailwind.config.js`:
```js
colors: {
  brand: {
    primary:   '#E9BFDF',   // ← main brand pink
    secondary: '#F9B4CC',   // ← secondary pink
    neutral:   '#ECE1EB',   // ← soft lavender neutral
    accent:    '#141697',   // ← deep blue accent
    dark:      '#1a1a2e',   // ← dark navy for text/bg
  }
}
```

---

## Deploy to Netlify

### Option A — Drag & Drop (Fastest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Drag the `/dist` folder into the Netlify drop zone
4. Done — your site is live ✅

### Option B — GitHub + Auto Deploy
1. Push project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit — Olive Hair Collectionz"
git remote add origin https://github.com/YOUR_USERNAME/olive-hair-collectionz.git
git push -u origin main
```
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click Deploy — every `git push` auto-deploys ✅

---

## Link Rules (Important)

| Link Type | Behaviour |
|---|---|
| WhatsApp CTA | Opens `wa.me/...` in new tab |
| Product buttons | `href="/"` (homepage only) |
| Shop by length | `href="/"` (homepage only) |
| Nav links | Smooth scroll to section |
| Footer links (non-WA) | `href="/"` (homepage only) |
| Social links | `href="/"` (placeholder until accounts confirmed) |

---

## Notes

- The exit popup fires **10 seconds after the user starts scrolling**. It only shows once per session.
- The floating WhatsApp button is always visible and pulses gently to draw attention.
- All sliders (Hero, Recommendations, As Seen On) are swipeable on mobile.
- The trust marquee loops seamlessly with CSS animation — no JavaScript required.

---

## Brand

**Olive Hair Collectionz**
Premium hair… fair pricing… no extra drama.
Nigeria (NGN ₦) · WhatsApp: +2348022150574
