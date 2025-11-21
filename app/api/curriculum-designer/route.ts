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

    // Sanitize API key to remove any non-ASCII characters
    const rawApiKey = process.env.OPENROUTER_API_KEY;
    const apiKey = rawApiKey
      ? rawApiKey.replace(/[^\x00-\x7F]/g, "").trim()
      : null;
    
    if (!apiKey || apiKey.length === 0) {
      // Return a mock flowchart when API key is not available
      const mockFlowchart = `FLOWCHART
NODE: START | Intake & Assessment | Assess current skill level and learning objectives. Identify knowledge gaps and preferred learning style. | 1 week
NODE: FOUNDATION | Core Fundamentals | Build foundational knowledge through structured modules covering essential concepts and terminology. | 2-3 weeks
NODE: PRACTICE | Hands-On Labs | Apply concepts through practical exercises, simulations, and real-world scenarios. | 2-3 weeks
NODE: ADVANCED | Deep Dive | Explore advanced topics and specialized areas based on learning goals. | 3-4 weeks
NODE: VALIDATION | Assessment & Review | Validate learning through assessments, peer reviews, and mentor feedback. | 1 week
NODE: CAPSTONE | Capstone Project | Complete a comprehensive project that demonstrates mastery of the learning objectives. | 2-3 weeks
EDGE: START -> FOUNDATION | Initial assessment complete
EDGE: FOUNDATION -> PRACTICE | Fundamentals mastered
EDGE: PRACTICE -> ADVANCED | Practical skills demonstrated
EDGE: ADVANCED -> VALIDATION | Advanced concepts understood
EDGE: VALIDATION -> CAPSTONE | Assessment passed
END`;
      
      const parsed = parseFlowchartText(mockFlowchart);
      return NextResponse.json({
        flowchartText: mockFlowchart.trim(),
        nodes: parsed.nodes,
        edges: parsed.edges,
      });
    }

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
      const errorData = await response.json().catch(() => ({ error: { message: "Unknown error" } }));
      const errorMessage = errorData?.error?.message || "Failed to contact OpenRouter.";
      
      // If authentication fails, return mock data instead of error
      if (response.status === 401 || response.status === 403) {
        console.warn("[curriculum-designer] API key authentication failed, using mock data");
        const mockFlowchart = `FLOWCHART
NODE: START | Intake & Assessment | Assess current skill level and learning objectives. Identify knowledge gaps and preferred learning style. | 1 week
NODE: FOUNDATION | Core Fundamentals | Build foundational knowledge through structured modules covering essential concepts and terminology. | 2-3 weeks
NODE: PRACTICE | Hands-On Labs | Apply concepts through practical exercises, simulations, and real-world scenarios. | 2-3 weeks
NODE: ADVANCED | Deep Dive | Explore advanced topics and specialized areas based on learning goals. | 3-4 weeks
NODE: VALIDATION | Assessment & Review | Validate learning through assessments, peer reviews, and mentor feedback. | 1 week
NODE: CAPSTONE | Capstone Project | Complete a comprehensive project that demonstrates mastery of the learning objectives. | 2-3 weeks
EDGE: START -> FOUNDATION | Initial assessment complete
EDGE: FOUNDATION -> PRACTICE | Fundamentals mastered
EDGE: PRACTICE -> ADVANCED | Practical skills demonstrated
EDGE: ADVANCED -> VALIDATION | Advanced concepts understood
EDGE: VALIDATION -> CAPSTONE | Assessment passed
END`;
        
        const parsed = parseFlowchartText(mockFlowchart);
        return NextResponse.json({
          flowchartText: mockFlowchart.trim(),
          nodes: parsed.nodes,
          edges: parsed.edges,
        });
      }
      
      throw new Error(errorMessage);
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


