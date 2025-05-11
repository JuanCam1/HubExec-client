import Cards from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/home/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full px-4 flex flex-col justify-center items-center gap-4 mt-6">
      <div className="relative flex gap-2 w-full ">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar aplicaciones..."
          className="w-[95%] pl-8"
        />
        <Button className="w-[5%] color-btn cursor-pointer ">
          <Search className="text-white" />
        </Button>
      </div>
      <Cards />
    </div>
  );
}
