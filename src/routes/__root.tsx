import Navbar from "@/components/shared/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-full flex justify-center items-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
