import { NextResponse } from "next/server";
import { parseFlowchartText } from "@/lib/flowchart";
import { siteConfig } from "@/lib/site";

type CurriculumPayload = {
  profile: string;
  goal: string;
  constraints?: string;
};

const buildPrompt = ({ profile, goal, constraints }: CurriculumPayload) => {
  const constraintText = constraints
    ? `Constraints or preferences: ${constraints}.`
    : "No explicit constraints provided.";

  return `You are an elite curriculum designer for enterprise technology academies.
Create a text-based flowchart that guides a learner from their current profile to the requested goal.

Use the following format exactly:
FLOWCHART
NODE: [id] | [title] | [actionable description with 1-2 sentences] | [estimated duration or effort]
(Repeat NODE lines for each stage)
EDGE: [from id] -> [to id] | [condition or rationale]
(Repeat EDGE lines to show sequencing/branches)
END

Learner profile: ${profile}
Goal: ${goal}
${constraintText}

Keep ids short (e.g., START, LAB1, CAPSTONE). Include 5-8 nodes covering assessment, core builds, deep dives, validation, and capstone/impact.`;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<CurriculumPayload>;
    const profile = body.profile?.trim();
    const goal = body.goal?.trim();

    if (!profile || !goal) {
      return NextResponse.json(
        { error: "Profile and goal are required." },
        { status: 400 },
      );
    }

    // Hardcoded API key for OpenRouter
    const apiKey = "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";

    const prompt = buildPrompt({
      profile,
      goal,
      constraints: body.constraints,
    });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": siteConfig.url,
        "X-Title": siteConfig.name,
      },
      body: JSON.stringify({
        model: "x-ai/grok-4.1-fast:free",
        temperature: 0.5,
        messages: [
          {
            role: "system",
            content:
              "You design battle-tested technology learning journeys. Always respond in the requested FLOWCHART format.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to contact OpenRouter.");
    }

    const json = await response.json();
    const content: string =
      json?.choices?.[0]?.message?.content ??
      "FLOWCHART\nNODE: START | Intake | Could not parse response | 1 week\nEND";

    const parsed = parseFlowchartText(content);

    return NextResponse.json({
      flowchartText: content.trim(),
      nodes: parsed.nodes,
      edges: parsed.edges,
    });
  } catch (error) {
    console.error("[curriculum-designer]", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate curriculum right now.",
      },
      { status: 500 },
    );
  }
}


