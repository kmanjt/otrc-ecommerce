import React, { useState, useEffect } from "react";
import { AiOutlineKey, AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/oftc.jpg";
import "../styles/login.css";

const Login = (props) => {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      {props.test2 && (
        <div className="relative  ">
          <div className=" backdrop-blur-sm bg-white/40 min-h-screen fixed top-0 left-0 w-full h-full flex justify-center items-center   z-50">
            <div className=" sm:bg-otrc-green/95 container shadow-xl w-full h-full sm:w-auto sm:h-1/2 md:w-auto md:h-1/2 xl:w-auto xl:h-1/2 mx-auto px-11 rounded-xl flex items-center justify-center flex-col ">
              <button
                className="absolute top-16 right-auto max-w-36 max-h-36 text-otrc-green bg-white/70 sm:text-white/75 text-8xl font-bold rounded-full sm:bg-white/50 flex items-center justify-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={props.vis}
              >
                {" "}
                <AiFillCloseCircle />{" "}
              </button>
              <div className="mx-auto relative">
                <img
                  src={logo}
                  alt="otrc logo"
                  className=" w-auto h-24  mx-auto rounded-full"
                />
              </div>
              <div className="container w-full flex flex-col ">
                <label
                  for="input-group-1"
                  class="block mb-2 text-base font-medium text-gray-900 sm:text-white"
                >
                  Email Address
                </label>
                <div class="relative mb-6">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@mail.com"
                  />
                </div>
                <label
                  for="input-group-1"
                  class="block mb-2 text-base font-medium text-gray-900 sm:text-white"
                >
                  Password
                </label>
                <div class="relative mb-6">
                  <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <AiOutlineKey className="w-6 h-7 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter password..."
                  />
                </div>
              </div>
              <button
                type="button"
                class="text-otrc-green   mt-4 bg-gradient-to-r bg-white hover:bg-white/50 hover:otrc-green/50 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-24 py-2.5 text-center "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
