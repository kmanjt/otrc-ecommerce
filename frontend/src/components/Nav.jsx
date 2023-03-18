import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/oftc.jpg";
import "./NavStyles.css";

const Nav = () => {
  return (
    <nav>

        <a href="/">
        <img
          src={logo}
          alt="otrc logo"
          className="w-16 h-16 rounded-full"
        />
        </a>



        {/* <div>
          <Link to="/">Home</Link>
        </div>
        <div className="col-span-6">
          <Link to="/community">Community</Link>
        </div>
        <div className="">
          <Link to="/shoppingcart">
            <AiOutlineShoppingCart className="w-8 h-8" />
          </Link>
        </div> */}
        <div>
          <ul id="nav">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/community">Community</a>
            </li>

            <li>
              <a href="/shoppingcart">Cart</a>
            </li>

          </ul>

        </div>



        <div id="mobile">
          <i className="fas fa-bars"></i>
        </div>




        {/* <div className="mx-auto pt-4">
          <img
            src={logo}
            alt="otrc logo"
            className="w-52 h-52 mx-auto rounded-full"
          />              

        </div> */}    
    </nav>
  );
};

export default Nav;
