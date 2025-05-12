import { useLocation, Link } from "@tanstack/react-router";

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
                className={` hover:bg-zinc-300 dark:hover:bg-zinc-800/90 cursor-pointer ${item.url.includes(location.pathname) && "bg-zinc-300 dark:bg-zinc-800/90"}`}
              >
                <item.icon className="text-zinc-800 dark:text-white" />
                <span
                  className={`font-medium text-zinc-800 dark:text-white ${location.pathname.includes(item.url) && "font-bold text-blue-500"}`}
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
