import React from "react";
import PantheonSlider from "@/components/slider/PantheonSlider";

import pantheon_data from "@/assets/data/pantheon_data";
import bannerPantheon from "@/assets/images/banners/hall-of-fame.jpg";

export default function Pantheon() {
  return (
    <main>
      <Banner />
      <PantheonSlider data={pantheon_data} />
    </main>
  );
}

const Banner = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col px-4 pt-28 items-center bg-cover bg-center bg-no-repeat sm:px-10"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(13,1,13,1) 0%,rgba(255,153,153,0) 70%,rgba(0,0,0,1) 100%), url(${bannerPantheon.src})`,
      }}
    >
      <div
        className="flex-1 justify-center flex flex-col w-full uppercase text-white font-extrabold text-5xl sm:text-8xl"
        style={{ textShadow: "1px 1px 10px black" }}
      >
        Hall of Fame
        <div className="flex flex-row pt-8">
          <span
            className="font-normal text-[12px] transform rotate-180 text-center"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="scrolldown ml-3">
            <svg style={{ height: 30, width: 25, paddingLeft: 5 }}>
              <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
              <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
