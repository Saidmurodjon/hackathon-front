import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import History from "../../components/table/History";
import doctors from "./doctors.json";
import config from "../../config.json";
import axios from "axios";
const Admin = () => {
  const [patient, setPatient] = useState({
    historyCheck: false,
    id: "",
    passport: "",
    firstName: "",
    lastName: "",
    middleName: "",
    region: "",
    country: "",
    street: "",
    age: "",
    phone: "+998",
    history: [],
  });
  const [newHistory, setNewHistory] = useState({
    status: false,
    title: "",
    doctorType: "",
    doctor: "",
    description: "",
    date: new Date(),
  });

  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const changeHandlerHistory = async (e) => {
    await setNewHistory({ ...newHistory, [e.target.name]: e.target.value });
    setPatient({ ...patient, history: newHistory });
  };
  useEffect(() => {
    async function GetPassport() {
      try {
        const res = await axios.get(
          config.SERVER_URL +
            "/patient/passport?passport=" +
            patient.passport.toUpperCase()
        );

        if (res.status === 200) {
          setPatient({
            ...patient,
            historyCheck: true,
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            middleName: res.data.middleName,
            region: res.data.region,
            country: res.data.country,
            street: res.data.street,
            age: res.data.age,
            phone: res.data.phone,
            history: res.data.history,
          });
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    GetPassport();

    // eslint-disable-next-line
  }, [patient.passport]);
  console.log(newHistory);
  const Send = async () => {
    try {
      if (patient.historyCheck) {
        const res = await axios.put(config.SERVER_URL + "/patient", patient);
        console.log(res);
        if (res.status === 200) {
          alert("Bemor varaqasi yangilandi");
        }
      } else {
        const res = await axios.post(config.SERVER_URL + "/patient", patient);
        console.log(res);
        if (res.status === 201) {
          await alert("Bemor varaqasi ochildi");
          window.location.reload(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <div className="col-span-3 w-full border-t">
            {newHistory.status ? (
              <>
                <div className="w-5/6 mx-auto mt-4">
                  <form
                    className=""
                    action=""
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-3">
                      <div className="px-2">
                        <label
                          htmlFor={"title"}
                          className=" cursor-pointer text-xl capitalize"
                        >
                          Sarlavha
                        </label>
                        <input
                          className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                          id={"title"}
                          type={"text"}
                          placeholder={"Sarlavha*"}
                          name={"title"}
                          value={newHistory.title}
                          onChange={changeHandlerHistory}
                        />
                      </div>
                      <div className="px-2">
                        <label
                          htmlFor={"doctorType"}
                          className=" cursor-pointer text-xl capitalize"
                        >
                          Shifokor turi
                        </label>

                        <select
                          id="doctorType"
                          name="doctorType"
                          className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                          onChange={changeHandlerHistory}
                        >
                          <option selected>Kerakli bo'limni tanlang</option>
                          {doctors.map((e) => (
                            <option value={e.type}>{e.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="px-2">
                        <label
                          htmlFor={"doctorH"}
                          className=" cursor-pointer text-xl capitalize"
                        >
                          Shifokor
                        </label>

                        <select
                          id="doctorH"
                          name="doctor"
                          className="w-full h-[50px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 my-4"
                          onChange={changeHandlerHistory}
                        >
                          <option selected>Kerakli bo'limni tanlang</option>
                          {doctors.map((e) => (
                            <option value={e.type}>{e.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 col-span-3 text-xl my-2">
                        <div className="">
                          <h1>
                            {" "}
                            Shifokor xonasi:{" "}
                            <span className=" font-bold">{2}</span>
                          </h1>
                        </div>
                        <div className="">
                          <h1>
                            {" "}
                            Bemor navbati:{" "}
                            <span className=" font-bold">{4}</span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <Button
                  ButtonFunction={Send}
                  name={"Bemor qo'shish"}
                  styles={`float-right`}
                />
              </>
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
