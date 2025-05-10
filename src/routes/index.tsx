import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-gray-300">
      <p>
        Edit <code>src/routes/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
