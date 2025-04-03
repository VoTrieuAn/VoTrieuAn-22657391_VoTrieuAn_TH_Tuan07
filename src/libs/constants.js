import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";

export const SIDEBAR_ITEMS = [
  {
    id: 1,
    title: "Dashboard",
    icon: MdOutlineDashboard,
    path: "/",
  },
  {
    id: 2,
    title: "Projects",
    icon: FaRegFolder,
    path: "/projects",
  },
  {
    id: 3,
    title: "Teams",
    icon: GrGroup,
    path: "/teams",
  },
  {
    id: 4,
    title: "Analytics",
    icon: BiPieChartAlt2,
    path: "/analytics",
  },
  {
    id: 5,
    title: "Messages",
    icon: BiMessageDetail,
    path: "/messages",
  },
  {
    id: 6,
    title: "Integrations",
    icon: IoMdCode,
    path: "/integrations",
  },
];
