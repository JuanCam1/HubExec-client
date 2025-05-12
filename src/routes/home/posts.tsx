import Cards from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories-data";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/home/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  // const
  console.log(categories);
  return (
    <div className="w-full px-4 flex flex-col justify-center items-center gap-4 mt-6">
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
        <TabsList className="mb-4 flex justify-center max-lg:w-full">
          {categories.map((c) => (
            <TabsTrigger key={c.id} value={c.name} className="cursor-pointer">
              {c.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Todos">
          <Cards />
        </TabsContent>
        <TabsContent value="Windows">
          <Cards />
        </TabsContent>
        <TabsContent value="MacOS">
          <Cards />
        </TabsContent>
        <TabsContent value="Linux">
          <Cards />
        </TabsContent>
        <TabsContent value="IOS">
          <Cards />
        </TabsContent>
        <TabsContent value="Android">
          <Cards />
        </TabsContent>
        <TabsContent value="Github">
          <Cards />
        </TabsContent>
        <TabsContent value="Otros">
          <Cards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
