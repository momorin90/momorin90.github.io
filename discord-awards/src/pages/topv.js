import React, { useState } from "react";
import SelectorButton from "@/components/buttons/SelectorButton";
import VisageWrapper from "@/components/results/VisageWrapper";
import ParticipantWrapper from "@/components/results/ParticipantWrapper";
import LienWrapper from "@/components/results/LienWrapper";

import top_data from "@/assets/data/top_data";
import ireneBanner from "@/assets/images/banners/irene.jpg";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Résultats");
  const currentSelection = 2022;

  const selectors = ["Résultats", "Participants", "Liens"];

  return (
    <main>
      <div
        className="flex min-h-screen w-full flex-col px-4 pt-28 items-center bg-cover bg-center bg-no-repeat sm:px-10"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(13,1,13,1) 0%,rgba(255,153,153,0) 70%,rgba(0,0,0,1) 100%), url(${top_data.visages.background.src})`,
        }}
      >
        <div
          className="flex-1 justify-center flex flex-col w-full uppercase text-white font-extrabold text-5xl sm:text-8xl"
          style={{ textShadow: "1px 1px 10px black" }}
        >
          Top 100
          <span className="mt-3 font-medium text-3xl sm:text-5xl">
            Visages de Kpop
          </span>
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
      <div className="flex w-full flex-col px-4 py-20 items-center bg-bg-color text-white sm:px-10 sm:py-28">
        <div className="flex flex-row mb-8 pb-8 max-w-full overflow-x-auto sm:overflow-x-visible sm:pb-0 sm:mb-20">
          {selectors.map((elt, index) => (
            <SelectorButton
              key={index}
              title={elt}
              active={activeCategory === elt}
              onClick={() => setActiveCategory(elt)}
            />
          ))}
        </div>
        {activeCategory === "Résultats" ? (
          <VisageWrapper
            items={top_data.visages.resultats[currentSelection]}
            year={currentSelection}
          />
        ) : activeCategory === "Participants" ? (
          <ParticipantWrapper
            items={top_data.visages.participants[currentSelection]}
          />
        ) : (
          <LienWrapper items={top_data.visages.liens[currentSelection]} />
        )}
      </div>
    </main>
  );
}
