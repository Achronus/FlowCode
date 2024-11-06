"use client";

import MainControls from "@/components/MainControls";
import { FlowCategories, NodeTypes } from "@/constants/flow-icons";
import { EditorNode, NodeEdges } from "@/types/nodes";

import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback } from "react";

const CreateNode = (
  idx: number,
  title: string,
  position = { x: 0, y: 0 }
): EditorNode => {
  let iconData;

  for (const category of FlowCategories) {
    iconData = category.icons.find((icon) => icon.title === title);

    if (iconData) {
      break;
    }
  }

  if (!iconData) {
    throw new Error("Invalid node selected.");
  }

  return {
    id: `node-${idx}`,
    type: "Base",
    position,
    data: {
      colour: iconData.borderColour,
      bgColour: iconData.bgColour,
      text: iconData.title,
      icon: iconData.icon,
    },
  };
};

const initialNodes: EditorNode[] = [
  CreateNode(1, "Abstract", { x: 500, y: 500 }),
  CreateNode(2, "Enum", { x: 800, y: 500 }),
];
const initialEdges: NodeEdges[] = [];

function FlowBoard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={NodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MainControls />
    </ReactFlow>
  );
}

export default FlowBoard;
