# Prompt Yourself — Status

## Estado Actual
**Fase**: 3 — MVP Interfaz
**Historia activa**: Pendiente de instrucciones de Kira
**Bloqueantes**: Ninguno
**Última actualización**: 2026-03-31

## Resumen
- **Fase 1 — POC Prompt Engine: COMPLETADA** (PY-001 a PY-006 ✅)
- **PY-019 completada**: Edge function `generate-prompt` actualizada en repo `prompty1` (ibarcelli/prompty1) con:
  - Gap estimation por keyword matching en estado_transformado (escala 1-5)
  - Algoritmo de rotación inteligente (no repite consecutiva, prioriza gaps, día 7 integrador)
  - Generación de gap_descripcion en lenguaje natural
  - Campo "Gap en esta dimensión" agregado al user message
  - Compatible con schema real de Supabase (tabla `profiles`, `edad` string)
- **Nota**: El código fuente del frontend vive en `ibarcelli/prompty1`. El repo `prompt-yourself` contiene el brain/contexto del proyecto. La edge function en `prompt-yourself/supabase/` es un borrador previo — la versión canónica está en `prompty1`.

## Repos
- **Brain/contexto**: `ibarcelli/prompt-yourself` (este repo)
- **Frontend + Edge Functions**: `ibarcelli/prompty1` (Lovable)

## Decisiones Vigentes
- DEC-001 a DEC-010 documentadas en decisions.md

## Riesgos Activos
- **R1**: La edge function necesita ser re-desplegada en Supabase para que los cambios tomen efecto: `supabase functions deploy generate-prompt`
- **R2**: Validar con usuario real (Ives) que los prompts generados en vivo cumplen con la estructura y tono esperados
