import Logo from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { FlowCategories } from "@/constants/flow-icons";
import { FlowIcon } from "@/types/flow";

type TitleProps = {
  text: string;
};

type CategoryIconsProps = {
  icons: FlowIcon[];
};

const Title = ({ text }: TitleProps) => {
  return (
    <SidebarGroupLabel className="flex items-center mt-4">
      <h1 className="text-base font-medium text-slate-600">{text}</h1>
      <hr className="flex flex-1 m-4" />
    </SidebarGroupLabel>
  );
};

const CategoryIcons = ({ icons }: CategoryIconsProps) => {
  return (
    <SidebarGroupContent className="my-2">
      <SidebarMenu className="flex flex-row flex-wrap">
        {icons.map((icon) => (
          <SidebarMenuItem key={icon.title} className="m-1">
            <SidebarMenuButton
              asChild
              className="flex flex-col w-full h-full p-3 transition-all"
              draggable
            >
              <div className="cursor-pointer">
                <div
                  className="flex border-2 rounded-lg p-4 justify-center items-center"
                  style={{
                    borderColor: icon.borderColour,
                    color: icon.borderColour,
                    backgroundColor: icon.bgColour,
                  }}
                >
                  <icon.icon />
                </div>
                <p>{icon.title}</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};

const FlowSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <Logo />
        <SidebarGroup>
          {FlowCategories.map((category) => (
            <>
              <Title text={category.title} />
              <CategoryIcons icons={category.icons} />
            </>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default FlowSidebar;
