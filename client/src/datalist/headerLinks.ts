import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";

export const links = [
  {
    name: 'Home',
    path: '/',
    icon: React.createElement(BiSolidHome)
  },
  {
    name: "Note",
    path: "/note",
    icon: React.createElement(CgDanger)
  },
  {
    name: 'About',
    path: '/about',
    icon: React.createElement(FcAbout)
  }
] as const;