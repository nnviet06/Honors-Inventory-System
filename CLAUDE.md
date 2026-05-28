# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Equipment inventory management system for an Honors IT team. Full-stack TypeScript app with React/Vite frontend, Express backend, and PostgreSQL via Supabase.

Live: https://honors-inventory-system.vercel.app/

## Commands

### Backend (`backend/`)
```bash
npm run dev      # start dev server with hot reload (nodemon)
npm run build    # compile TypeScript to dist/
npm start        # run compiled dist/server.js
```

### Frontend (`frontend/`)
```bash
npm run dev      # start Vite dev server
npm run build    # type-check + Vite build
npm run lint     # ESLint
npm run preview  # preview production build
```

No shared root-level scripts — run commands from `backend/` or `frontend/` directories separately.

## Environment Variables

**`backend/.env`**
```
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_ANON_KEY=<jwt>
PORT=5000
NODE_ENV=development
```

**`frontend/.env`**
```
VITE_API_URL=http://localhost:5000
```

## Architecture

### Request flow
```
Browser → React (Vite, port 5173)
       → Express API (port 5000, prefix /api)
       → Supabase (PostgreSQL)
```

### Backend (`backend/src/`)
- `server.ts` — Express init, CORS, mounts routes under `/api`
- `routes.ts` — all route definitions; auth routes are public, equipment routes are protected
- `database.ts` — single Supabase client, initialized once with dotenv
- `middleware/authMiddleware.ts` — extracts JWT from `Authorization: Bearer`, verifies via Supabase, attaches `req.user.id`
- `controllers/authController.ts` — signup/signin/guest mode; guest creates a temporary `guest_<timestamp>@example.com` account
- `controllers/equipmentController.ts` — CRUD + bulk delete + paginated/filtered `getAllEquipment`

### Frontend (`frontend/src/`)
- `App.tsx` — router: `/` (landing/auth), `/items` (table view), `/locations` (floor-by-floor view)
- `services/` — all HTTP calls to the backend (`equipmentService.ts`, `authService.ts`)
- `hooks/useEquipTable.ts` — main state/fetch/filter logic for the items table
- `hooks/useEquipmentActions.ts` — edit/delete/modal handlers
- `components/layout/` — table, location group, navbar, search bar
- `components/modals/` — add, edit, filter modals

### Database (`database/`)
Key tables: `equipment` (with `user_id` UUID and `user_seq` integer for per-user display IDs), `locations`, `user_seq_counters`.

- `schema.sql` — current full schema
- `migrations/` — numbered migration files (001–003); apply in order for fresh setups
- `reset.sql` — truncates `equipment` and `user_seq_counters` (keeps locations intact)
- `seed.sql` / `seed_2000.sql` — sample data

Row-level security (RLS) is enabled on Supabase; all equipment queries are scoped to `req.user.id`. The backend uses `!inner` join syntax on Supabase queries (e.g., `locations!inner(room_name, building_type)`).

### Auth model
Supabase handles authentication. The backend is a proxy — it calls `supabase.auth.signUp/signInWithPassword` and forwards the session token to the client. All subsequent requests attach the token; `authMiddleware` validates it and injects `user.id` into the request.

### Pagination & filtering
`getAllEquipment` accepts `page`, `limit`, `search`, `location`, and `type` query params. Filtering and pagination happen server-side in the Supabase query (range + ilike). The frontend passes these through `equipmentService`.
