"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

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
    <div className="bg-secondary h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <Link
        href={"/"}
        className="text-base bg-primary rounded-md p-1 font-semibold flex items-center justify-center"
      >
        <span className="text-white mr-1">bai</span>
        <span className="text-white w-12 h-8 rounded bg-secondary flex items-center justify-center">
          .io
        </span>
      </Link>
      {/* menu */}

      <div>
        <button
          className="z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={40} />
        </button>
      </div>
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-primary text-grayish flex flex-col items-center justify-center gap-8 text-4xl">
          {links?.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}{" "}
            </Link>
          ))}
          <Button className="bg-grayish text-primary hover:bg-grayish/60">
            Download Resume
          </Button>
        </div>
      )}

      {/* <div className="flex items-center gap-12">
        <ul className="flex items-center gap-6">
          <li>About</li>
          <li>Project</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <Button className="bg-grayish text-primary hover:bg-grayish/60">
          Download Resume
        </Button>
        
      </div> */}
    </div>
  );
};
