# Prompt Yourself — Status

## Estado Actual
**Fase**: 3 — MVP Interfaz
**Historia activa**: Pendiente de instrucciones de Kira
**Bloqueantes**: Ninguno
**Última actualización**: 2026-04-03

## Resumen
- **Fase 1 — POC Prompt Engine: COMPLETADA** (PY-001 a PY-006 ✅)
- **PY-019 completada**: Edge function `generate-prompt` desplegada en Supabase propio
- **Migración a Supabase propio completada**:
  - Proyecto: `etyenbpxatetgtgaqmsr` (prompt-yourself, West US Oregon)
  - Schema migrado: tablas `profiles` y `prompts` con RLS
  - Edge functions desplegadas: `generate-prompt`, `analyze-vision-board`
  - Secret `ANTHROPIC_API_KEY` configurado
  - Frontend (.env) apuntando al nuevo proyecto
  - Lovable Cloud Supabase (`wrqvhenmihrkahevyweo`) ya no se usa
- **MUSA Fase 1 — COMPLETADA**:
  - Repo: `ibarcelli/musa` — AI Content Agent para @promptyou.app
  - Stack: Next.js 14 + TypeScript + Tailwind + Supabase + Claude Haiku 4.5
  - Módulos: Analyst, Creator, Publisher (modo simulado)
  - Dashboard web con auth, preview, métricas mock, settings
  - Image generator con Sharp + SVG (3 templates)
  - Vercel Cron configurado (7 AM CST)
  - Hosted en: muse-theta-silk.vercel.app
  - Pendiente: ejecutar migración SQL, configurar env vars en Vercel, crear bucket agent-images

## Repos
- **Brain/contexto**: `ibarcelli/prompt-yourself` (este repo)
- **Frontend + Edge Functions**: `ibarcelli/prompty1` (Lovable)
- **MUSA (Instagram Agent)**: `ibarcelli/musa`

## Decisiones Vigentes
- DEC-001 a DEC-010 documentadas en decisions.md

## Riesgos Activos
- **R1**: Usuarios existentes en el Supabase de Lovable Cloud no se migraron. Ives necesita registrarse de nuevo en el nuevo Supabase.
- **R2**: Validar con usuario real (Ives) que los prompts generados en vivo cumplen con la estructura y tono esperados.
- **R3**: MUSA requiere ejecutar migración SQL en Supabase y configurar env vars antes de funcionar.
