import { ChevronsUpDown, LogOut, Settings } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "@tanstack/react-router";

const NavUser = () => {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();

  const logout = () => {
    navigate({
      to: "/",
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <Settings className="text-sidebar-foreground/70" />
              <span>Configuración</span>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="dark:bg-zinc-800 rounded-lg w-[--radix-dropdown-menu-trigger-width] max-w-40"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {/* <DropdownMenuGroup>
              <Link to="/">
                <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                  <BadgeCheck className="size-4" />
                  Cuenta
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link to="/">
                <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                  <BadgeCheck className="size-4" />
                  Opciones
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup> */}
            <button className="w-full" type="button" onClick={logout}>
              <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                <LogOut className="size-4" />
                Salir
              </DropdownMenuItem>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
