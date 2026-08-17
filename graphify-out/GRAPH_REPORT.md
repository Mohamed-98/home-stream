# Graph Report - /home/gado/Documents/home-stream  (2026-08-17)

## Corpus Check
- 16 files · ~2,823 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 202 nodes · 241 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core Architecture|Core Architecture]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_TypeScript Options|TypeScript Options]]
- [[_COMMUNITY_Application Setup|Application Setup]]
- [[_COMMUNITY_Phase Roadmap & Design|Phase Roadmap & Design]]
- [[_COMMUNITY_Jest Config|Jest Config]]
- [[_COMMUNITY_NPM Scripts|NPM Scripts]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Database & Prisma|Database & Prisma]]
- [[_COMMUNITY_Project Bootstrap|Project Bootstrap]]
- [[_COMMUNITY_E2E Test Config|E2E Test Config]]
- [[_COMMUNITY_Nest CLI Config|Nest CLI Config]]
- [[_COMMUNITY_TS Build Config|TS Build Config]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 23 edges
2. `scripts` - 16 edges
3. `jest` - 9 edges
4. `tracks table` - 9 edges
5. `Prisma ORM` - 8 edges
6. `PrismaService` - 8 edges
7. `Phase 1 Project Setup` - 8 edges
8. `HomeStream` - 7 edges
9. `Spotify Web API` - 7 edges
10. `HomeStream Project` - 7 edges

## Surprising Connections (you probably didn't know these)
- `envValidationSchema` --implements--> `.env Template`  [INFERRED]
  src/config/env.validation.ts → CONTEXT.md
- `PrismaService` --implements--> `Phase 1 Project Setup`  [INFERRED]
  src/prisma/prisma.service.ts → CONTEXT.md
- `AppConfigModule` --implements--> `Phase 1 Project Setup`  [INFERRED]
  src/config/config.module.ts → CONTEXT.md
- `PrismaService` --conceptually_related_to--> `PostgreSQL Docker Service`  [INFERRED]
  src/prisma/prisma.service.ts → docker-compose.yml
- `appValidationPipe` --implements--> `Phase 1 Project Setup`  [INFERRED]
  src/common/pipes/validation.pipe.ts → CONTEXT.md

## Hyperedges (group relationships)
- **Global NestJS Cross-Cutting Setup** — src_main_bootstrap, src_common_pipes_validation_pipe_appvalidationpipe, src_common_filters_all_exceptions_filter_allexceptionsfilter, src_common_interceptors_transform_interceptor_transforminterceptor [INFERRED 0.95]
- **Phase 1 Project Setup Artifacts** — package_json_homestream, tsconfig_json_strictmode, tsconfig_build_json_buildconfig, prisma_config_config, prisma_seed_main, src_app_module_appmodule, src_main_bootstrap, src_config_config_module_appconfigmodule, src_config_env_validation_envvalidationschema, src_prisma_prisma_module_prismamodule, src_prisma_prisma_service_prismaservice, src_common_pipes_validation_pipe_appvalidationpipe, src_common_filters_all_exceptions_filter_allexceptionsfilter, src_common_interceptors_transform_interceptor_transforminterceptor, docker_compose_yml_postgres [INFERRED 0.95]
- **HomeStream Phase Roadmap (1-9)** — context_md_phase1_project_setup, context_md_phase2_database_schema, context_md_phase3_library_module, context_md_phase4_spotify_import, context_md_phase5_matcher_module, context_md_phase6_streaming_module, context_md_phase7_playback_module, context_md_phase8_mobile_app, context_md_phase9_networking [EXTRACTED 1.00]

## Communities (14 total, 1 thin omitted)

### Community 0 - "Core Architecture"
Cohesion: 0.10
Nodes (32): auth/spotify module (OAuth2, token storage/refresh), Backend-Owned Queue, config module (ConfigModule, .env validation), Fuzzy Matching (fastest-levenshtein / string-similarity), HomeStream, library module (folder scan, ID3 tag extraction), Local MP3 Library, matcher module (fuzzy matching Spotify tracks to local files) (+24 more)

### Community 1 - "Dev Dependencies"
Cohesion: 0.08
Nodes (25): devDependencies, eslint, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier, globals, @nestjs/cli (+17 more)

### Community 2 - "TypeScript Options"
Cohesion: 0.08
Nodes (23): compilerOptions, allowSyntheticDefaultImports, baseUrl, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, forceConsistentCasingInFileNames (+15 more)

### Community 3 - "Application Setup"
Cohesion: 0.13
Nodes (8): AppConfigModule, envValidationSchema, .env Template, NestJS Framework, Phase 1 Project Setup, ApiResponse, appValidationPipe, bootstrap()

### Community 4 - "Phase Roadmap & Design"
Cohesion: 0.14
Nodes (17): Backend-Owns-Queue Minimal UI, fastest-levenshtein Fuzzy Matching, Fuzzy Track Matching with matchConfidence, HomeStream Project, React Native / Flutter Mobile App, MP3-Only Library Design, Offline Caching Core to Trips, Phase 4 Spotify Auth + Playlist Import (+9 more)

### Community 5 - "Jest Config"
Cohesion: 0.12
Nodes (15): author, description, jest, collectCoverageFrom, coverageDirectory, moduleFileExtensions, rootDir, testEnvironment (+7 more)

### Community 6 - "NPM Scripts"
Cohesion: 0.12
Nodes (16): scripts, build, format, lint, prisma:generate, prisma:migrate, prisma:seed, start (+8 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, class-transformer, class-validator, joi, @nestjs/common, @nestjs/config, @nestjs/core, @nestjs/platform-express (+5 more)

### Community 8 - "Database & Prisma"
Cohesion: 0.20
Nodes (7): music-metadata Tag Extraction, Phase 2 Database Schema, Phase 3 Library Module, PostgreSQL, PrismaService, PostgreSQL Docker Service, PrismaService

### Community 9 - "Project Bootstrap"
Cohesion: 0.29
Nodes (5): HomeStream Node Package, main(), prisma, tsconfig.build.json Build Config, TypeScript Strict Mode Config

### Community 10 - "E2E Test Config"
Cohesion: 0.29
Nodes (6): moduleFileExtensions, rootDir, testEnvironment, testRegex, transform, ^.+\\.(t|j)s$

### Community 11 - "Nest CLI Config"
Cohesion: 0.33
Nodes (5): collection, compilerOptions, deleteOutDir, $schema, sourceRoot

## Knowledge Gaps
- **109 isolated node(s):** `$schema`, `collection`, `sourceRoot`, `deleteOutDir`, `extends` (+104 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Prisma ORM` connect `Core Architecture` to `Database & Prisma`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Jest Config`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Why does `tracks table` connect `Core Architecture` to `Phase Roadmap & Design`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **What connects `$schema`, `collection`, `sourceRoot` to the rest of the system?**
  _117 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core Architecture` be split into smaller, more focused modules?**
  _Cohesion score 0.1028225806451613 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `TypeScript Options` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._