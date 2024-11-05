import { LucideProps } from "lucide-react";
import {
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

export type FlowIcon = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  borderColour: string;
  bgColour: string;
};

export type FlowCategory = {
  title: string;
  icons: FlowIcon[];
};
