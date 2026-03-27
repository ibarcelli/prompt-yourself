# Prompt Yourself — Status

## Estado Actual
**Fase**: 3 — MVP Interfaz
**Historia activa**: Pendiente de instrucciones de Kira
**Bloqueantes**: Ninguno
**Última actualización**: 2026-03-26

## Resumen
- **Fase 1 — POC Prompt Engine: COMPLETADA** (PY-001 a PY-006 ✅)
- **PY-019 completada**: Edge function `generate-prompt` creada en `supabase/functions/generate-prompt/index.ts`. Incluye:
  - Lectura de perfil de usuario y últimos 6 prompts de Supabase
  - Gap estimation por keywords en estado_transformado
  - Algoritmo de rotación de dimensiones (no repetir consecutiva, priorizar gaps, día 7 integrador)
  - Generación de gap_descripcion en lenguaje natural
  - Llamada a API de Anthropic (Claude Haiku 4.5) con system prompt + user message
  - Guardado del prompt generado en tabla `prompts`
  - CORS y manejo de errores
- Requiere despliegue: `supabase functions deploy generate-prompt` + configurar `ANTHROPIC_API_KEY` como secret

## Decisiones Vigentes
- DEC-001 a DEC-010 documentadas en decisions.md

## Riesgos Activos
- **R1**: La edge function necesita ser probada con un usuario real en Supabase. Validar que las tablas `users` y `prompts` tienen el schema esperado.
- **R2**: Builder no-code (Lovable) necesita conectarse a esta edge function. El frontend debe llamar a la función con el auth token del usuario.
