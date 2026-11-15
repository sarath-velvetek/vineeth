# Vineeth Kattakudy — landing page

React + Vite single-page site, pre-rendered to static HTML at build time.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs static site to dist/
npm run preview   # serve dist/ locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, or the existing server).

## Editing

- **Copy, questions, WhatsApp number, etc.** — `src/content.js`
- **Sections** — `src/components/`, one file per section, assembled in `src/App.jsx`
- **Styles** — `src/styles.css` (colour and font tokens at the top under `:root`)
- **Images** — `public/img/`
- **SEO / social preview tags** — `index.html`

## WhatsApp

Every "Book a free conversation" button opens a WhatsApp chat. Set `WHATSAPP_NUMBER` (digits only, with
country code, e.g. `919876543210`) and the pre-filled `WHATSAPP_MESSAGE` in `src/content.js`, then rebuild.
