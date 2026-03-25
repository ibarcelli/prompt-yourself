# Prompt Yourself — Security

## Datos Sensibles
- Perfiles de usuario contienen información personal (edad, estado civil, situación laboral, estado deseado).
- Tratamiento: datos encriptados en reposo, acceso solo por el usuario autenticado.
- No se comparten perfiles entre usuarios.
- No se venden datos a terceros. NUNCA.

## API Keys
- Anthropic/OpenAI API key: almacenada en .env, nunca en código.
- Credenciales de base de datos: almacenadas en .env.

## Privacidad
- El usuario puede eliminar su cuenta y todos sus datos en cualquier momento.
- Los prompts generados no se almacenan a largo plazo salvo que el usuario lo pida.
- No tracking invasivo. Métricas mínimas: uso diario, retención, nada más.

## Cumplimiento
- Aviso de privacidad en español (mercado LATAM).
- Términos de uso claros: esto no es terapia psicológica ni médica.
- Disclaimer: "Prompt Yourself es una herramienta de desarrollo personal. No sustituye atención médica, psicológica o psiquiátrica profesional."
