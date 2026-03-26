# Prompt Yourself — Perfil de Usuario Cero: Ives

## 1. Perfil en Formato Motor

### Variables del Template de User Message

**nombre**: Ives

**nivel**: 3 (Avanzado)
Justificación: Practicante regular de Silva Ultramind, Dispenza, Goldman y Goodeve. 5 años de exploración activa de potencial mental. Ha experimentado estados profundos de meditación y visualización. Conoce técnicas específicas y las aplica. Busca profundidad, no introducción.

**marco**: metafísico
Justificación: Su lenguaje natural incluye campo cuántico, activación, visualización profunda. Sus referentes principales (Dispenza, Silva, Goldman) operan en el marco metafísico. Su práctica incluye meditación en estados alfa/theta para acceder a estados de consciencia expandida.

**perfil_resumen**: Estratega financiero y triatleta. Salió de empleo corporativo en febrero 2026. Construye negocios propios (Elevon, Custom) e inversiones escalables. Padre presente. Practicante avanzado de meditación y visualización (Silva, Dispenza, Goldman, Goodeve). 20 años de desarrollo físico, 5 años de desarrollo mental.

**estado_deseado**: _(Ver sección 4 — Estado Deseado Transformado)_

---

## 2. Gap Estimation de Ives

| Dimensión | Gap Score | Justificación |
|---|---|---|
| Financiera | 4 (Alto) | Meta central explícita: $500K MXN netos/mes. Es el tema al que más palabras dedica en su visión. No viene desde escasez sino desde expansión — sabe que puede lograrlo pero aún no lo tiene de forma consistente. La salida de su empleo lo pone en transición activa hacia esta meta. |
| Temporal | 4 (Alto) | Meta explícita: 3-4 horas de trabajo de alto valor al día. Implica que actualmente no tiene esa estructura temporal. Menciona equilibrio en todas las áreas como deseo, lo que sugiere que la distribución actual de su tiempo no es la ideal. |
| Profesional | 3 (Medio) | Está en transición. Quiere coaching a ejecutivos y atletas, desarrollar a otros, construir negocios escalables. Los vehículos existen (Elevon, Custom) pero están en construcción. No expresa frustración sino dirección clara con trabajo pendiente. |
| Espiritual/Mental | 2 (Bajo) | Practicante avanzado con herramientas sólidas. Su deseo de paz y control total sugiere que busca profundizar, no empezar. Tiene la práctica — quiere más consistencia y profundidad en los resultados. |
| Relacional | 2 (Bajo) | Menciona relaciones sanas y amorosas y tiempo de calidad con sus hijos. No expresa carencia relacional. El gap es de mantenimiento y disfrute, no de construcción. |
| Física | 1 (Neutro) | Triatleta activo con 20 años de desarrollo físico. Entrena 1-2 horas diarias. Esta dimensión es una fortaleza, no un gap. Aparece en prompts para refuerzo positivo, no para corrección. |

---

## 3. Gap Descriptions en Lenguaje Natural

Estas descripciones se pasan al motor en la variable `gap_descripcion` según la dimensión del día.

### Financiera
Ives tiene como meta central generar $500K MXN netos mensuales de forma consistente a través de sus negocios e inversiones. Salió de un empleo corporativo recientemente y está construyendo sus fuentes de ingreso propias. No viene desde la escasez — sabe que tiene la capacidad — pero necesita consolidar la abundancia financiera como su nueva normalidad. Su relación con el dinero debe ser de facilidad y merecimiento, no de presión por resultados.

### Temporal
Ives quiere trabajar 3-4 horas al día en trabajo de alto valor y dedicar el resto a entrenar, estar con sus hijos y crecer personalmente. Está en transición desde una estructura de tiempo corporativa hacia una donde él controla completamente su agenda. Busca soberanía total sobre su tiempo — que cada hora sea elegida, no impuesta.

### Profesional
Ives está construyendo su siguiente capítulo profesional: negocios escalables (Elevon, Custom), inversiones, y coaching a ejecutivos y atletas. Tiene la experiencia financiera y el pensamiento estratégico. El gap no es de capacidad sino de manifestación — convertir su visión profesional en realidad tangible y reconocida.

### Espiritual/Mental
Ives es practicante avanzado de meditación y visualización. Tiene las herramientas. Su deseo es profundizar: sentirse completamente libre, en paz y con control total de sus decisiones. Si las preocupaciones por dinero desaparecieran, describe un estado de libertad total y paz profunda — ese es su norte interior.

### Relacional
Ives valora las relaciones sanas y amorosas y el tiempo de calidad con sus hijos. No expresa carencia relacional sino deseo de mantener y profundizar lo que ya tiene. Los prompts en esta dimensión refuerzan la gratitud y la presencia en sus relaciones, no la construcción desde cero.

### Física
Ives es triatleta activo con 20 años de desarrollo físico. Entrena 1-2 horas diarias. Esta es su dimensión más fuerte. Los prompts aquí celebran su vitalidad y refuerzan su identidad atlética — no corrigen un gap sino que amplifican una fortaleza.

---

## 4. Estado Deseado Transformado

Visión central de Ives transformada a lenguaje declarativo, primera persona, presente simple. Estas declaraciones alimentan la variable `estado_deseado` del motor.

```
Yo creo y recibo $500,000 MXN netos cada mes con facilidad y consistencia.
Yo trabajo 3-4 horas al día en trabajo de alto valor que aprovecha mi experiencia financiera y mi pensamiento estratégico.
Yo construyo negocios e inversiones escalables que crecen sin depender de mi presencia constante.
Yo mantengo excelente salud y energía.
Yo nutro relaciones sanas y amorosas.
Yo disfruto mis entrenamientos diarios de triatlón.
Yo tengo tiempo de calidad con mis hijos.
Yo soy coach de ejecutivos, atletas y personas ambiciosas que buscan equilibrio entre alto desempeño, éxito financiero y plenitud personal.
Yo vivo en equilibrio total en todas las áreas de mi vida.
Yo soy completamente libre, en paz y con control total de mi tiempo y mis decisiones.
```

---

## 5. Ejemplo de User Message Completo para Ives

Este es un ejemplo de cómo se vería una llamada real al motor para generar el prompt del día de Ives, dimensión financiera.

```
Genera el prompt del día para este usuario:

Nombre: Ives
Nivel: 3
Marco: metafísico
Dimensión del día: Financiera
Perfil: Estratega financiero y triatleta. Salió de empleo corporativo en febrero 2026. Construye negocios propios (Elevon, Custom) e inversiones escalables. Padre presente. Practicante avanzado de meditación y visualización (Silva, Dispenza, Goldman, Goodeve). 20 años de desarrollo físico, 5 años de desarrollo mental.
Estado deseado: Yo creo y recibo $500,000 MXN netos cada mes con facilidad y consistencia. Yo trabajo 3-4 horas al día en trabajo de alto valor. Yo construyo negocios e inversiones escalables. Yo soy completamente libre, en paz y con control total de mi tiempo y mis decisiones.
Gap en esta dimensión: Ives tiene como meta central generar $500K MXN netos mensuales de forma consistente a través de sus negocios e inversiones. Salió de un empleo corporativo recientemente y está construyendo sus fuentes de ingreso propias. No viene desde la escasez — sabe que tiene la capacidad — pero necesita consolidar la abundancia financiera como su nueva normalidad. Su relación con el dinero debe ser de facilidad y merecimiento, no de presión por resultados.

Prompts de los últimos 6 días (no repetir frases):
Ninguno (primer prompt).
```
