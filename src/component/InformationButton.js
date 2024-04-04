import React from "react";
import { Info } from "../assets/icons/icons";

const InformationButton = () => {
  return (
    <button className="w-full px-2 py-1 bg-slate-600 text-blue-400 font-semibold flex items-center justify-center gap-2">
      Information
      <Info />
    </button>
  );
};

export default InformationButton;
