import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import Location from "../Location/Location";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Location" element={<Location />}></Route>
      </Routes>
    </>
  );
};
