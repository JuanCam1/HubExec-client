import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/setting")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full px-4 flex flex-col justify-center items-center gap-4 mt-6">
      Hello "/home/setting"!
    </div>
  );
}
