import React from "react";
import patient from "../../view/doctor/patient.json";
import Button from "../button/Button";
const Table = () => {
  return (
    <div className="">
      <table className="inline w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:bg-[#34495E] dark:text-white">
          <tr className="md:h-[60px] text-center divide-x divide-[#797979]">
            <th scope="col" className="px-6 w-1/4">
              {"Sarlavha"}
            </th>
            <th scope="col" className="px-6 w-1/4">
              {"Sarlavha"}
            </th>
            <th scope="col" className="px-6 w-1/4">
              {"Sarlavha"}
            </th>
            <th scope="col" className="px-6">
              {/* <span className="sr-only">Edit</span> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {patient.map((elem) => (
            <tr
              key={elem.id}
              className="bg-white dark:bg-white dark:border-gray-700 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[60px] text-center"
            >
              <td className="px-6">{elem.firstName}</td>
              <td className="px-6">{elem.lastName}</td>
              <td className="px-6">{elem.passport}</td>
              <td className="px-6">
                <Button
                  // ButtonFunction={Order}
                  name={"change"}
                  styles={""}
                  // elem={elem}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
