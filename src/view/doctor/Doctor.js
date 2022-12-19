import React from "react";
import PatientHistory from "../../components/table/PatientHistory";

import data from "./patient.json";
const Doctor = () => {
  var patient = data[0];
  console.log(patient);
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 w-full mx-auto ">
            <div className="">
              <h1 className="mx-auto">Bemor ma'lumotlari</h1>
              <div className="grid grid-cols-3">
                <div className="">
                  <h1 className="font-semibold text-xl">FISH:</h1>
                </div>
                <div className="col-span-2 text-xl font-medium">
                  {patient.firstName +
                    " " +
                    patient.lastName +
                    " " +
                    patient.middleName}
                </div>
                <div className="font-semibold text-xl">
                  <h1>Manzili:</h1>
                </div>
                <div className="col-span-2 text-xl font-medium">
                  {patient.region +
                    " " +
                    patient.country +
                    " " +
                    patient.street}
                </div>
                <div className="">
                  <h1 className="font-semibold text-xl">Passport:</h1>
                </div>
                <div className="col-span-2 font-medium text-xl">
                  {patient.passport}
                </div>
              </div>
            </div>
            <PatientHistory history={data[0].history} />
          </div>
          <div className="">Yangi bemorlar uchun</div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
