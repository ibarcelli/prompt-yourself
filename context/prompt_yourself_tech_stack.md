# Prompt Yourself — Tech Stack

## Restricciones
- Ives no hace coding.
- Sin presupuesto para desarrollo complejo.
- Debe ser construible con herramientas no-code/low-code + IA.

## Stack MVP

### Frontend / App
- **Tipo**: PWA (Progressive Web App)
- **Builder**: Lovable, Bolt, o Replit Agent (por evaluar en POC)
- **Acceso**: Navegador móvil, instalable como app sin App Store
- **Diseño**: Minimalista. Pantallas mínimas.

### Motor de Prompts (IA)
- **API**: Anthropic (Claude) o OpenAI (GPT) — por evaluar costo/calidad
- **Uso**: System prompt personalizado por usuario que genera prompt diario
- **Costo estimado**: Centavos por usuario por día
- **Input**: Perfil del usuario (nivel, contexto, gaps, marco preferido)
- **Output**: Texto estructurado en 4 partes (anclaje, declaración, visualización, cierre)

### Base de Datos
- **Perfiles de usuario**: Base de datos simple (Supabase o Firebase free tier)
- **Datos almacenados**: Perfil, nivel, contexto de vida, estado deseado, mapa de gaps, historial de prompts

### Autenticación
- Email + password o magic link (lo más simple)

### Hosting
- Vercel o Netlify (free tier)

## Stack Futuro (con ingresos)
- **Audio**: ElevenLabs o similar para voz sintética
- **Frecuencias**: Generación de binaurales (10 Hz alfa, 6 Hz theta) layered con voz
- **App nativa**: Si la base de usuarios lo justifica
- **Analytics**: Mixpanel o similar para métricas de retención
- **Pagos**: Stripe o equivalente LATAM (Mercado Pago, etc.)
