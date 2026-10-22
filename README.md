# PortLinks India — Next.js migration

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure
- `app/` — Next.js routes; each route folder maps directly to its URL.
- `app/layout.tsx` — shared document layout and global stylesheets.
- `public/assets/css/` — legacy site stylesheets.
- `public/assets/js/` — legacy interaction scripts.
- `public/assets/logo.png` — shared logo image.
- `.next/` — generated Next.js build and type-check files; do not edit by hand.

## Routes
- `/` — homepage
- `/about-us`
- `/coming-soon`
- `/hardware`
- `/impact`
- `/login`
- `/services`
- `/software-solutions`

## Hosting
This project is configured for standard Next.js hosting such as Vercel:
1. Push this project to a new GitHub repository.
2. Import that repository into Vercel.
3. Framework preset: Next.js; build command `npm run build`; output settings can remain default.
4. Deploy after testing.

## Migration notes
The latest supplied HTML pages have been moved into Next.js route components, their page markup is rendered in the React tree (not inside iframes), assets are served from `public/assets`, and legacy JS is loaded to preserve current interactions. This is a migration bridge, not a complete component-by-component React rewrite; legacy scripts should be tested carefully because direct DOM manipulation can conflict with React. The supplied ZIP contains eight HTML pages; there was no `inquiry.html` in this latest archive, so no `/inquiry` route was created. The CSS files are loaded globally to preserve the original visual design.
