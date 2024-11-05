import { FlowCategory, FlowIcon } from "@/types/flow";

import {
  Atom,
  Bot,
  Package,
  Scroll,
  Waypoints,
} from "lucide-react";

export const ClassIcons: FlowIcon[] = [
  {
    title: "Abstract",
    url: "#",
    icon: Atom,
    borderColour: "#8E44AD",
    bgColour: "#E8DFF1",
  },
  {
    title: "Generic",
    url: "#",
    icon: Waypoints,
    borderColour: "#4A90E2",
    bgColour: "#D9E9F9",
  },
];

export const ModelIcons: FlowIcon[] = [
  {
    title: "Enum",
    url: "#",
    icon: Scroll,
    borderColour: "#E67E22",
    bgColour: "#FBE6D3",
  },
  {
    title: "Data",
    url: "#",
    icon: Package,
    borderColour: "#27AE60",
    bgColour: "#DFF5E4",
  },
  {
    title: "AI",
    url: "#",
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
];
