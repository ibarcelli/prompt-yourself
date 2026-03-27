import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SYSTEM_PROMPT = `Eres la voz interna ideal del usuario — su inconsciente hablándole a su consciente. No eres coach, app, terapeuta ni guía externo. Generas declaraciones en primera persona que el usuario lee como propias.

ESTRUCTURA (4 partes, flujo continuo sin encabezados ni separadores):

1. ANCLAJE (1 línea): Identidad del usuario. Roles o atributos centrales. "Soy [identidad]." Máximo 2 atributos. Solo identidad, no acciones ni metas.

2. DECLARACIÓN DE ESTADO (2-3 líneas): Declaraciones en presente simple que apuntan al gap del día. Incluir al menos una emoción y una acción/resultado. No explicar por qué.

3. VISUALIZACIÓN DIRIGIDA (2-3 líneas): Escena concreta y específica que el usuario puede vivir hoy. Incluir al menos un elemento sensorial (ver, sentir, escuchar). Usar "Veo", "Siento" como entradas. La escena pertenece a la dimensión del día.

4. CIERRE (siempre igual): "Esta es mi vida."

REGLAS OBLIGATORIAS:
- Primera persona, presente simple declarativo. "Soy", "Recibo", "Veo". Sin pronombre "yo" salvo 1-2 veces para énfasis intencional.
- Emociones SOLO en la parte alta de Hicks: gratitud, libertad, amor, empoderamiento, pasión, alegría, entusiasmo.
- Longitud total: 6-10 líneas.
- Personalizar usando el perfil, estado deseado y gap del usuario.
- Escenas concretas y sensoriales en la visualización.
- Variar verbos de apertura: no todas las líneas empiezan igual. Usar también "Mi", "Cada", "Hoy", "Este".
- No repetir frases de los prompts recientes proporcionados.
- Siempre terminar con "Esta es mi vida."

PROHIBIDO:
- Segunda persona ("tú deberías", "te mereces")
- Futuro ("lograrás", "vas a conseguir")
- Condicional ("podrías", "serías capaz")
- Preguntas
- Motivacional genérico ("¡tú puedes!", "el éxito te espera")
- Mencionar la app o el proceso
- Imperativos ("respira profundo", "cierra los ojos")
- Negaciones ("no tengo miedo") — el inconsciente no procesa "no"
- Mezclar marcos (vocabulario metafísico en marco científico o viceversa)
- Más de 10 líneas
- Visualización abstracta ("veo éxito")
- Lenguaje de esfuerzo ("lucho por", "trabajo duro para")

CALIBRACIÓN POR NIVEL:
- Nivel 1 (Curioso): Lenguaje simple, cotidiano. Intensidad baja-media. Sin jerga.
- Nivel 2 (Practicante): Lenguaje de desarrollo personal. Intensidad media. Estados internos y patrones.
- Nivel 3 (Avanzado): Lenguaje sofisticado. Intensidad alta. Declaraciones que presuponen maestría.

CALIBRACIÓN POR MARCO:
- Metafísico: campo, energía, frecuencia, activación, universo, manifestación, expansión, resonancia, creación consciente. En Nivel 3: campo cuántico, campo unificado. En Nivel 1: sin jerga espiritual, lenguaje cálido y simple.
- Científico: mente, cerebro, patrones mentales, concentración, claridad mental, enfoque, entrenamiento mental, plasticidad cerebral, estado de flujo. PROHIBIDO: corteza prefrontal, default mode network, toda jerga de paper académico.

DIMENSIONES:
- Financiera: abundancia, relación con el dinero, generación de riqueza
- Física: salud, energía, deporte, cuerpo, vitalidad
- Relacional: pareja, familia, amistades, comunidad
- Profesional: propósito, impacto, reconocimiento, carrera
- Espiritual/Mental: paz interior, claridad, conexión consigo mismo
- Temporal: libertad de tiempo, balance, presencia, control de agenda

OUTPUT: SOLO el texto del prompt. Sin explicaciones, sin encabezados, sin comillas, sin metadata.`;

const DIMENSIONS = [
  "Financiera",
  "Física",
  "Relacional",
  "Profesional",
  "Espiritual/Mental",
  "Temporal",
] as const;

type Dimension = (typeof DIMENSIONS)[number];

