import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import logo from "../assets/oftc.jpg";
import Login from "./login";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sideView, setSideView] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log("toggleVisibility", isVisible);
  };

  const toggleSideView = () => {
    setSideView(!sideView);
    console.log("togglesideview", sideView);
  };

  return (
    <div>
      <div className="pl-4 text-left font-bold bg-otrc-green text-white p-3">
        <div className=" lg:hidden ">
          <div className="flex">
            <button onClick={toggleSideView}>
              <AiOutlineMenu onClick={toggleSideView} className="w-8 h-8" />
            </button>

            <div className="flex justify-end space-x-4 w-[100%]">
              <div className="">
                <Link to="/shoppingcart">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </Link>
              </div>
              <div className="">
                <button onClick={toggleVisibility}>
                  <AiOutlineUser className="w-8 h-8" />
                </button>
                <Login vis={toggleVisibility} test2={isVisible} />
              </div>
            </div>
          </div>
          {sideView && (
            <div className="fixed text-black left-0 top-0  border-r w-[75%] h-full bg-white border-r-gray-200">
              <div className=" flex justify-end m-4">
                <button onClick={toggleSideView} className="p-0">
                  <AiOutlineClose className="w-8 h-8 " />
                </button>
              </div>
              <div className=" lg:w-[15%] pb-8 lg:h-[15%] w-32 h-32 p-4 mx-auto relative">
                <img src={logo} alt="otrc logo" className=" rounded-full" />
              </div>
              <Link onClick={toggleSideView} to="/">
                <div className="  p-4 text-center text-xl text-otrc-green border-b-2 ">
                  Home
                </div>
              </Link>
              <Link onClick={toggleSideView} to="/community">
                <div className="p-4 text-center text-xl text-otrc-green border-b-2 ">
                  Community
                </div>
              </Link>
              <Link onClick={toggleSideView} to="#">
                <div className="p-4 text-center text-xl text-otrc-green border-b-2 ">
                  Products
                </div>
              </Link>
              <div className="p-4 w-[75%] h-10 fixed bottom-0  bg-otrc-green"></div>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div className=" flex items-center ">
            <div className="flex  w-[100%] space-x-16 px-16">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div className="">
                <Link to="/community">Community</Link>
              </div>
              <div className="">
                <Link to="#">Products</Link>
              </div>
            </div>
            <div className="flex w-[100%] justify-end space-x-16 px-16 ">
              <div className="">
                <Link to="/shoppingcart">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </Link>
              </div>
              <div className="">
                <button onClick={toggleVisibility}>
                  <AiOutlineUser className="w-8 h-8" />
                </button>
                <Login vis={toggleVisibility} test2={isVisible} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!sideView && (
        <div className=" lg:w-56 lg:h-56 w-36 h-36 mx-auto p-4 relative">
          <img src={logo} alt="otrc logo" className=" mx-auto rounded-full" />
        </div>
      )}
    </div>
  );
};

export default Nav;
