import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";
import LoginForm from "@/sections/auth/login/login-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();
  return (
    <div className="animate-fade-right animate-duration-[800ms]  animate-ease-in lg:w-[500px] flex flex-col justify-center items-center gap-4 border p-8 rounded-md">
      <TypographyH2
        text="Iniciar Sesión"
        className="color-text font-bold text-3xl"
      />
      <TypographyP className="text-center">
        Ingresa tus credenciales para acceder a tu cuenta en HubExec
      </TypographyP>
      <LoginForm />
      <div className="flex justify-center w-full text-sm text-neutral-500">
        Aún no tienes una cuenta?{" "}
        <Link to="/register" className="animate-border ml-1">
          Registrarse
        </Link>
      </div>
      <button
        onClick={() => {
          navigate({
            to: "/home/post",
          });
        }}
      >
        ir
      </button>
    </div>
  );
}
