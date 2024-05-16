"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DoorClosed, Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";

type Props = {};

const links = [
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/project",
    title: "Project",
  },
  {
    url: "/experience",
    title: "Experience",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

export const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-secondary h-full flex items-center  justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ${
        open ? "border-b border-b-red-500" : "border-b-red-400"
      }`}
    >
      <Link
        href={"/"}
        className="z-50 text-base bg-primary rounded-md p-1 font-semibold flex items-center justify-center"
      >
        <span className="text-white mr-1">bai</span>
        <span className="text-white w-12 h-8 rounded bg-secondary flex items-center justify-center">
          .io
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-12">
        <div className="flex items-center gap-6">
          {links?.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        <Button className="bg-grayish text-primary hover:bg-grayish/60">
          Download Resume
        </Button>
      </div>

      {/*mobile  menu */}
      <button
        className="z-50 relative md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={40} /> : <Menu size={40} />}
      </button>

      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-primary text-grayish flex flex-col items-center justify-center gap-4 text-4xl">
          {links?.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
          <Button className="bg-grayish text-primary hover:bg-grayish/60">
            Download Resume
          </Button>
        </div>
      )}
    </div>
  );
};
