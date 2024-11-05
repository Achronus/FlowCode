import BasicFlowchart from "@/components/BasicFlow";
import { FlowSidebar } from "@/components/FlowOverlay";
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <FlowSidebar />
      <main className="flex flex-1 h-screen">
        <BasicFlowchart />
      </main>
    </SidebarProvider>
  );
};

export default Dashboard;
