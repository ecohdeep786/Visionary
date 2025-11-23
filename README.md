# Visionary

Visionary — a starter scaffold for the Visionary edtech product.

## Running the app (development)

```bash
# from repo root
pnpm install
pnpm --filter visionary-web dev
```

Or run the Next.js app directly:

```bash
cd apps/web
pnpm install
pnpm run dev
```

## Building for production

```bash
pnpm --filter visionary-web build
```

This README is intentionally minimal — the repository contains a Next.js app in `apps/web` and a placeholder UI package in `packages/ui`.