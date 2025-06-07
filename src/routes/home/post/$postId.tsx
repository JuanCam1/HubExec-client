import { createFileRoute } from "@tanstack/react-router";

import ButtonDownload from "@/components/buttons/button-download";
import TypographyH2 from "@/components/shared/h2";
import TypographyH3 from "@/components/shared/h3";
import TypographyP from "@/components/shared/p";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/home/post/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { postId } = Route.useParams();
  return (
    <div className="w-full px-6 pb-8 flex flex-col justify-center items-center gap-4 mt-6">
      <div className="lg:w-[800px] flex flex-col justify-center items-start gap-4 pt-11">
        <TypographyH2
          text="Qr Mobile"
          className="color-text text-center w-full lg:text-5xl"
        />

        <div className="flex">
          <Badge className="bg-emerald-700 text-white py-1 px-2">
            Productividad
          </Badge>
        </div>
        <TypographyP className="text-pretty mt-3 dark:text-gray-300">
          Una aplicación para el escaneo de código Qrs,con historial de los
          escaneos anteriores, con modo dark y light. Desarrollada con React
          Native y Expo, con un diseño minimalista y funcional. Esta aplicación
          es ideal para aquellos que necesitan escanear códigos QR de manera
          rápida y eficiente, ya sea para acceder a enlaces, compartir
          información o realizar pagos. Con Qr Mobile, tendrás una herramienta
          poderosa en la palma de tu mano para simplificar tu vida diaria.
        </TypographyP>

        <div className="flex gap-3 justify-evenly w-full">
          <div>
            <span className="text-emerald-500">Versión:</span>
            <span className="text-pretty"> 1.0.0</span>
          </div>
          <div>
            <span className="text-emerald-500">Sistema: </span>
            <span className="text-pretty">Android</span>
          </div>
          <div>
            <span className="text-emerald-500">Categoria: </span>
            <span className="text-pretty">.apk</span>
          </div>
        </div>
        <div className="flex justify-center w-full mt-4">
          <ButtonDownload />
        </div>
      </div>
    </div>
  );
}
