import { createFileRoute, Link } from "@tanstack/react-router";

import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";
import RegisterForm from "@/sections/auth/register/register-form";

export const Route = createFileRoute("/(auth)/register")({
  component: RegisterComponent,
});

function RegisterComponent() {
  return (
    <div className="animate-fade-left animate-duration-[800ms]  animate-ease-in lg:w-[500px] flex flex-col justify-center items-center gap-4 border p-8 rounded-md">
      <TypographyH2 text="Registro" className="color-text font-bold text-3xl" />
      <TypographyP className="text-center">
        Diligencia tus credenciales para crear una cuenta en HubExec
      </TypographyP>
      <RegisterForm />
      <div className="flex justify-center w-full text-sm text-neutral-500">
        Ya tienes una cuenta?{" "}
        <Link to="/login" className="ml-1 animate-border">
          Inicia Sesión
        </Link>
      </div>
    </div>
  );
}
