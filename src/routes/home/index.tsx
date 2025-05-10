import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-red-400 lg:w-[1200px] flex flex-col justify-center items-center gap-4">
      <h2>Apps</h2>
    </div>
  );
}