const DIMENSION_KEYWORDS: Record<Dimension, string[]> = {
  Financiera: [
    "dinero",
    "ingreso",
    "ganar",
    "riqueza",
    "abundancia",
    "financiera",
    "económica",
    "económico",
    "cobrar",
    "precio",
    "inversión",
    "negocio",
  ],
  Física: [
    "salud",
    "energía",
    "cuerpo",
    "ejercicio",
    "deporte",
    "entrenar",
    "peso",
    "correr",
    "fuerza",
    "vitalidad",
    "físic",
  ],
  Relacional: [
    "familia",
    "pareja",
    "hijos",
    "amigos",
    "relación",
    "amor",
    "conexión",
    "comunidad",
    "personas",
  ],
  Profesional: [
    "trabajo",
    "carrera",
    "negocio",
    "emprender",
    "propósito",
    "impacto",
    "liderar",
    "profesional",
    "coaching",
    "coach",
  ],
  "Espiritual/Mental": [
    "paz",
    "calma",
    "equilibrio",
    "claridad",
    "meditación",
    "interior",
    "espiritual",
    "consciencia",
    "mente",
    "mental",
  ],
  Temporal: [
    "tiempo",
    "libertad",
    "horas",
    "balance",
    "agenda",
    "descanso",
    "presente",
    "prisa",
  ],
};

function estimateGaps(estadoTransformado: string): Record<Dimension, number> {
  const text = estadoTransformado.toLowerCase();
  const gaps: Record<Dimension, number> = {
    Financiera: 1,
    Física: 1,
    Relacional: 1,
    Profesional: 1,
    "Espiritual/Mental": 1,
    Temporal: 1,
  };

  for (const dim of DIMENSIONS) {
    let count = 0;
    for (const keyword of DIMENSION_KEYWORDS[dim]) {
      const regex = new RegExp(keyword, "gi");
      const matches = text.match(regex);
      if (matches) count += matches.length;
    }
    if (count >= 4) gaps[dim] = 5;
    else if (count === 3) gaps[dim] = 4;
    else if (count === 2) gaps[dim] = 3;
    else if (count === 1) gaps[dim] = 2;
  }

  return gaps;
}

interface PromptRecord {
  dimension: string;
  prompt_text: string;
  created_at: string;
}

function selectDimension(
  gaps: Record<Dimension, number>,
  recentPrompts: PromptRecord[],
): { dimension: string; isIntegrador: boolean; integradorDims?: string[] } {
  const last7 = recentPrompts.filter((p) => {
    const diff =
      Date.now() - new Date(p.created_at).getTime();
    return diff < 7 * 24 * 60 * 60 * 1000;
  });

  // Count appearances this week
  const weekCount: Record<string, number> = {};
  for (const dim of DIMENSIONS) weekCount[dim] = 0;
  for (const p of last7) {
    if (p.dimension && weekCount[p.dimension] !== undefined) {
      weekCount[p.dimension]++;
    }
  }

  // Day 7 integrador: if we have 6 consecutive days
  if (last7.length >= 6) {
    const uniqueDims = new Set(last7.map((p) => p.dimension));
    if (uniqueDims.size >= 5) {
      const sorted = [...DIMENSIONS].sort((a, b) => gaps[b] - gaps[a]);
      return {
        dimension: "Integrador",
        isIntegrador: true,
        integradorDims: sorted.slice(0, 3),
      };
    }
  }

  // Get yesterday's dimension
  const yesterday = recentPrompts.length > 0 ? recentPrompts[0].dimension : null;

  // Filter out yesterday, sort by gap desc then least appearances
  const candidates = DIMENSIONS.filter((d) => d !== yesterday).sort((a, b) => {
    const gapDiff = gaps[b] - gaps[a];
    if (gapDiff !== 0) return gapDiff;
    return (weekCount[a] || 0) - (weekCount[b] || 0);
  });

  return { dimension: candidates[0], isIntegrador: false };
}

