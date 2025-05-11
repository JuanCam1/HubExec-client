import { Link } from "@tanstack/react-router";
import Options from "./options";
import { Code } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 flex justify-center">
      <div className="flex h-16 items-center justify-between w-full">
        <Link to="/home/posts">
          <div className="flex items-center gap-2 font-bold text-2xl color-text">
            <Code className="h-6 w-6 " />
            <span>HubExec</span>
          </div>
        </Link>

        <Options />
      </div>
    </header>
  );
};

export default Navbar;
