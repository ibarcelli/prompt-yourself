# Prompt Yourself — Status

## Estado Actual
**Fase**: 3 — MVP Interfaz
**Historia activa**: Pendiente de instrucciones de Kira
**Bloqueantes**: Ninguno
**Última actualización**: 2026-03-31

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

## Repos
- **Brain/contexto**: `ibarcelli/prompt-yourself` (este repo)
- **Frontend + Edge Functions**: `ibarcelli/prompty1` (Lovable)

## Decisiones Vigentes
- DEC-001 a DEC-010 documentadas en decisions.md

## Riesgos Activos
- **R1**: Usuarios existentes en el Supabase de Lovable Cloud no se migraron. Ives necesita registrarse de nuevo en el nuevo Supabase.
- **R2**: Validar con usuario real (Ives) que los prompts generados en vivo cumplen con la estructura y tono esperados.
