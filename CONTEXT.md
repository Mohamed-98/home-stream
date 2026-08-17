# HomeStream — Project Context

## What is HomeStream?

HomeStream is a self-hosted personal music player for trips. A NestJS backend runs on
your PC, pulls your playlist structure (names, track order) from the official Spotify
Web API, and matches each track against your own local MP3 library. The mobile app is
a single-screen player — song name, artist, and **Previous / Play-Pause / Next** —
with tracks pre-downloaded for offline playback before you travel.

Single-user, personal project. No app-level accounts — access is scoped by Tailscale,
not by login.

---

## Stack

- **Framework**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Audio format**: MP3 only
- **Metadata source**: Spotify Web API (OAuth2, metadata only — no audio/playback endpoints)
- **Tag extraction**: `music-metadata`
- **Fuzzy matching**: `fastest-levenshtein` (or `string-similarity`)
- **Real-time**: WebSockets (Socket.io) — now-playing state sync
- **Mobile**: React Native or Flutter
- **Offline storage (mobile)**: `expo-file-system` / `react-native-fs` (RN) or `path_provider` (Flutter) + local SQLite manifest
- **Networking**: Tailscale (PC ↔ phone, home and on trips)
- **Node**: v24

---

## Key Decisions

### No app-level auth

- Single-user personal app. No JWT, no login screen.
- Security boundary is Tailscale's network-level access, not the API.
- Backend is never port-forwarded to the public internet.

### MP3 only

- Local library is MP3-only by design — simplifies tag parsing and needs no
  transcoding step for mobile playback.

### Spotify integration is metadata-only

- OAuth2 pulls playlist names and track lists (`GET /me/playlists`,
  `GET /playlists/{id}/tracks`) — nothing from Spotify's playback or ad-serving
  endpoints is ever called.

### Track matching

- Spotify tracks are fuzzy-matched (title + artist) against the local `tracks` table.
- Matches store a `matchConfidence` score. Unmatched tracks are skipped during
  playback — no error state needed since the UI has no list view to show "missing" in.

### Minimal UI

- One screen. Current track + Previous / Play-Pause / Next. No playlist browser,
  no seek bar in v1.
- The backend owns queue order and position; the phone just steps through it.

### Offline caching is core, not optional

- The app is built specifically for trips — the PC won't be reachable while traveling.
- "Download playlist for offline" pulls all tracks in the active playlist to local
  device storage while still on Tailscale/home Wi-Fi.
- Playback always checks local cache first; falls back to streaming from the backend
  only if reachable.

### Soft state, not soft deletes

- This is a personal library sync tool, not a multi-tenant system — no soft-delete
  pattern needed. A rescan simply reconciles the `tracks` table against the folder.

---

## .env Template

```
DATABASE_URL="postgresql://user:pass@localhost:5432/homestream_db"

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/spotify/callback

LIBRARY_PATH=/home/you/Music

PORT=3000
```

---

## Project Structure

```
homestream-backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── src/
│   ├── auth/
│   │   └── spotify/            ← OAuth2 flow, token storage/refresh
│   ├── common/
│   │   ├── filters/             ← GlobalExceptionFilter
│   │   ├── interceptors/        ← ResponseInterceptor
│   │   └── pipes/                ← ValidationPipe config
│   ├── config/                  ← ConfigModule setup, .env validation
│   ├── prisma/                  ← PrismaService
│   ├── library/                 ← folder scan, ID3 tag extraction
│   ├── spotify/                 ← Spotify Web API client (playlists, tracks)
│   ├── matcher/                 ← fuzzy matching Spotify tracks → local files
│   ├── playlists/                ← playlist import, queue/position logic
│   ├── streaming/                ← range-request MP3 streaming
│   ├── playback/
│   │   └── gateway/               ← WebSocket now-playing state
│   ├── app.module.ts
│   └── main.ts
├── test/
│   ├── unit/
│   └── e2e/
├── docker-compose.yml
├── Dockerfile
├── .env
├── .env.example
└── README.md
```

---

## Current Status

