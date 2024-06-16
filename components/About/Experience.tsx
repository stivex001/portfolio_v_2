import React from "react";

type Props = {};

export const MyExperience = (props: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="uppercase text-white font-bold text-2xl">Experience</h1>
      <div className="flex justify-between h-48">
        <div className="w-1/3 flex flex-col bg-red-500">
          <h1>Junior Frontend Developer</h1>
          <p>stilll</p>
          <span>2024 - Present</span>
          <span>Emplug</span>
        </div>
        <div className="w-1/6 bg-yellow-500 ">
          <div>
            <div>dgyg</div>
          </div>
        </div>
        <div className="bg-blue-500 w-1/3">sdyf</div>
      </div>
    </div>
  );
};
