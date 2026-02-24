# Matic Križaj — Portfolio / CV

Personal portfolio website for Matic Križaj, Senior Drupal Developer. Built with React + Vite and styled with Tailwind CSS.

## Tech Stack

- **React 18** + **Vite** — UI and build tooling
- **Tailwind CSS** — utility-first styling
- **React Router DOM** — client-side routing
- **tsParticles** — interactive particle background in the hero section
- **AOS** (Animate On Scroll) — scroll-triggered animations
- **EmailJS** — contact form without a backend
- **Lucide React** — icons

## Project Structure

```
src/
├── components/       # Navbar, Hero, About, Experience, Skills,
│                     # Recommendations, Contact, Footer, CookieBanner
├── context/
│   └── LanguageContext.jsx   # EN / SL language switching
├── hooks/
│   └── useParticlesEngine.js # tsParticles initialisation
├── pages/
│   ├── Privacy.jsx
│   └── Terms.jsx
├── translations.js   # All UI strings in both languages
├── App.jsx           # Router + LanguageProvider
├── main.jsx
└── index.css
```

## Routes

| Path       | Component  |
|------------|------------|
| `/`        | HomePage   |
| `/privacy` | Privacy    |
| `/terms`   | Terms      |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build        # output goes to dist/
npm run preview      # preview the production build locally
```
