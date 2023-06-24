import React, { useState } from "react";

const SelectorButton = (props) => {
  const { active, title, onClick } = props;
  return (
    <div
      className={`px-4 py-3 bg-transparent border-2 font-semibold uppercase text-sm text-center cursor-pointer rounded-full ml-4 first:ml-0 ${
        active ? "border-primary text-primary" : "border-white text-white"
      } sm:text-base sm:px-6 sm:py-4`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SelectorButton;
