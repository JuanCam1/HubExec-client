import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const CardComponent = () => {
  const value = 4;
  return (
    <Link
      to="/home/post/$postId"
      params={{
        postId: value.toString(),
      }}
    >
      <Card className="overflow-hidden px-4">
        <CardHeader className="px-0">
          <div className="flex justify-between items-start w-full">
            <CardTitle className="text-base font-semibold">QR Mobile</CardTitle>
            <Badge variant="default">{value % 2 === 0 ? "SO" : "Mobile"}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-[13px] text-left text-muted-foreground">
            Una aplicación para el escaneo de código Qrs y con historial de los
            escaneos anteriores, con modo dark y light.
          </p>
          <div className="mt-4 flex flex-wrap justify-between gap-2">
            <Badge variant="outline">v1.2</Badge>
            <Badge variant="outline">Productividad</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
export default CardComponent;
