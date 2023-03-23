import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import logo from "../assets/oftc.jpg";
import Login from "./login";

const Nav = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log("toggleVisibility", isVisible);
  };

  return (
    <div>
      <div className="grid grid-cols-8 pl-16 text-left font-bold bg-otrc-green text-white p-4">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="col-span-5">
          <Link to="/community">Community</Link>
        </div>
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
      <div className="mx-auto pt-4 relative">
        <img
          src={logo}
          alt="otrc logo"
          className="w-52 h-52 mx-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Nav;
