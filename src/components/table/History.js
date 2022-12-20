import React from "react";
const History = ({ history }) => {
  return (
    <div className="">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 capitalize dark:bg-[#34495E] dark:text-white">
          <tr className="md:h-[60px] text-center divide-x divide-[#797979]">
            <th scope="col" className="px-6 w-[6%]">
              №
            </th>
            <th scope="col" className="px-6 w-1/5">
              Sarlavha
            </th>
            <th scope="col" className="px-6 w-1/5">
              Shifokor
            </th>
            <th scope="col" className="px-6 w-1/5">
              Holati
            </th>
            <th scope="col" className="px-6 w-1/5">
              Vaqt
            </th>
          </tr>
        </thead>
        <tbody className="text-xl ">
          {history.map((elem) => (
            <tr
              key={elem.id}
              className="bg-white dark:bg-white dark:border-gray-700 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[60px] text-center shadow border-b-inherit"
            >
              <td className="px-6">{elem.id}</td>
              <td className="px-6 break-words">{elem.title}</td>
              <td className="px-6">{elem.doctor}</td>
              <td className="px-6">{elem.check?<h1 className="text-green-700">Tugallangan</h1>:<h1 className="text-red-700">Tugallanmagan</h1>}</td>
              <td className="px-6">{elem.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
