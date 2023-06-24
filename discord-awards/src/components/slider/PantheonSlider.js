import React, { useState } from "react";
import SelectorButton from "@/components/buttons/SelectorButton";
import PantheonWrapper from "../results/PantheonWrapper";

const PantheonSlider = (props) => {
  const { data } = props;
  const [activeCategory, setActiveCategory] = useState("Filles");

  const selectors = ["Filles", "Garçons"];

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
      {activeCategory === "Filles" ? (
        <PantheonWrapper data={data.filles} />
      ) : (
        <PantheonWrapper data={data.garcons} />
      )}
    </div>
  );
};

export default PantheonSlider;
