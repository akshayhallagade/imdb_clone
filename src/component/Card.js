import React from "react";
import InformationButton from "./InformationButton";
import PlayButton from "./PlayButton";
import WatchListButton from "./WatchListButton";

const Card = ({ info }) => {
  const poster_base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex justify-center flex-col bg-gray-800">
      <div className="relative w-full h-full ">
        <img
          className="w-full"
          src={poster_base_url + info.poster_path}
          alt="img"
        />
        <WatchListButton info={info} />
      </div>
      <div className="px-2 py-4">
        <p className="text-xl text-white font-semibold text-left ">
          {info.title}
        </p>
        <div className="flex items-center justify-center flex-col gap-4 mt-3">
          <InformationButton />
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
