# Mohamed Hatem Portfolio

A React + Vite portfolio adapted from the supplied Yasser Salem reference project. The original page architecture, route structure, reusable components, responsive layouts, motion system, project viewer, and theme behavior are retained as the design base.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Main structure

- `src/pages/` — Home, About, Projects, Project Details, Experience, Skills, Contact, and Not Found pages.
- `src/components/` — reusable layout and page components.
- `src/data/` — portfolio, project, experience, skill, contact, and assistant configuration.
- `src/index.css` — reference design tokens and responsive styling, recolored in blue and teal and set to IBM Plex Sans.
- `public/` — profile assets, ITI logo, social icons, and project preview assets.

## Customize project case studies

Edit `src/data/projects.json`. The Lead Generation, Orbit, and Feedback pages are prepared with starter descriptions and can be expanded with final screenshots, features, and live URLs.

## Contact

The contact form opens WhatsApp with a formatted message addressed to `+201094160673`. The visitor still needs to press Send inside WhatsApp. The floating WhatsApp shortcut uses the same number.

The portfolio assistant uses the existing n8n webhook configured in `src/data/appConfig.js`.

## Deployment

The included `vercel.json` provides SPA route fallback for direct visits to nested pages.
