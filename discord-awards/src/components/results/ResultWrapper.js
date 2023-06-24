import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

const ResultWrapper = (props) => {
  const { items, year } = props;
  const [activeSelection, setActiveSelection] = useState(0);
  const [rankingDisplayed, setRankingDisplayed] = useState(false);

  const decrement = () => {
    if (activeSelection > 0) {
      setActiveSelection(activeSelection - 1);
    }
  };

  const increment = () => {
    if (activeSelection < items.length - 1) {
      setActiveSelection(activeSelection + 1);
    }
  };

  useEffect(() => {
    //reset selection
    setActiveSelection(0);
  }, [year]);

  if (!items[activeSelection]) return null;

  return (
    <div className="flex flex-col w-full max-w-5xl py-0 px-2 sm:px-6">
      <div className="flex flex-col justify-between items-end pb-2 border-b border-b-primary sm:flex-row">
        <span className="max-w-md font-medium text-5xl uppercase text-primary sm:text-7xl">
          {items[activeSelection].category}
        </span>
        <div className="flex flex-row items-center">
          {items.length > 1 && activeSelection > 0 && (
            <div onClick={decrement}>
              <ArrowLeftIcon className="h-9 w-9 text-primary mr-1 p-1 cursor-pointer" />
            </div>
          )}
          <span>{`${activeSelection + 1} of ${items.length}`}</span>
          {items.length > 1 && activeSelection < items.length - 1 && (
            <div onClick={increment}>
              <ArrowRightIcon className="h-9 w-9 text-primary ml-1 p-1 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col text-center pt-8 items-center sm:flex-row sm:text-left">
        <div className="w-52 h-52 relative">
          <Image
            fill
            src={items[activeSelection].img.src}
            alt="image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col mt-4 ml-0 sm:ml-8 sm:mt-0">
          <div className="font-semibold text-3xl text-primary uppercase">
            {items[activeSelection].winner_title}
          </div>
          {items[activeSelection].winner_artist && (
            <div className="text-xl">
              {items[activeSelection].winner_artist}
            </div>
          )}
          <div className="mt-4 text-gray-400">
            <p>
              {items[activeSelection].points} Points
              {items[activeSelection].average
                ? ` (${items[activeSelection].average})`
                : ""}
            </p>
            {items[activeSelection].submitter && (
              <p>Proposée par {items[activeSelection].submitter}</p>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex flex-row py-3 px-5 mt-12 items-center justify-between bg-gray-900 border border-primary rounded cursor-pointer"
        onClick={() => setRankingDisplayed(!rankingDisplayed)}
      >
        <span className="font-semibold text-primary text-lg uppercase">
          Classement
        </span>
        {rankingDisplayed ? (
          <MinusCircleIcon className="h-8 w-8 text-primary" />
        ) : (
          <PlusCircleIcon className="h-8 w-8 text-primary" />
        )}
      </div>
      {rankingDisplayed && (
        <div className="w-full py-4">
          {items[activeSelection].category === "Song of The Year" ? (
            <TableSOTY items={items} activeSelection={activeSelection} />
          ) : items[activeSelection].category === "Album of The Year" ? (
            <TableAlbum items={items} activeSelection={activeSelection} />
          ) : (
            <TableArtist items={items} activeSelection={activeSelection} />
          )}
        </div>
      )}
    </div>
  );
};

const TableSOTY = (props) => {
  const { items, activeSelection } = props;
  return (
    <Table id="result-table">
      <Thead className="bg-transparent">
        <Tr className="text-left">
          <Th>No.</Th>
          <Th>Titre</Th>
          <Th>Artiste</Th>
          <Th>{`Pts${
            items[activeSelection].notation === 10 ? " (Notation 10)" : ""
          }`}</Th>
          <Th>Proposée par</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items[activeSelection].ranking.map((elt, index) => (
          <Tr key={index}>
            <Td>{`${elt.rank}.`}</Td>
            <Td className="font-semibold">{elt.title}</Td>
            <Td>{elt.artist}</Td>
            <Td>{`${elt.points} Pts (${elt.average})`}</Td>
            <Td>
              <span className="flex flex-row items-center">
                {elt.submitter}
                {elt.cdc ? (
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" />
                ) : (
                  ""
                )}
              </span>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const TableArtist = (props) => {
  const { items, activeSelection } = props;
  return (
    <Table id="result-table">
      <Thead className="bg-transparent">
        <Tr className="text-left">
          <Th>No.</Th>
          <Th>Artiste</Th>
          <Th>Pts</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items[activeSelection].ranking.map((elt, index) => (
          <Tr key={index}>
            <Td>{`${elt.rank}.`}</Td>
            <Td className="font-semibold">{elt.artist}</Td>
            <Td>{`${elt.points} Pts`}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const TableAlbum = (props) => {
  const { items, activeSelection } = props;
  return (
    <Table id="result-table">
      <Thead className="bg-transparent">
        <Tr className="text-left">
          <Th>No.</Th>
          <Th>Album</Th>
          <Th>Artiste</Th>
          <Th>Pts</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items[activeSelection].ranking.map((elt, index) => (
          <Tr key={index}>
            <Td>{`${elt.rank}.`}</Td>
            <Td className="font-semibold">{elt.album}</Td>
            <Td>{elt.artist}</Td>
            <Td>{`${elt.points} Pts`}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ResultWrapper;
