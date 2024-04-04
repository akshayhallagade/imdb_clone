import React from "react";

import InformationButton from "./InformationButton";
import PlayButton from "./PlayButton";
import WatchListButton from "./WatchListButton";

const WatchListCard = ({ info }) => {
  const poster_base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex w-full p-2 border-2">
      <div className="relative w-1/3">
        <img
          className="w-full"
          src={poster_base_url + info.backdrop_path}
          alt="img"
        />
        <WatchListButton />
      </div>
      <div className="p-2 border-2 text-left w-2/3">
        <h1 className="text-4xl">{info.title}</h1>
        <p>{info.overview}</p>
        <div className="flex w-72  items-center gap-4 justify-center mt-3">
          <InformationButton />
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
