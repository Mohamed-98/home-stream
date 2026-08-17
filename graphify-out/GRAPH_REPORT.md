# Graph Report - /home/gado/Documents/home-stream  (2026-08-17)

## Corpus Check
- 3 files · ~3,048 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 209 nodes · 255 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core Architecture|Core Architecture]]
- [[_COMMUNITY_Database Schema|Database Schema]]
- [[_COMMUNITY_Application Setup|Application Setup]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_TypeScript Options|TypeScript Options]]
- [[_COMMUNITY_NPM Scripts|NPM Scripts]]
- [[_COMMUNITY_Jest Config|Jest Config]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Project Bootstrap|Project Bootstrap]]
- [[_COMMUNITY_E2E Test Config|E2E Test Config]]
- [[_COMMUNITY_Nest CLI Config|Nest CLI Config]]
- [[_COMMUNITY_TS Build Config|TS Build Config]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 23 edges
2. `scripts` - 16 edges
3. `HomeStream Project` - 10 edges
4. `PrismaService` - 10 edges
5. `jest` - 9 edges
6. `tracks table` - 9 edges
7. `Prisma ORM` - 8 edges
8. `Phase 1 Project Setup` - 8 edges
9. `HomeStream` - 7 edges
10. `Spotify Web API` - 7 edges

## Surprising Connections (you probably didn't know these)
- `PrismaService` --references--> `Prisma ORM`  [INFERRED]
  src/prisma/prisma.service.ts → CONTEXT.md
- `envValidationSchema` --implements--> `.env Template`  [INFERRED]
  src/config/env.validation.ts → CONTEXT.md
- `PrismaService` --participate_in--> `HomeStream Project`  [INFERRED]
  src/prisma/prisma.service.ts → CONTEXT.md
- `Soft State, Not Soft Deletes` --rationale_for--> `tracks Table`  [INFERRED]
  CONTEXT.md → prisma/migrations/20260817183627_init_database_schema/migration.sql
- `AppConfigModule` --implements--> `Phase 1 Project Setup`  [INFERRED]
  src/config/config.module.ts → CONTEXT.md

## Hyperedges (group relationships)
- **Initial Database Schema Migration (Phase 2)** — 20260817183627_init_database_schema_migration_sql_tracks_table, 20260817183627_init_database_schema_migration_sql_playlists_table, 20260817183627_init_database_schema_migration_sql_playlist_tracks_table, 20260817183627_init_database_schema_migration_sql_spotify_tokens_table [EXTRACTED 1.00]
- **Prisma Data Access Layer** — prisma_prisma_service, prisma_prisma_service_prismapg_adapter, 20260817183627_init_database_schema_migration_sql_tracks_table, 20260817183627_init_database_schema_migration_sql_playlists_table, 20260817183627_init_database_schema_migration_sql_playlist_tracks_table, 20260817183627_init_database_schema_migration_sql_spotify_tokens_table [INFERRED 0.85]

## Communities (14 total, 1 thin omitted)

### Community 0 - "Core Architecture"
Cohesion: 0.10
Nodes (32): auth/spotify module (OAuth2, token storage/refresh), Backend-Owned Queue, config module (ConfigModule, .env validation), Fuzzy Matching (fastest-levenshtein / string-similarity), HomeStream, library module (folder scan, ID3 tag extraction), Local MP3 Library, matcher module (fuzzy matching Spotify tracks to local files) (+24 more)

### Community 1 - "Database Schema"
Cohesion: 0.10
Nodes (27): playlist_tracks Table, playlists Table, spotify_tokens Table, tracks Table, Backend-Owns-Queue Minimal UI, Database Schema Phase 2, fastest-levenshtein Fuzzy Matching, Fuzzy Track Matching with matchConfidence (+19 more)

### Community 2 - "Application Setup"
Cohesion: 0.13
Nodes (12): AppConfigModule, envValidationSchema, .env Template, NestJS Framework, Phase 1 Project Setup, Phase 2 Database Schema, PostgreSQL, PostgreSQL Docker Service (+4 more)

### Community 3 - "Dev Dependencies"
Cohesion: 0.08
Nodes (25): devDependencies, eslint, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier, globals, @nestjs/cli (+17 more)

### Community 4 - "TypeScript Options"
Cohesion: 0.08
Nodes (23): compilerOptions, allowSyntheticDefaultImports, baseUrl, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, forceConsistentCasingInFileNames (+15 more)

### Community 5 - "NPM Scripts"
Cohesion: 0.12
Nodes (16): scripts, build, format, lint, prisma:generate, prisma:migrate, prisma:seed, start (+8 more)

### Community 6 - "Jest Config"
Cohesion: 0.12
Nodes (15): author, description, jest, collectCoverageFrom, coverageDirectory, moduleFileExtensions, rootDir, testEnvironment (+7 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, class-transformer, class-validator, joi, @nestjs/common, @nestjs/config, @nestjs/core, @nestjs/platform-express (+5 more)

### Community 8 - "Project Bootstrap"
Cohesion: 0.29
Nodes (5): HomeStream Node Package, main(), prisma, tsconfig.build.json Build Config, TypeScript Strict Mode Config

### Community 9 - "E2E Test Config"
Cohesion: 0.29
Nodes (6): moduleFileExtensions, rootDir, testEnvironment, testRegex, transform, ^.+\\.(t|j)s$

### Community 10 - "Nest CLI Config"
Cohesion: 0.33
Nodes (5): collection, compilerOptions, deleteOutDir, $schema, sourceRoot

## Knowledge Gaps
- **109 isolated node(s):** `$schema`, `collection`, `sourceRoot`, `deleteOutDir`, `extends` (+104 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `PrismaService` connect `Application Setup` to `Core Architecture`, `Database Schema`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `Prisma ORM` connect `Core Architecture` to `Application Setup`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `HomeStream Project` connect `Database Schema` to `Application Setup`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `HomeStream Project` (e.g. with `Database Schema Phase 2` and `Track Matching with matchConfidence`) actually correct?**
  _`HomeStream Project` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `collection`, `sourceRoot` to the rest of the system?**
  _118 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core Architecture` be split into smaller, more focused modules?**
  _Cohesion score 0.1028225806451613 - nodes in this community are weakly interconnected._
- **Should `Database Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.09971509971509972 - nodes in this community are weakly interconnected._