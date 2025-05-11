import { useNavigate, useLocation, Link } from "@tanstack/react-router";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { pathsSidebar } from "./paths-sidebar";

const NavMain = () => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <Separator />
      <SidebarMenu>
        {pathsSidebar.map((item) => (
          <SidebarMenuItem className="mt-2" key={item.title}>
            <Link to={item.url}>
              <SidebarMenuButton
                className={`text-sidebar-foreground/70  cursor-pointer ${item.url.includes(location.pathname) && "bg-zinc-800/80"}`}
              >
                <item.icon className="text-sidebar-foreground/70" />
                <span
                  className={`font-medium text-zinc-600 dark:text-white ${location.pathname.includes(item.url) && "font-bold text-blue-500"}`}
                >
                  {item.title}
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
