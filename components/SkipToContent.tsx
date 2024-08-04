"use client";
import React from "react";
import Button from "./clickable/Button";

type Props = {};

const SkipToContent = (props: Props) => {
  return (
    <div
      className={`absolute top-0 left-1/2 font-medium -translate-x-1/2 -translate-y-full focus-within:translate-y-4 z-50 transition-transform`}
    >
      <a href="#content">
        <Button variant="blue" tabIndex={-1}>
          Skip to content
        </Button>
      </a>
    </div>
  );
};

export default SkipToContent;
