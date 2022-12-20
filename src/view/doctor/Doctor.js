import PatientHistory from "../../components/table/PatientHistory";
import axios from "axios";
import data from "./patient.json";
import { useEffect } from "react";
import config from "../../config.json";
import Button from "../../components/button/Button";
import NewPatient from "../../components/newPatient/P";
import { FaPrint } from "react-icons/fa";
const Doctor = () => {
  var patient = data[0];
  useEffect(() => {
    async function GetDoctors() {
      try {
        const res = await axios.get(
          config.SERVER_URL + "/patient/whois?check=" + false
        );
        console.log(res);
        if (res.status === 200) {
          // setDoctors(res.data);
        }
      } catch (error) {
        if (error.response.status === 404) {
          // setDoctors();
        }
        console.log(error);
      }
    }
    GetDoctors();

    // eslint-disable-next-line
  }, []);
  console.log(patient);
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 w-full mx-auto ">
            <div className="">
              <FaPrint className="float-right text-3xl text-gray-700 cursor-pointer mr-4" />
              {/* <h1 className="mx-auto">Bemor ma'lumotlari</h1> */}
              <div className="grid grid-cols-3 mt-2">
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
                <div className="">
                  <h1 className="font-semibold text-xl">Telefon raqam:</h1>
                </div>
                <div className="col-span-2 font-medium text-xl">
                  {patient.phone}
                </div>
              </div>
            </div>

            <form
              className="my-4"
              action=""
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-3">
                <div className="px-2 col-span-3">
                  <label
                    htmlFor={"des"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Kassallik haqida
                  </label>
                  <textarea
                    className="w-full h-[146px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                    name="message"
                    placeholder="Tashxis*"
                    // value={contact.message}
                    // onChange={changeHandler}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"firstName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Dori nomi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="firstName"
                    type="text"
                    placeholder="Dori nomi*"
                    name="firstName"
                    // value={patient.firstName}
                    // onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"lastName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Miqdori
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="lastName"
                    type="text"
                    placeholder="Miqdori*"
                    name="lastName"
                    // value={patient.lastName}
                    // onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"middleName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Qabul qilish vaqti
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="middleName"
                    type="text"
                    name="middleName"
                    placeholder="2/3*"
                    // value={patient.middleName}
                    // onChange={changeHandler}
                  />
                </div>
                <div className=" col-span-3">
                  <Button name={"Dori qo'shish"} styles="float-right" />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"region"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Qayta ko'rik sanasi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="region"
                    type="text"
                    name="region"
                    placeholder="Sana*"
                    // value={patient.region}
                    // onChange={changeHandler}
                  />
                </div>
                <div className="px-2 mt-12 ">
                <Button name={"Saqlash"} styles="float-right w-full" />
                </div>
                <div className="px-2 mt-12">
                <Button name={"Yuqoriga Yo'naltirish"} styles="float-right hover:bg-transparent bg-red-700 text-white font-semibold hover:text-red-700 hover:border-red-700 border-red-700" />
                </div>
              </div>
            </form>
            <PatientHistory history={data[0].history} />
          </div>
          <div className="">
            {data.reverse().map((e, index) => (
              <NewPatient key={e.id} data={e} index={index + 1} />
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
