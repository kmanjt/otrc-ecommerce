import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* This div may be moved to the nav component in future */}
      <div className="mx-auto pt-16">
        <img
          src="/oftc.jpg"
          alt="otrc logo"
          className="w-52 h-52 mx-auto rounded-full"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
