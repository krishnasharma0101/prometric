export type FlowchartNode = {
  id: string;
  title: string;
  description: string;
  duration?: string;
};

export type FlowchartEdge = {
  from: string;
  to: string;
  label?: string;
};

export type ParsedFlowchart = {
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
};

const lineIsNode = (line: string) =>
  line.toUpperCase().startsWith("NODE:");
const lineIsEdge = (line: string) =>
  line.toUpperCase().startsWith("EDGE:");

export const parseFlowchartText = (text: string): ParsedFlowchart => {
  if (!text) {
    return { nodes: [], edges: [] };
  }

  const nodes: FlowchartNode[] = [];
  const edges: FlowchartEdge[] = [];

  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      if (lineIsNode(line)) {
        const nodeLine = line.replace(/^NODE:\s*/i, "");
        const [id, title, description, duration] = nodeLine
          .split("|")
          .map((segment) => segment.trim());
        if (!id) return;
        nodes.push({
          id,
          title: title || id,
          description: description || "",
          duration,
        });
      } else if (lineIsEdge(line)) {
        const edgeLine = line.replace(/^EDGE:\s*/i, "");
        const [pathPart, labelPart] = edgeLine
          .split("|")
          .map((segment) => segment.trim());
        if (!pathPart) return;
        const [from, to] = pathPart.split(/->/).map((segment) => segment.trim());
        if (!from || !to) return;
        edges.push({
          from,
          to,
          label: labelPart,
        });
      }
    });

  return { nodes, edges };
};


