import BasicFlowchart from "@/components/BasicFlow";
import { FlowSidebar } from "@/components/FlowOverlay";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <FlowSidebar />
      <main className="flex flex-1 h-screen">
        <BasicFlowchart />
      </main>
    </SidebarProvider>
  );
}
