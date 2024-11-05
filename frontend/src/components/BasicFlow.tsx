"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import { MainControls } from "./FlowOverlay";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
];

function BasicFlowchart() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MainControls />
    </ReactFlow>
  );
}

export default BasicFlowchart;