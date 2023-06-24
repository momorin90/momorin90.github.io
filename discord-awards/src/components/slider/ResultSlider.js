import React, { useState } from "react";
import SelectorButton from "@/components/buttons/SelectorButton";
import ResultWrapper from "../results/ResultWrapper";
import ParticipantWrapper from "../results/ParticipantWrapper";
import LienWrapper from "../results/LienWrapper";

const ResultSlider = (props) => {
  const { data, currentSelection } = props;
  const [activeCategory, setActiveCategory] = useState("Résultats");

  const selectors = ["Résultats", "Participants", "Liens"];

  return (
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
        <ResultWrapper
          items={data.resultats[currentSelection]}
          year={currentSelection}
        />
      ) : activeCategory === "Participants" ? (
        <ParticipantWrapper items={data.participants[currentSelection]} />
      ) : (
        <LienWrapper items={data.liens[currentSelection]} />
      )}
    </div>
  );
};

export default ResultSlider;
