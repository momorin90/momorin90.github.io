import React, { useState } from "react";
//import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FilmIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const LienWrapper = (props) => {
  const { items } = props;

  return (
    <div className="w-full max-w-2xl py-0 px-2 sm:px-6">
      <div className="w-full">
        <table id="participant-table" className="w-full">
          <tbody>
            {items.map((elt) => (
              <tr key={elt.type}>
                <td className="font-semibold">{elt.type}</td>
                <td className="flex justify-end">
                  <a href={elt.link} target="_blank" rel="noopener noreferrer">
                    {elt.type === "Vidéo" ? (
                      <FilmIcon className="h-7 w-7 text-primary cursor-pointer" />
                    ) : (
                      <DocumentTextIcon className="h-7 w-7 text-primary cursor-pointer" />
                    )}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LienWrapper;
