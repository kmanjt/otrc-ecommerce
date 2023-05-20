import React, { useState } from "react";
// import logo from "../assets/oftc.jpg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div>
      <div className="lg:hidden">
        <div className="grid grid-cols-4 ">
          <div className="col-span-4  bg-stone-50 rounded-xl w-[100%] ">
            <div className="grid-rows-3">
              <div className="pb-2 flex justify-center">
                <h3 className="text-xl  font-bold text-otrc-green">
                  Shopping Cart
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <table className=" w-[100%]  ">
          <tr className="grid grid-cols-4">
            <th className="col-span-2 ">
              <h2 className="text-sm font-bold ">Product</h2>
            </th>
            <th className="col-span-1">
              <h2 className="text-sm font-bold ">Quantity</h2>
            </th>
            <th className="col-span-1">
              <div>
                <h2 className="text-sm font-bold">Subtotal</h2>
              </div>
            </th>
          </tr>
          <hr></hr>

          <tr className="grid grid-cols-4 text-center mt-4 ">
            <td className="col-span-2  ">
              <div className="flex justify-center ">
                <div className="w-28 h-28 ">
                  <img src="oftc.jpg" className="rounded-3xl" alt="" />
                </div>
                <div className="text-sm ml-3">
                  <p className=" font-bold whitespace-nowrap ">
                    title of product
                  </p>
                  <p className="  ">
                    Price: <span className=" ">$15</span>
                  </p>
                  <a className="text-red-500 font-bold" href="#">
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td className="col-span-1">
              <div className="">
                <input
                  className="w-10 h-8 text-center border-2 border-gray-300 rounded-md"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </td>
            <td className="col-span-1 mt-1">
              <div className="">
                <p className="text-2xl font-semibold">$15</p>
              </div>
            </td>
          </tr>
        </table>
        <hr />
        <div className="rounded-md bg-stone-50 mt-5">
          <div className="p-3 flex-col space-y-3">
            <h2 className="text-xl ">
              Total: <span> $15</span>
            </h2>
            <button>
              <h2 className="text-md bg-otrc-green p-2 rounded-md w-20 text-white font-semibold text-center">
                Buy now
              </h2>
            </button>
          </div>
        </div>
      </div>

      {/* large screens */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 ">
          <div className="col-span-3  p-3 m-8 bg-stone-50 rounded-xl ">
            <div className="grid-rows-3">
              <div className="pb-2">
                <h3 className="text-3xl font-bold text-otrc-green">
                  Shopping Cart
                </h3>
              </div>
              <hr></hr>

              <table className=" w-[100%] ">
                <tr className="grid grid-cols-5 p-3">
                  <th className="col-span-2 ">
                    <div>
                      <h2 className="text-2xl font-bold ">Product</h2>
                    </div>
                  </th>

                  <th className="col-span-1">
                    <div>
                      <h2 className="text-2xl font-bold ">Title</h2>
                    </div>
                  </th>
                  <th className="col-span-1">
                    <div className="">
                      <h2 className="text-2xl font-bold ">Quantity</h2>
                    </div>
                  </th>
                  <th className="col-span-1">
                    <div>
                      <h2 className="text-2xl font-bold">Subtotal</h2>
                    </div>
                  </th>
                </tr>
                <hr></hr>
                <tr className="grid grid-cols-5 text-center mt-4 ">
                  <td className="col-span-2  ">
                    <div className="flex justify-center ">
                      <div className="w-32 h-32 ">
                        <img src="oftc.jpg" className="rounded-3xl" alt="" />
                      </div>
                      <div className="ml-2 mt-5">
                        <p className=" font-serif text-36 font-bold ">
                          Price: <span className="text-xl ">$15</span>
                        </p>
                        <a className="text-red-500 font-bold" href="#">
                          Remove
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="col-span-1 ">
                    <div className="">
                      <p className="text-xl font-semibold">
                        Example heading with pretty name !!!
                      </p>
                    </div>
                  </td>
                  <td className="col-span-1">
                    <div className="">
                      <input
                        className="w-16 h-10 text-center border-2 border-gray-300 rounded-md"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                    </div>
                  </td>
                  <td className="col-span-1 mt-7">
                    <div className="">
                      <p className="text-2xl font-semibold">$15</p>
                    </div>
                  </td>
                </tr>
              </table>
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
    </div>
  );
};

export default Cart;
