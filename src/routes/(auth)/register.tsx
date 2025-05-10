import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/register")({
  component: RegisterComponent,
});

function RegisterComponent() {
  return (
    <div className="animate-fade-up animate-duration-[800ms] animate-ease-in lg:w-[1200px] flex flex-col justify-center items-center gap-4">
      register
    </div>
  );
}
