import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
const Navbar = () => {
const navigate=useNavigate()
  return (
    <div>
      {/* <Link to={`/login`}>Login</Link> */}

      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full sticky z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto w-[1200px]">
          <Link to="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2">
            <Button name={"Login"} ButtonFunction={()=>navigate("/login")} />
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
