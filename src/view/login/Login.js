// import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "../../components/button/Button";
// import config from "../../config.json";
import {useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        login: "",
        password: "",
        created_at: new Date(),
      });
      const [error, setError] = useState("");
      // eslint-disable-next-line
      const [success, setSuccess] = useState("");
      const changeHandler = (e) => {
 
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const Login = async () => {
    
        try {
        //   const res = await axios.post(
        //     config.SERVER_URL + "",
        //     customer
        //   );
        //   setSuccess(res.data.message);
        if (user.login==="admin") {
          localStorage.setItem('login', 'admin');
            navigate('/admin')
        }else if (user.login==="doctor"){
          localStorage.setItem('login', 'doctor');
            navigate('/doctor')
        }
        } catch (error) {
          if (error.response.status === 400) {
            setError(error.response.data.message);
          }
          console.log(error);
        }
      };
  return (
    <div className="py-4">
    <div className="mx-auto w-1/3  xl:pl-8 px-4 md:px-10 xl:px-0">
      <h1 className="w-full text-[30px] font-semibold pt-4 flex justify-center">
        Login
      </h1>{" "}
   
      <div
        className={`flex mt-8 justify-center items-center border w-full h-[60px] ${
          error
            ? "bg-red-100 text-red-600"
            : success
            ? "bg-green-200 text-green-600"
            : "border-none"
        }`}
      >
        <p className="inline text-center">{error ? error : success}</p>
      </div>
      <div className="">
        <form
          className={`xl:mt-[30px]`}
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="login"
            placeholder="Login"
            name="login"
            value={user.login}
            onChange={changeHandler}
          />
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="password"
            placeholder="Parol*"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </form>
      </div>
      <div className="mx-auto flex justify-center">
      <Button
        ButtonFunction={Login}
        name={"Kirish"}
        styles={`w-1/3 mt-[40px] mx-auto`}
      />
      </div>
    
    </div>
  </div>
  );
};

export default Login;
