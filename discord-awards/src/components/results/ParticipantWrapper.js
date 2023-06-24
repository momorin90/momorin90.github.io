import React, { useState } from "react";
//import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const ParticipantWrapper = (props) => {
  const { items } = props;

  return (
    <div className="w-full max-w-3xl py-0 px-2 sm:px-6">
      <div className="w-full">
        <table id="participant-table" className="w-full">
          <tbody>
            {items.map((elt) => (
              <tr key={elt.pseudo}>
                <td className="font-semibold">{elt.pseudo}</td>
                <td className="text-right text-primary [@media(max-width:350px)]:text-sm">
                  {elt.participations === 1
                    ? "New"
                    : `${elt.participations}e participation`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantWrapper;
