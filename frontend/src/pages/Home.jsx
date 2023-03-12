import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setInventory(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      {/* Hero */}

      {/* Inventory */}
      <div className="grid grid-cols-4">
        {inventory?.map((product, i) => (
          <div className="col-span-1 p-3 m-8 bg-stone-50 rounded-xl">
            <div className="grid-rows-3">
              <div className="pb-2">
                <h3 className="text-3xl font-bold text-otrc-green">
                  {product.name}
                </h3>
                <h3 className="text-3xl font-bold text-otrc-green">
                  {product.price}
                </h3>
                <h3 className="text-3xl font-bold text-otrc-green">
                  {product.description}
                </h3>
                <h3 className="text-3xl font-bold text-otrc-green">
                  {product.quantity}
                </h3>
                <h3 className="text-3xl font-bold text-otrc-green">
                  {product.category}
                </h3>
                {product.product_images.map((image, i) => (
                  <img src={image.image} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
