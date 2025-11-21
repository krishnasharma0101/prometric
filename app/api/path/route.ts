import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

const sanitizeHeaderValue = (value?: string | null) => {
  if (!value) return undefined;
  return value.replace(/[\u0100-\uFFFF]/g, "");
};

const openrouterKey = sanitizeHeaderValue(process.env.OPENROUTER_API_KEY);

type PathRequest = {
  prompt: string;
  courseList: string[];
};

export async function POST(req: Request) {
  try {
    if (!openrouterKey) {
      return NextResponse.json(
        {
          summary:
            "Mock plan: strengthen foundations, specialize with a core exam, then pursue an expert credential once projects align.",
          steps: [
            {
              title: "Dial in the Fundamentals",
              description:
                "Revisit associate-level material to ensure routing, security, and automation concepts are solid.",
              courses: ["CCNA", "DevNet Associate"],
            },
            {
              title: "Earn Your Core",
              description:
                "Choose the professional track that best matches your goals and pass the core exam to unlock concentrations.",
              courses: ["350-401 ENCOR", "350-701 SCOR"],
            },
            {
              title: "Layer in Concentrations",
              description:
                "Add the focus exams that align with your roadmap (SD-WAN, wireless, automation, or security).",
              courses: ["300-415 ENSDWI", "300-435 ENAUTO"],
            },
            {
              title: "Prep for Expert Readiness",
              description:
                "Translate project experience into CCIE/DevNet Expert practice labs and real-world simulations.",
              courses: ["CCIE Enterprise Infrastructure"],
            },
          ],
        },
        { status: 200 },
      );
    }
    const body = (await req.json()) as PathRequest;
    if (!body.prompt) {
      return NextResponse.json(
        { message: "Prompt is required." },
        { status: 400 },
      );
    }

    const courseList = body.courseList ?? [];
    const courseListString = courseList.length
      ? courseList.join(", ")
      : "No courses provided.";

    const systemPrompt = `You are an expert Cisco training advisor. 
Respond ONLY with valid JSON matching:
{
  "summary": "string",
  "steps": [
    {
      "title": "string",
      "description": "string",
      "courses": ["course name"]
    }
  ]
}
Use 2-5 steps, reference only courses from this list (if relevant): ${courseListString}.
If the learner needs fundamentals before courses, include a step describing that with a custom description but keep courses aligned with the list.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openrouterKey}`,
        "HTTP-Referer": siteConfig.url,
        "X-Title": siteConfig.name,
      },
      body: JSON.stringify({
        model: "x-ai/grok-4.1-fast:free",
        temperature: 0.4,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Learner input: ${body.prompt}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to contact OpenRouter.");
    }

    const json = await response.json();
    const content: string | undefined =
      json?.choices?.[0]?.message?.content?.trim();

    if (!content) {
      throw new Error("Empty response from OpenRouter.");
    }

    const cleaned = content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let payload;
    try {
      payload = JSON.parse(cleaned);
    } catch (error) {
      throw new Error("Unable to parse planner response.");
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Adaptive path error", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Unable to generate path.",
      },
      { status: 500 },
    );
  }
}

