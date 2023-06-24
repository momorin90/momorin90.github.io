import React from "react";
import Image from "next/image";

const PantheonWrapper = (props) => {
  const { data } = props;

  if (Object.keys(data).length === 0) return <div>Coming Soon</div>;
  return (
    <div className="flex flex-col w-full max-w-6xl py-0 px-2 sm:px-6">
      {data.map((elt) => (
        <Category key={elt.category} item={elt} />
      ))}
    </div>
  );
};

const Category = (props) => {
  const { item } = props;
  return (
    <div className="pb-12 last:pb-0">
      <div className="pb-2 border-b border-b-primary">
        <span className="max-w-md font-medium text-4xl uppercase text-primary sm:text-5xl">
          {item.category}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {item.results.map((elt, index) => (
          <Card key={index} item={elt} />
        ))}
      </div>
    </div>
  );
};

const Card = (props) => {
  const { item } = props;
  return (
    <div className="flex flex-col rounded-sm">
      <div className="w-full aspect-square relative">
        <Image fill src={item.img.src} alt="image" className="rounded-sm" />
      </div>
      <div
        className={`flex-auto px-4 pt-4 pb-6 ${
          item.type === "top" ? "bg-gray-900" : "bg-red-950"
        }`}
      >
        <p className="pb-4 font-bold text-primary uppercase">
          {item.winner}
          {item.value ? ` (${item.value})` : ""}
        </p>
        <p className="text-sm">{item.category}</p>
      </div>
    </div>
  );
};

export default PantheonWrapper;
