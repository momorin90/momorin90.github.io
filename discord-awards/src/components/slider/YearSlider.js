import React, { useState } from "react";
import Slider from "react-slick";

const YearSlider = (props) => {
  const { data, currentSelection, setCurrentSelection } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="flex min-h-screen w-full flex-col px-4 pt-28 items-center bg-cover bg-center bg-no-repeat sm:px-10"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(13,1,13,1) 0%,rgba(255,153,153,0) 70%,rgba(0,0,0,1) 100%), url(${
          data.filter((e) => e.year === currentSelection)[0].background.src
        })`,
      }}
    >
      <div
        className="flex-1 justify-center flex flex-col w-full uppercase text-white font-extrabold text-5xl sm:text-8xl"
        style={{ textShadow: "1px 1px 10px black" }}
      >
        Top Kpop
        <span className="mt-3 font-medium text-3xl sm:text-5xl">{`édition ${currentSelection}`}</span>
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
      <div className="mb-4 max-w-full sm:mb-10">
        <div className="hidden sm:block">
          <Slider {...settings}>
            {data.map((item) => (
              <YearSelector
                key={item.year}
                item={item}
                currentSelection={currentSelection}
                setCurrentSelection={setCurrentSelection}
              />
            ))}
          </Slider>
        </div>
        <div className="flex flex-row overflow-x-scroll pb-8 sm:hidden">
          {data.map((item) => (
            <YearSelector
              key={item.year}
              item={item}
              currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const YearSelector = (props) => {
  const { item, currentSelection, setCurrentSelection } = props;

  const onSelected = () => {
    setCurrentSelection(item.year);
  };

  return (
    <div className="flex flex-col items-center mr-8">
      <div
        className={`w-40 h-40 rounded-full items-center bg-cover bg-center bg-no-repeat cursor-pointer ${
          currentSelection === item.year ? "border-8 border-primary" : ""
        } sm:w-60 sm:h-60`}
        style={{
          backgroundImage: `url(${item.thumbnail.src})`,
        }}
        onClick={onSelected}
      ></div>
      <span className="mt-5 font-semibold text-2xl text-white">
        {item.year}
      </span>
    </div>
  );
};

export default YearSlider;
