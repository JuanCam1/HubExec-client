import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import reactHooks from "../../assets/images/hooks.webp";
import expressImg from "../../assets/images/express.webp";
import { Link } from "@tanstack/react-router";

const Cards = () => {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Link to="/react/hooks">
        <Card className="hover:dark:bg-zinc-900 dark:bg-zinc-800 pt-6">
          <CardContent className="flex justify-center items-center w-full h-48">
            <img
              src={reactHooks}
              className="rounded-md w-full h-full object-cover"
              alt="React Hooks"
            />
          </CardContent>
          <CardHeader className="pt-0">
            <CardTitle>React Hooks</CardTitle>
            <CardDescription>
              Permiten que los componentes de la función tengan acceso al estado
              y otras características de React.
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Card className="hover:dark:bg-zinc-900 dark:bg-zinc-800 pt-6">
        <CardContent className="flex justify-center items-center w-full h-48">
          <img
            src={expressImg}
            className="rounded-md w-full h-full object-contain"
            alt="Express TypeScript"
          />
        </CardContent>
        <CardHeader className="pt-0">
          <CardTitle>Express TypeScript</CardTitle>
          <CardDescription>
            Inicializar una aplicación moderna con Express y TypeScript,
            integrando Prisma ORM para la gestión de bases de datos.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="hover:dark:bg-zinc-900 dark:bg-zinc-800 pt-6">
        <CardContent className="flex justify-center items-center w-full h-48">
          <img
            src={expressImg}
            className="rounded-md w-full h-full object-cover"
            alt="Express TypeScript"
          />
        </CardContent>
        <CardHeader className="pt-0">
          <CardTitle>Express TypeScript</CardTitle>
          <CardDescription>
            Inicializar una aplicación moderna con Express y TypeScript,
            integrando Prisma ORM para la gestión de bases de datos.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
export default Cards;
