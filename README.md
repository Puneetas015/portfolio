# 🚀 Personal Portfolio — React + Tailwind CSS

A modern, high-converting personal portfolio with a dark glassmorphism aesthetic.
👉 **[Try the Live App]( https://portfolio-ojbc.vercel.app)**

## ✨ Features

- 🌑 Deep dark theme (`#0b0e14`) with cyan + purple accents
- 🔮 Glassmorphism sticky navbar with blur effect
- ⌨️ Typewriter effect cycling through your roles
- 🗂️ Responsive project gallery with hover effects + GitHub/Demo links
- 🛠️ Skills grid with category grouping
- 📬 Contact form with animated send state
- 🔗 Footer with LinkedIn, GitHub, Upwork links
- 📱 Fully mobile-responsive
- ⚡Seamless cloud deployment and hosting via Vercel

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
├── vercel.json              # Vercel single-page application routing configuration
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

## 🌐 Deploy to Vercel (Automatic Integration)

1. Push your code changes directly to your GitHub repository:
```bash
git add .
git commit -m "Update portfolio config"
git push origin main
```
2. Connect your GitHub account to Vercel.
3. Import this repository and click Deploy. Vercel will track the main branch and auto-build every time you push code.



## 🎨 Customization Checklist

| File | What to change |
|------|---------------|
| `Hero.jsx` | Your name, roles array, GitHub/LinkedIn URLs |
| `About.jsx` | Bio text, stats |
| `Skills.jsx` | Add/remove skills & categories |
| `Projects.jsx` | Project names, descriptions, tags, links |
| `Contact.jsx` | Email, social links — wire up Formspree or EmailJS |
| `Footer.jsx` | Social links |

## 📬 Wiring Up the Contact Form

Replace the handleSubmit process in Contact.jsx with one of the following integration implementations:

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

- Frontend: React 18
- Styling: Tailwind CSS 3
- Icons: Lucide React
- Hosting & Infrastructure: Vercel Cloud Platform
