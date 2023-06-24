import React, { useState } from "react";
import { Inter } from "next/font/google";
import YearSliderM from "@/components/slider/YearSliderM";
import ResultSlider from "@/components/slider/ResultSlider";

import top_data from "@/assets/data/top_data";

export default function Home() {
  const [currentSelection, setCurrentSelection] = useState(2022);

  return (
    <main>
      <YearSliderM
        data={top_data.garcons.selection}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      <ResultSlider
        data={top_data.garcons}
        currentSelection={currentSelection}
      />
    </main>
  );
}
