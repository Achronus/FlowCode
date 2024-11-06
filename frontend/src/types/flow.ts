import { LucideIcon } from "./common";

export type FlowIcon = {
  title: string;
  icon: LucideIcon;
  borderColour: string;
  bgColour: string;
};

export type FlowCategory = {
  title: string;
  icons: FlowIcon[];
};
