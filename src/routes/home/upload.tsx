import { createFileRoute } from "@tanstack/react-router";
import UploadForm from "@/sections/upload/upload-form";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

export const Route = createFileRoute("/home/upload")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full px-6 flex flex-col justify-center items-center gap-4 mt-6">
      <TypographyH2
        className="text-2xl text-center color-text"
        text="Subir nueva aplicación"
      />
      <TypographyP className="text-center">
        Comparte tu aplicación con la comunidad para que otros usuarios puedan
        descargarla y instalarla en sus dispositivos.
      </TypographyP>
      <UploadForm />
    </div>
  );
}
