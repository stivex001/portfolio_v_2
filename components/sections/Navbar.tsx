import React from "react";
import { Button } from "../ui/button";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="w-full bg-secondary py-10  ">
      <div className="w-5/6 mx-auto flex items-center justify-between ">
        <div>
          <p> SS </p>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-6">
            <li>About</li>
            <li>Project</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
          <Button className="bg-grayish text-primary hover:bg-grayish/60">Download Resume</Button>
          {/* <button className="h-9 px-3 flex items-center justify-center bg-grayish">Resume</button> */}
        </div>
      </div>
    </div>
  );
};
