import TypographyH1 from "@/components/shared/h1";
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Code, LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  return (
    <div className="animate-fade-up animate-duration-[800ms] animate-ease-in lg:w-[1000px] flex flex-col justify-center items-center gap-4">
      <div className="color-text flex items-center gap-2">
        <Code className="size-8" />
        <TypographyH1 text="HubExec" />
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] color-bg">
        Encuentra y comparte aplicaciones
      </h1>
      <p className="max-w-[750px] text-lg text-center text-muted-foreground sm:text-xl">
        La plataforma donde desarrolladores comparten sus aplicaciones para
        escritorio y móviles
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => {
            navigate({
              to: "/login",
            });
          }}
          size="lg"
          className="color-btn group transition-all duration-300 cursor-pointer"
        >
          Explorar Apps
          <LayoutGrid className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            navigate({
              to: "/register",
            });
          }}
          size="lg"
          className="group transition-all duration-300 cursor-pointer"
        >
          Registrate
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
