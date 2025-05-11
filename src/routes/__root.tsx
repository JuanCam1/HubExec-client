import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex-1 w-full flex flex-col justify-center items-center min-h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
