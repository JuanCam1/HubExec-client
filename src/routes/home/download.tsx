import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";
import DownloadTable from "@/sections/download/download-table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/download")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full px-6 flex flex-col justify-center items-center gap-4 mt-6">
      <TypographyH2
        className="text-2xl text-center color-text"
        text="Descargas"
      />
      <TypographyP className="text-center">
        Aplicaciones que has descargado y que están disponibles para descargar
      </TypographyP>
      <DownloadTable />
    </div>
  );
}
