import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/post/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/post/$postId"!</div>;
}
