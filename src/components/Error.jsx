import React from "react";
import { BiError } from "react-icons/bi";

export const Error = () => {
  return (
    <div className="mt-6 font-semibold flex flex-col items-center">
      <BiError className="text-5xl" />
      <p className="text-lg">Sorry, there is no data to show</p>
    </div>
  );
};
