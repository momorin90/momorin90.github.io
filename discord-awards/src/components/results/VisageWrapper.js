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

const VisageWrapper = (props) => {
  const { items, year } = props;
  const activeSelection = 0;
  const [rankingDisplayed, setRankingDisplayed] = useState(false);

  if (!items[activeSelection]) return null;

  return (
    <div className="flex flex-col w-full max-w-5xl py-0 px-2 sm:px-6">
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
            {items[activeSelection].winner_artist}
          </div>
          {items[activeSelection].winner_group && (
            <div className="text-xl">{items[activeSelection].winner_group}</div>
          )}
          <div className="mt-4 text-gray-400">
            <p>
              {items[activeSelection].average
                ? `Position moy. : ${items[activeSelection].average}`
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
          <TableVisage items={items} activeSelection={activeSelection} />
        </div>
      )}
    </div>
  );
};

const TableVisage = (props) => {
  const { items, activeSelection } = props;
  return (
    <Table id="result-table">
      <Thead className="bg-transparent">
        <Tr className="text-left">
          <Th>No.</Th>
          <Th>Idole</Th>
          <Th>Group</Th>
          <Th>Pos. moy.</Th>
          <Th>Pos. min</Th>
          <Th>Pos. max</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items[activeSelection].ranking.map((elt, index) => (
          <Tr key={index}>
            <Td>{`${elt.rank}.`}</Td>
            <Td className="font-semibold">{elt.artist}</Td>
            <Td>{elt.group}</Td>
            <Td>{elt.avg}</Td>
            <Td>{elt.min}</Td>
            <Td>{elt.max}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default VisageWrapper;
