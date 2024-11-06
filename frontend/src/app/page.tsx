import FlowBoard from "@/components/FlowBoard";
import FlowSidebar from "@/components/FlowSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <FlowSidebar />
      <main className="flex flex-1 h-screen">
        <FlowBoard />
      </main>
    </SidebarProvider>
  );
}
