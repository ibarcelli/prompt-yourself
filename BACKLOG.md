# Prompt Yourself — Backlog

## Leyenda
- **P0**: Bloqueante. Sin esto no se puede avanzar.
- **P1**: Crítico para el MVP.
- **P2**: Importante pero no bloqueante.
- **P3**: Nice to have.
- **Estado**: 🔲 Pendiente | 🔄 En progreso | ✅ Completado

---

## FASE 1: POC — Prompt Engine

### EPIC 1.1: Motor de Prompts
| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-001 | Diseñar estructura interna del prompt (4 partes: anclaje, declaración, visualización, cierre) con ejemplos por nivel y marco | P0 | — | ✅ |
| PY-002 | Definir mapa de dimensiones humanas (6 dimensiones) con criterios de gap estimation | P0 | — | ✅ |
| PY-003 | Crear system prompt maestro para la API de IA que genere prompts personalizados según perfil, gaps y marco | P0 | PY-001, PY-002 | ✅ |
| PY-004 | Generar perfil de Ives como usuario cero usando su goal alignment doc | P0 | PY-002 | ✅ |
| PY-005 | Generar 7 prompts de prueba (1 semana) para Ives y validar | P0 | PY-003, PY-004 | 🔲 |
| PY-006 | Iterar system prompt según feedback de Ives | P1 | PY-005 | 🔲 |

### EPIC 1.2: Validación de Tono
| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-007 | Generar 7 prompts para perfil tipo Gisella (avanzada, marco metafísico) | P1 | PY-003 | 🔲 |
| PY-008 | Generar 7 prompts para perfil tipo Fiorella (escéptica, marco científico) | P1 | PY-003 | 🔲 |
| PY-009 | Generar 7 prompts para perfil tipo Marco (curioso, marco neutral) | P2 | PY-003 | 🔲 |
| PY-010 | Comparar y ajustar: ¿cada set suena como el inconsciente de ESA persona? | P1 | PY-007, PY-008 | 🔲 |

---

## FASE 2: POC — Onboarding

### EPIC 2.1: Diseño del Onboarding
| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-011 | Diseñar preguntas de nivel de avance metafísico (no declarativas, sutiles) | P0 | — | 🔲 |
| PY-012 | Diseñar preguntas de contexto de vida básico | P0 | — | 🔲 |
| PY-013 | Diseñar flujo de captura de estado deseado → transformación a lenguaje declarativo | P0 | PY-001 | 🔲 |
| PY-014 | Diseñar selector de marco (científico vs metafísico) sin etiquetar | P1 | — | 🔲 |
| PY-015 | Crear flujo completo de onboarding en wireframe/mockup | P1 | PY-011 a PY-014 | 🔲 |

---

## FASE 3: MVP — Interfaz

### EPIC 3.1: PWA Core
| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-016 | Seleccionar builder (Lovable/Bolt/Replit) y crear proyecto base | P0 | — | 🔲 |
| PY-017 | Implementar pantalla de onboarding con las preguntas diseñadas | P0 | PY-015, PY-016 | 🔲 |
| PY-018 | Implementar pantalla diaria del prompt (diseño oscuro, dorado, minimalista) | P0 | PY-016 | 🔲 |
| PY-019 | Conectar motor de prompts (API de IA) al flujo diario | P0 | PY-003, PY-018 | 🔲 |
| PY-020 | Implementar autenticación básica (email + password o magic link) | P1 | PY-016 | 🔲 |
| PY-021 | Implementar pantalla de perfil básico (ver/editar contexto) | P2 | PY-016 | 🔲 |
| PY-022 | Configurar PWA (manifest, service worker, instalable) | P1 | PY-016 | 🔲 |
| PY-023 | Desplegar en Vercel/Netlify | P0 | PY-017 a PY-022 | 🔲 |

### EPIC 3.2: Base de Datos
| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-024 | Configurar Supabase/Firebase (free tier) | P0 | — | 🔲 |
| PY-025 | Diseñar schema: usuarios, perfiles, historial de prompts | P0 | PY-024 | 🔲 |
| PY-026 | Implementar CRUD de perfiles | P0 | PY-025 | 🔲 |

---

## FASE 4: Iteración con Usuarios

| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-027 | Invitar 10-20 beta testers (red de Ives, Gisella, socios) | P0 | PY-023 | 🔲 |
| PY-028 | Implementar tracking básico de uso (aperturas diarias, completions) | P1 | PY-023 | 🔲 |
| PY-029 | Recoger feedback cualitativo (formulario simple o conversación) | P1 | PY-027 | 🔲 |
| PY-030 | Iterar prompts y onboarding según feedback | P0 | PY-029 | 🔲 |

---

## FASE 5: Monetización

| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-031 | Definir split gratis vs premium basado en datos del POC | P0 | PY-030 | 🔲 |
| PY-032 | Integrar pagos (Stripe y/o Mercado Pago) | P0 | PY-031 | 🔲 |
| PY-033 | Implementar paywall con precio final (~$20 MXN/mes referencia) | P0 | PY-032 | 🔲 |

---

## FASE 6: Audio + Sofisticación

| ID | Historia | P | Dep | Estado |
|---|---|---|---|---|
| PY-034 | Evaluar ElevenLabs vs alternativas para voz sintética neutra en español | P1 | — | 🔲 |
| PY-035 | Diseñar capas de frecuencias binaurales (alfa 10 Hz, theta 6 Hz) | P1 | — | 🔲 |
| PY-036 | Integrar generación de audio al flujo diario para usuarios premium | P0 | PY-034, PY-035, PY-033 | 🔲 |
| PY-037 | Implementar evaluación de alineación de objetivos automatizada | P2 | PY-030 | 🔲 |
| PY-038 | Implementar compartir prompt del día en stories | P3 | PY-030 | 🔲 |
