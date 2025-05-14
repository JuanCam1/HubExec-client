import { Users, LayoutDashboard, Upload, Download } from "lucide-react";

export const pathsSidebar = [
  {
    title: "Publicaciones",
    icon: LayoutDashboard,
    url: "/home/post",
  },
  {
    title: "Perfil",
    icon: Users,
    url: "/home/profile",
  },

  {
    title: "Upload",
    icon: Upload,
    url: "/home/upload",
  },
  {
    title: "Download",
    icon: Download,
    url: "/home/download",
  },
];
