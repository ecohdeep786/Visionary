# Visionary

Visionary — a Vite + React scaffold for the Visionary edtech product.

## Quick start (development)

```bash
# from repo root
npm install
npm run dev
```

Open the app at `http://localhost:5173` (default Vite URL).

## Project structure (high level)

- `src/features/` — Feature-based entry points (home, students, educators, etc.)
- `src/components/` — Shared UI components and layout
- `src/router/` — Application router (canonical source of routes)
- `src/app/` — Root app component
- `src/lib/`, `src/hooks/`, `src/services/` — Utilities, hooks, API clients

Notes:
- The previous `src/pages/` implementations were merged into `src/features/` to standardize on a feature-based layout. `src/pages/*` now contains thin proxies only where needed (for backward compatibility).
- See `docs/STRUCTURE.md` for a detailed guide on the recommended project layout.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build production bundle
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

If you plan to run in a different environment (pnpm, yarn), adapt the install/run commands accordingly.
