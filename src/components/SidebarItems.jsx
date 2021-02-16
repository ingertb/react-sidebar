import React from "react";
import * as IoIcons from "react-icons/io";

export const SidebarItems = [
  {
    name: "Home",
    path: "/",
    icon: <IoIcons.IoIosHome />,
    class: "nav-text",
  },
  {
    name: "Gallery",
    path: "/gallery",
    icon: <IoIcons.IoIosImages />,
    class: "nav-text",
  },
  {
    name: "Popular",
    path: "/popular",
    icon: <IoIcons.IoIosHeart />,
    class: "nav-text",
  },
  {
    name: "Support",
    path: "/support",
    icon: <IoIcons.IoIosInformationCircleOutline />,
    class: "nav-text",
  },
];
