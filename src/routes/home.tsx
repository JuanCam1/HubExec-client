import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/shared/navbar";

export const Route = createFileRoute("/home")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SidebarProvider>
      <AppSidebar side="left" />
      <section className="w-full overflow-y-hidden">
        <Navbar />
        {/* <div className="pt-8 w-full h-full"> */}
        <Outlet />
        {/* </div> */}
      </section>
    </SidebarProvider>
  );
}
