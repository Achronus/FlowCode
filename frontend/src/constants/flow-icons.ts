import { NodeBase } from "@/components/Nodes";
import { FlowCategory, FlowIcon } from "@/types/flow";

import { Atom, Bot, Package, Scroll, Waypoints } from "lucide-react";
import { ComponentType } from "react";

export const ClassIcons: FlowIcon[] = [
  {
    title: "Abstract",
    icon: Atom,
    borderColour: "#8E44AD",
    bgColour: "#E8DFF1",
  },
  {
    title: "Generic",
    icon: Waypoints,
    borderColour: "#4A90E2",
    bgColour: "#D9E9F9",
  },
];

export const ModelIcons: FlowIcon[] = [
  {
    title: "Enum",
    icon: Scroll,
    borderColour: "#E67E22",
    bgColour: "#FBE6D3",
  },
  {
    title: "Data",
    icon: Package,
    borderColour: "#27AE60",
    bgColour: "#DFF5E4",
  },
];

export const CustomIcons: FlowIcon[] = [
  {
    title: "Custom",
    icon: Bot,
    borderColour: "#E74C3C",
    bgColour: "#F9DAD6",
  },
];

export const FlowCategories: FlowCategory[] = [
  {
    title: "Classes",
    icons: ClassIcons,
  },
  {
    title: "Models",
    icons: ModelIcons,
  },
  {
    title: "Custom",
    icons: CustomIcons,
  },
];

export const NodeTypes: Record<string, ComponentType<any>> = {
  Base: NodeBase,
};
