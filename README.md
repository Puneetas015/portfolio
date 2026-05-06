# 🚀 Personal Portfolio — React + Tailwind CSS

A modern, high-converting personal portfolio with a dark glassmorphism aesthetic.

## ✨ Features

- 🌑 Deep dark theme (`#0b0e14`) with cyan + purple accents
- 🔮 Glassmorphism sticky navbar with blur effect
- ⌨️ Typewriter effect cycling through your roles
- 🗂️ Responsive project gallery with hover effects + GitHub/Demo links
- 🛠️ Skills grid with category grouping
- 📬 Contact form with animated send state
- 🔗 Footer with LinkedIn, GitHub, Upwork links
- 📱 Fully mobile-responsive
- ⚡ GitHub Pages deployment via GitHub Actions

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism sticky nav
│   │   ├── Hero.jsx         # Typewriter + CTA
│   │   ├── About.jsx        # Bio + stats
│   │   ├── Skills.jsx       # Skill chips by category
│   │   ├── Projects.jsx     # Project cards grid
│   │   ├── Contact.jsx      # Contact form + socials
│   │   └── Footer.jsx       # Footer with links
│   ├── App.js               # Root component
│   ├── index.js             # React entry point
│   └── index.css            # Tailwind + custom CSS
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deploy to GitHub Pages

### Method 1: GitHub Actions (recommended — automatic)
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select `gh-pages` branch
3. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`

### Method 2: Manual deploy
```bash
npm install -D gh-pages
npm run deploy
```

## 🎨 Customization Checklist

| File | What to change |
|------|---------------|
| `Hero.jsx` | Your name, roles array, GitHub/LinkedIn URLs |
| `About.jsx` | Bio text, stats |
| `Skills.jsx` | Add/remove skills & categories |
| `Projects.jsx` | Project names, descriptions, tags, links |
| `Contact.jsx` | Email, social links — wire up Formspree or EmailJS |
| `Footer.jsx` | Social links |
| `package.json` | `"homepage"` field → your GitHub Pages URL |

## 📬 Wiring Up the Contact Form

Replace the `handleSubmit` in `Contact.jsx` with:

**Option A — Formspree (free, no backend):**
```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

## 🛠 Tech Stack

- React 18
- Tailwind CSS 3
- Lucide React (icons)
- GitHub Actions (CI/CD)
