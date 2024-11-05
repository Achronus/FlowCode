import Logo from "@/components/global/Logo";
import MagicButton from "@/components/MagicButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-50 flex items-center border-b border-neutral-900 justify-between">
      <aside className="flex items-center gap-2">
        <Logo />
      </aside>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex items-center gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Products</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Resources</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex items-center gap-4">
        <MagicButton href="/dashboard">
          {/* TODO: add user settings */}
          {true ? "Dashboard" : "Get Started"}
        </MagicButton>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
