import React from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import data from "./patient.json";
const Doctor = () => {
  var patient = data[0];
  console.log(patient);
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 w-5/6 mx-auto ">
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
                <div className="col-span-2 font-medium text-xl">{patient.passport}</div>
              </div>
            </div>
            {/* <Button name={"Bemor qo'shish"}  styles={`right`}/> */}

            <Button
              name={"Yuborish"}
            />
          </div>
          <div className="">05</div>
        </div>
        {/* Table uchun */}
        <Table />
      </div>
    </div>
  );
};

export default Doctor;
