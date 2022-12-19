import { useEffect, useState } from "react";
import Button from "../../components/button/Button";

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
    history: [],
  });
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
console.log(patient);
  },[patient.passport])
//   console.log(patient);
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 w-5/6 mx-auto">
            <h1 className="mx-auto">Bemor qo'shish</h1>
            {/* <Button name={"Bemor qo'shish"}  styles={`right`}/> */}
            <form className="" action="" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2"
                type="text"
                placeholder="passport*"
                name="passport"
                value={patient.passport}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                placeholder="Ismi*"
                name="firstName"
                value={patient.firstName}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                placeholder="Familiya*"
                name="lastName"
                value={patient.lastName}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="middleName"
                placeholder="O*"
                value={patient.middleName}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="region"
                placeholder="region*"
                value={patient.region}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="country"
                placeholder="country*"
                value={patient.country}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="street"
                placeholder="street*"
                value={patient.street}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="age"
                placeholder="age*"
                value={patient.age}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="phone"
                placeholder="phone*"
                value={patient.phone}
                onChange={changeHandler}
              />
              <input
                className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
                type="text"
                name="tel"
                placeholder="tel*"
                value={patient.tel}
                onChange={changeHandler}
              />
            </form>
            <Button
              // ButtonFunction={type === "order" ? SendOrder : SendContact}
              name={"Bemor qo'shish"}
            />
          </div>
          <div className="">05</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
