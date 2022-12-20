import React from "react";

const NewPatient = ({ data,index }) => {
  console.log(data);
  return (
    <div>
      <div className="w-[95%] bg-slate-100 m-2 p-2 rounded-xl shadow-md">
        <div className="grid grid-cols-10">
          <div className="col-span-1">{index}</div>
          <div className="col-span-9">
            <h1 className="inline font-semibold">
              {data.firstName + " " + data.lastName},
            </h1>
            <h1 className="inline font-semibold right">
              &nbsp;{data.passport},
            </h1>{" "}
            <h1 className="inline font-semibold right">&nbsp; {data.phone}</h1>
            <br />
            <h1 className="inline font-semibold">{data.history[0].title},</h1>
            <h1 className="inline float-right font-semibold">
              {data.history[0].date},
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPatient;
