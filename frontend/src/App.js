import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Community from "./pages/Community";
import Nav from "./components/Nav";
import Registration from "./pages/registration";
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
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
