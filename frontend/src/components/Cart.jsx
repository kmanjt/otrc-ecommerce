import React from "react";
import logo from "../assets/oftc.jpg";

const Cart = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3  p-3 m-8 bg-stone-50 rounded-xl ">
          <div className="grid-rows-3">
            <div className="pb-2">
              <h3 className="text-3xl font-bold text-otrc-green">
                Shopping Cart
              </h3>
            </div>
            <hr></hr>
            <div className="">
              <div className="p-3 grid grid-cols-4">
                <div>
                  <img
                    src={logo}
                    alt="otrc logo"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="col-span-2">
                  <h2 className="text-2xl font-bold m-auto pt-2">Title</h2>
                </div>
                <div className="col-span-1">
                  <h2 className="text-2xl  m-auto pt-2">Price</h2>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <div>
          <div className="rounded-md bg-stone-50 m-8">
            <div className="p-3">
              <h2 className="text-xl ">Subtotal: </h2>
              <h2 className="text-xl bg-otrc-green p-2 rounded-md w-32 text-white font-semibold text-center m-4">
                Buy now
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
