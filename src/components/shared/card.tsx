import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const CardComponent = () => {
  const value = 4;
  return (
    <Card className="overflow-hidden px-4">
      <CardHeader className="px-0">
        <div className="flex justify-between items-start w-full">
          <CardTitle className="text-base font-semibold">App Ejemplo</CardTitle>
          <Badge variant="default">
            {value % 2 === 0 ? "Windows" : "macOS"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-[13px] text-left text-muted-foreground">
          Una aplicación de ejemplo con funcionalidades increíbles para mejorar
          tu productividad.
        </p>
        <div className="mt-4 flex flex-wrap justify-between gap-2">
          <Badge variant="outline">v1.2</Badge>
          <Badge variant="outline">Productividad</Badge>
        </div>
      </CardContent>
      <Separator className="py-0" />
      <CardFooter>
        <Link to="/" className="animate-border text-[13px] ">
          Ver detalles
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
