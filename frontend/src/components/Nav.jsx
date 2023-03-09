import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
    return (
        <div>
            <div className="grid grid-cols-8 pl-16 text-left font-bold bg-otrc-green text-white p-4">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div className="col-span-6">
                    <Link to="/community">Community</Link>
                </div>
                <div className="">
                    <Link to="/shoppingcart">
                        <AiOutlineShoppingCart className="w-8 h-8" />
                    </Link>
                </div>
            </div>
            <div className="mx-auto pt-4">
                <img src="/oftc.jpg" alt="otrc logo" className="w-52 h-52 mx-auto rounded-full" />
            </div>

        </div>
    )
}

export default Nav;