"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  link: any;
};

export const NavLink = ({ link }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={`rounded p-2 ${
        pathname === link.url && "bg-primary text-grayish"
      }`}
    >
      {link.title}
    </Link>
  );
};
