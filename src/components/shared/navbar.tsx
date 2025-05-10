import { Link } from "@tanstack/react-router";
import Options from "./options";
import { Code } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-8 md:px-5 flex justify-center">
      <div className="flex h-16 items-center justify-between lg:w-[900px] md:w-full">
        <Link to="/">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            <span className="text-blue-600 dark:text-blue-500">HubExec</span>
          </div>
        </Link>

        <Options />
      </div>
    </header>
  );
};

export default Navbar;
