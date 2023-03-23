import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Community from "./pages/Community";
import Nav from "./components/Nav";
import Login from "./components/login";
function App() {
  /*
  // set the favicon to the icon in the assets folder
  useEffect(() => {
    const link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = icon;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  // set the manifest to the manifest in the assets folder
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = "/manifest.json";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);*/

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