- ✅ Phase 1 — Project setup
- ✅ Phase 2 — Database schema
- ⬜ Phase 3 — Library module (MP3 scan + tagging)
- ⬜ Phase 4 — Spotify auth + playlist import
- ⬜ Phase 5 — Matcher module
- ⬜ Phase 6 — Streaming module
- ⬜ Phase 7 — Playback module (current / next / previous + WebSocket sync)
- ⬜ Phase 8 — Mobile app
- ⬜ Phase 9 — Networking & hardening (Tailscale)

---

## Phase 1 — Project Setup

- ✅ Initialize NestJS project with TypeScript strict mode
- ✅ Set up folder structure (`src/`, `common/`, `config/`, `prisma/`)
- ✅ Install and configure Prisma with PostgreSQL
- ✅ Set up Docker Compose (postgres, app)
- ✅ Configure `ConfigModule` with `.env` validation (`joi` or `zod`)
- ✅ Set up global `ValidationPipe` (`whitelist: true`, `transform: true`)
- ✅ Set up global exception filter and response interceptor
- ✅ Write base `PrismaService` with `onModuleInit` / `onModuleDestroy`

---

## Phase 2 — Database Schema

- ✅ Design and write full Prisma schema:
  - ✅ `tracks` (title, artist, album, filePath, durationMs, spotifyTrackId, matchConfidence)
  - ✅ `playlists` (spotifyId, name)
  - ✅ `playlist_tracks` (playlistId, trackId, position)
  - ✅ `spotify_tokens` (access/refresh token, expiry)

---

## Phase 3 — Library Module

- ⬜ `POST /library/scan` — scan `LIBRARY_PATH` for `.mp3` files
- ⬜ Extract ID3 tags (title, artist, album, duration) via `music-metadata`
- ⬜ Upsert results into `tracks` table, keyed by file path
- ⬜ Remove `tracks` rows whose file no longer exists on rescan

---

## Phase 4 — Spotify Auth + Playlist Import

- ⬜ `GET /auth/spotify/login` — start OAuth2 authorization code flow
- ⬜ `GET /auth/spotify/callback` — exchange code for tokens, store in `spotify_tokens`
- ⬜ Token refresh handling (silent refresh before expiry)
- ⬜ `POST /playlists/import` — pull playlists + tracks from Spotify Web API,
- ⬜ upsert into `playlists` / `playlist_tracks`
- ⬜ `GET /playlists` — list imported playlists

---

## Phase 5 — Matcher Module

- ⬜ For each imported Spotify track, fuzzy-match title + artist against `tracks` table
- ⬜ Store `matchConfidence` on match
- ⬜ Configurable confidence threshold (e.g. reject matches below 0.7)
- ⬜ Re-run matcher automatically after `library/scan` or `playlists/import`

---

## Phase 6 — Streaming Module

- ⬜ `GET /stream/:trackId` — stream MP3 with HTTP range-request support (seek-friendly)
- ⬜ Correct `Content-Type: audio/mpeg` and `Accept-Ranges: bytes` headers
- ⬜ 404 for unmatched/missing tracks

---

## Phase 7 — Playback Module

- ⬜ `GET /playlists/:id/current` — current track in the queue
- ⬜ `POST /playlists/:id/next` — advance queue, return new current track
- ⬜ `POST /playlists/:id/previous` — move back, return new current track
- ⬜ WebSocket gateway (`/playback`) broadcasting current track + play/pause state

---

## Phase 8 — Mobile App

- ⬜ Single screen: track name, artist, Previous / Play-Pause / Next
- ⬜ Connects to backend via Tailscale hostname
- ⬜ "Download playlist for offline" — pulls all tracks in active playlist to local storage
- ⬜ Local SQLite/JSON manifest: `trackId → local file path + downloaded`
- ⬜ Playback logic: local cache first, backend stream as fallback
- ⬜ Manual "clear cache" action

---

## Phase 9 — Networking & Hardening

- ⬜ Install Tailscale on PC and phone
- ⬜ Point mobile app at PC's Tailscale hostname (works identically home/away)
- ⬜ Confirm backend is not exposed outside the tailnet (no port-forwarding)
- ⬜ `GET /health` health check endpoint
- ⬜ Basic request logging (method, path, status, duration)
