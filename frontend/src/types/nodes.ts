import { Node, Edge } from "@xyflow/react";
import { LucideIcon } from "./common";

export type EditorNode = Node & {
  data: {
    colour: string;
    bgColour: string;
    text: string;
    icon: LucideIcon;
  };
};

export type NodeEdges = Edge & {};