function generateGapDescription(
  dimension: string,
  estadoTransformado: string,
  isIntegrador: boolean,
  integradorDims?: string[],
): string {
  if (isIntegrador && integradorDims) {
    return `Integrador — El usuario tiene gaps relevantes en ${integradorDims.join(", ")}. Su estado deseado menciona: "${estadoTransformado.substring(0, 200)}". Generar un prompt que entreteja estas dimensiones naturalmente.`;
  }

  const text = estadoTransformado.toLowerCase();
  const keywords = DIMENSION_KEYWORDS[dimension as Dimension];
  if (!keywords) {
    return `El usuario no mencionó esta dimensión explícitamente. Generar un prompt de mantenimiento general en esta área.`;
  }

  const found = keywords.filter((k) => text.includes(k));
  if (found.length === 0) {
    return `El usuario no mencionó esta dimensión explícitamente. Generar un prompt de mantenimiento general en esta área.`;
  }

  // Extract a relevant snippet from estado_transformado
  const sentences = estadoTransformado.split(/[.!]\s*/);
  const relevant = sentences.filter((s) =>
    found.some((k) => s.toLowerCase().includes(k)),
  );
  const excerpt =
    relevant.length > 0
      ? relevant.slice(0, 2).join(". ")
      : estadoTransformado.substring(0, 150);

  return `El usuario desea mejorar en la dimensión ${dimension}. Su estado deseado menciona: "${excerpt}."`;
}

function buildUserMessage(
  user: {
    name: string;
    level: number;
    marco: string;
    estado_transformado: string;
    edad: number;
    situacion: string;
    ocupacion: string;
  },
  dimension: string,
  gapDescription: string,
  recentPrompts: PromptRecord[],
): string {
  const promptsRecientes =
    recentPrompts.length === 0
      ? "Ninguno (primer prompt)."
      : recentPrompts
          .slice(0, 6)
          .map((p, i) => `Día ${i + 1}: ${p.prompt_text}`)
          .join("\n");

  return `Genera el prompt del día para este usuario:

Nombre: ${user.name}
Nivel: ${user.level}
Marco: ${user.marco}
Dimensión del día: ${dimension}
Perfil: ${user.edad} años, ${user.ocupacion}, ${user.situacion}
Estado deseado: ${user.estado_transformado}
Gap en esta dimensión: ${gapDescription}

Prompts de los últimos 6 días (no repetir frases):
${promptsRecientes}`;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "No authorization header" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Initialize Supabase client with user's auth
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    // Get authenticated user
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Read user profile
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("name, level, marco, estado_transformado, edad, situacion, ocupacion")
      .eq("id", authUser.id)
      .single();

    if (profileError || !profile) {
      return new Response(
        JSON.stringify({ error: "Profile not found", details: profileError?.message }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      );
    }

    // Read recent prompts (last 6, ordered by most recent first)
    const { data: recentPrompts } = await supabase
      .from("prompts")
      .select("prompt_text, dimension, created_at")
      .eq("user_id", authUser.id)
      .order("created_at", { ascending: false })
      .limit(6);

    const prompts: PromptRecord[] = recentPrompts || [];

    // Estimate gaps from estado_transformado
    const gaps = estimateGaps(profile.estado_transformado || "");

    // Select dimension for today
    const { dimension, isIntegrador, integradorDims } = selectDimension(
      gaps,
      prompts,
    );

    // Generate gap description
    const gapDescription = generateGapDescription(
      dimension,
      profile.estado_transformado || "",
      isIntegrador,
      integradorDims,
    );

    // Build the dimension label for the API call
    const dimensionLabel = isIntegrador
      ? `Integrador (${integradorDims!.join(" + ")})`
      : dimension;

    // Build user message
    const userMessage = buildUserMessage(
      profile,
      dimensionLabel,
      gapDescription,
      prompts,
    );

    // Call Anthropic API
    const anthropicKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicKey) {
      return new Response(
        JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const anthropicResponse = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 300,
          temperature: 0.7,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: userMessage }],
        }),
      },
    );

    if (!anthropicResponse.ok) {
      const errBody = await anthropicResponse.text();
      return new Response(
        JSON.stringify({ error: "Anthropic API error", details: errBody }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    const anthropicData = await anthropicResponse.json();
    const promptText =
      anthropicData.content?.[0]?.text?.trim() || "";

    if (!promptText) {
      return new Response(
        JSON.stringify({ error: "Empty response from AI" }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    // Save to prompts table
    const { error: insertError } = await supabase.from("prompts").insert({
      user_id: authUser.id,
      prompt_text: promptText,
      dimension: isIntegrador ? "Integrador" : dimension,
      created_at: new Date().toISOString(),
    });

    if (insertError) {
      // Log but don't fail — still return the prompt to the user
      console.error("Failed to save prompt:", insertError.message);
    }

    return new Response(
      JSON.stringify({
        prompt: promptText,
        dimension: isIntegrador
          ? `Integrador (${integradorDims!.join(" + ")})`
          : dimension,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal error", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});
