# Graph Report - /home/gado/Documents/home-stream  (2026-08-10)

## Corpus Check
- Corpus is ~2,194 words - fits in a single context window. You may not need a graph.

## Summary
- 147 nodes · 168 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.89)
- Token cost: 2,600 input · 4,500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_TypeScript Compiler Config|TypeScript Compiler Config]]
- [[_COMMUNITY_Backend Domain Modules|Backend Domain Modules]]
- [[_COMMUNITY_Package Metadata|Package Metadata]]
- [[_COMMUNITY_NPM Scripts|NPM Scripts]]
- [[_COMMUNITY_App Scaffold & Bootstrap|App Scaffold & Bootstrap]]
- [[_COMMUNITY_Product Vision & Concepts|Product Vision & Concepts]]
- [[_COMMUNITY_Jest Unit Config|Jest Unit Config]]
- [[_COMMUNITY_Jest E2E Config|Jest E2E Config]]
- [[_COMMUNITY_Nest CLI Config|Nest CLI Config]]
- [[_COMMUNITY_Framework & Stack|Framework & Stack]]
- [[_COMMUNITY_Build TSConfig|Build TSConfig]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 22 edges
2. `scripts` - 13 edges
3. `tracks table` - 9 edges
4. `jest` - 8 edges
5. `HomeStream` - 7 edges
6. `Spotify Web API` - 7 edges
7. `Prisma ORM` - 7 edges
8. `playlists module (playlist import, queue/position logic)` - 6 edges
9. `AppService` - 5 edges
10. `AppController` - 5 edges

## Surprising Connections (you probably didn't know these)
- `NestJS Starter Repository` --references--> `NestJS`  [INFERRED]
  README.md → CONTEXT.md

## Hyperedges (group relationships)
- **Track Matching Pipeline** — context_spotify_web_api, context_library_module, context_matcher_module, context_tracks_table [EXTRACTED 1.00]
- **Offline Playback Data Flow** — context_mobile_app, context_offline_caching, context_streaming_module, context_tailscale [INFERRED 0.85]
- **Tailscale Network Security Boundary** — context_homestream, context_no_app_auth, context_tailscale [EXTRACTED 1.00]

## Communities (13 total, 1 thin omitted)

### Community 0 - "Dev Dependencies"
Cohesion: 0.08
Nodes (24): devDependencies, eslint, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier, globals, jest (+16 more)

### Community 1 - "TypeScript Compiler Config"
Cohesion: 0.09
Nodes (22): compilerOptions, allowSyntheticDefaultImports, baseUrl, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, forceConsistentCasingInFileNames (+14 more)

### Community 2 - "Backend Domain Modules"
Cohesion: 0.17
Nodes (19): auth/spotify module (OAuth2, token storage/refresh), Backend-Owned Queue, Fuzzy Matching (fastest-levenshtein / string-similarity), matcher module (fuzzy matching Spotify tracks to local files), Metadata-Only Spotify Integration, OAuth2, playback/gateway (WebSocket now-playing state), playlist_tracks table (+11 more)

### Community 3 - "Package Metadata"
Cohesion: 0.15
Nodes (12): author, dependencies, @nestjs/common, @nestjs/core, @nestjs/platform-express, reflect-metadata, rxjs, description (+4 more)

### Community 4 - "NPM Scripts"
Cohesion: 0.15
Nodes (13): scripts, build, format, lint, start, start:debug, start:dev, start:prod (+5 more)

### Community 5 - "App Scaffold & Bootstrap"
Cohesion: 0.27
Nodes (3): AppController, AppModule, AppService

### Community 6 - "Product Vision & Concepts"
Cohesion: 0.25
Nodes (11): HomeStream, library module (folder scan, ID3 tag extraction), Local MP3 Library, Minimal UI, Mobile App, MP3 Only, music-metadata, No App-Level Auth (+3 more)

### Community 7 - "Jest Unit Config"
Cohesion: 0.22
Nodes (9): jest, collectCoverageFrom, coverageDirectory, moduleFileExtensions, rootDir, testEnvironment, testRegex, transform (+1 more)

### Community 8 - "Jest E2E Config"
Cohesion: 0.29
Nodes (6): moduleFileExtensions, rootDir, testEnvironment, testRegex, transform, ^.+\\.(t|j)s$

### Community 9 - "Nest CLI Config"
Cohesion: 0.33
Nodes (5): collection, compilerOptions, deleteOutDir, $schema, sourceRoot

### Community 10 - "Framework & Stack"
Cohesion: 0.40
Nodes (5): config module (ConfigModule, .env validation), NestJS, WebSockets (Socket.io), NestJS Starter Repository, Node.js

## Knowledge Gaps
- **90 isolated node(s):** `$schema`, `collection`, `sourceRoot`, `deleteOutDir`, `extends` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `scripts` connect `NPM Scripts` to `Package Metadata`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `jest` connect `Jest Unit Config` to `Package Metadata`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `tracks table` (e.g. with `playlist_tracks table` and `playlists table`) actually correct?**
  _`tracks table` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `collection`, `sourceRoot` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compiler Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._