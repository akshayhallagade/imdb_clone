import React from "react";
import { Play } from "../assets/icons/icons";

const PlayButton = () => {
  return (
    <button className="w-full border-2  px-2 py-1  text-white font-semibold flex items-center justify-center gap-2">
      <Play />
      Trailer
    </button>
  );
};

export default PlayButton;
