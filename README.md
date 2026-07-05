# Eminent Insurance Solutions

A modern, responsive React website for Eminent Insurance Solutions, an insurance services company based in Dar es Salaam, Tanzania.

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool
- **React Router** — Client-side routing
- **Lucide React** — Icon library
- **Formspree** — Contact form handling
- **GitHub Pages** — Hosting

## Project Structure

```
eminent-insurance-react/
├── public/                  # Static assets (images, sitemap, robots, verification)
├── src/
│   ├── components/          # Reusable components (Header, Footer, Hero, etc.)
│   ├── pages/               # Page components (Home, About, Services, Contact)
│   ├── App.jsx              # Main app with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages deployment via GitHub Actions. Push to the `main` branch to trigger the deployment workflow.

The site base path is set to `/Eminent-Insuarance/` in both `vite.config.js` and `src/main.jsx` to match the existing GitHub Pages URL.

## Pages

- **Home** (`/`) — Hero section with company overview
- **About** (`/about`) — Company info, values, stats, partnership, FAQ
- **Services** (`/services`) — Insurance service offerings
- **Contact** (`/contact`) — Contact form powered by Formspree

## Improvements Made

- Converted from static HTML/CSS/JS to React with component-based architecture
- Added client-side routing with React Router
- Replaced all emojis with accessible Lucide icons
- Fixed broken/unclosed HTML tags
- Fixed contact form `name` attributes for Formspree
- Standardized navigation across all pages
- Added SEO meta tags and Open Graph tags
- Added 404 page
- Added `robots.txt`
- Cleaned up duplicate and invalid CSS rules
- Added responsive mobile navigation

## Notes

- The deployed GitHub Pages URL contains a typo in the repository name (`Eminent-Insuarance`). Changing it would break existing bookmarks and SEO. To fix the typo, rename the repository and update `vite.config.js`, `src/main.jsx`, and `public/robots.txt` accordingly.
- Update the Formspree endpoint in `src/components/ContactForm.jsx` if you need to use a different form.
