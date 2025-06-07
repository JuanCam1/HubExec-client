import Cards from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories-data";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/home/post/")({
  component: RouteComponent,
});

function RouteComponent() {
  // const
  console.log(categories);
  return (
    <div className="w-full px-6 flex flex-col justify-center items-center gap-4 mt-6">
      <div className="relative flex gap-2 w-full ">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar aplicaciones..."
          className="w-[95%] pl-8"
        />
        <Button className="w-[5%] min-w-[40px] color-btn cursor-pointer ">
          <Search className="text-white" />
        </Button>
      </div>
      <Tabs
        defaultValue="Todos"
        className="w-full flex flex-col justify-center items-end mt-4"
      >
        <TabsList className="mb-4 flex justify-center max-md:w-full">
          {categories.map((c) => (
            <TabsTrigger key={c.id} value={c.name} className="cursor-pointer">
              {c.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Todos">
          <Cards />
        </TabsContent>
        <TabsContent value="SO">
          <Cards />
        </TabsContent>
        <TabsContent value="Mobile">
          <Cards />
        </TabsContent>
        <TabsContent value="Desktop">
          <Cards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
