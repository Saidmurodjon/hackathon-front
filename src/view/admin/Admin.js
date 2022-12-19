import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import History from "../../components/table/History";

const Admin = () => {
  const [patient, setPatient] = useState({
    passport: "",
    firstName: "",
    lastName: "",
    middleName: "",
    region: "",
    country: "",
    street: "",
    age: "",
    phone: "",
    history: [
      {
        id: 1,
        title: "Tish og'rig'i",
        doctor: "Aliyev Kamol",
        status: "Bajarildi",
        description:
          "ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh",
        date: "2021.11.23",
      },
      {
        id: 2,
        title: "Tish og'rig'i",
        doctor: "Aliyev Kamol",
        status: "Kutilmoqda",

        description:
          "ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh ahjsDBJ ASDJBASD ASJSDHAJS ASSJKJDFI ASdhunc SDUHASND Sadh",
        date: "2021.11.23",
      },
    ],
  });
  const [newHistory, setNewHistory] = useState({
    status: false,
    title: "",
    doctor: "",
    description: "",
    date: new Date(),
  });

  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(patient);
    // eslint-disable-next-line
  }, [patient.passport]);
  //   console.log(patient);
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 w-5/6 mx-auto mt-4">
            {/* <Button name={"Bemor qo'shish"}  styles={`right`}/> */}
            <form className="" action="" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-3">
                <div className="px-2">
                  <label
                    htmlFor={"passport"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Pasport
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id={"passport"}
                    type={"text"}
                    placeholder={"Pasport*"}
                    name={"passport"}
                    value={patient.passport}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"firstName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Ismi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="firstName"
                    type="text"
                    placeholder="Ismi*"
                    name="firstName"
                    value={patient.firstName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"lastName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Familiyasi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="lastName"
                    type="text"
                    placeholder="Familiya*"
                    name="lastName"
                    value={patient.lastName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"middleName"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Sharifi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="middleName"
                    type="text"
                    name="middleName"
                    placeholder="Sharifi*"
                    value={patient.middleName}
                    onChange={changeHandler}
                  />
                </div>

                <div className="px-2">
                  <label
                    htmlFor={"region"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Viloyat nomi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="region"
                    type="text"
                    name="region"
                    placeholder="Viloyat*"
                    value={patient.region}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"country"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Tuman nomi
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="country"
                    type="text"
                    name="country"
                    placeholder="Tuman nomi*"
                    value={patient.country}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"street"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Ko'cha/uy
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="street"
                    type="text"
                    name="street"
                    placeholder="Ko'cha/uy*"
                    value={patient.street}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"age"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Yosh
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="age"
                    type="text"
                    name="age"
                    placeholder="Yosh*"
                    value={patient.age}
                    onChange={changeHandler}
                  />
                </div>
                <div className="px-2">
                  <label
                    htmlFor={"phone"}
                    className=" cursor-pointer text-xl capitalize"
                  >
                    Telefon Raqam
                  </label>
                  <input
                    className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                    id="age"
                    type="text"
                    name="phone"
                    placeholder="+9989"
                    value={patient.phone}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-3 w-full">
            {newHistory.status ? (
              <></>
            ) : (
              <Button
                ButtonFunction={() =>
                  setNewHistory({ ...newHistory, status: true })
                }
                name={"Yangi varaqa"}
                styles={"mx-auto my-2"}
              />
            )}
            {patient.history.length > 0 ? (
              <History history={patient.history} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
