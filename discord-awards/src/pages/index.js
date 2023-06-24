import React, { useState } from "react";
import YearSlider from "@/components/slider/YearSlider";
import ResultSlider from "@/components/slider/ResultSlider";

import top_data from "@/assets/data/top_data";

export default function Home() {
  const [currentSelection, setCurrentSelection] = useState(2022);

  return (
    <main>
      <YearSlider
        data={top_data.filles.selection}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      <ResultSlider
        data={top_data.filles}
        currentSelection={currentSelection}
      />
    </main>
  );
}
