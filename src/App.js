import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Submenu } from "./components/index";
import { Home } from "./pages";

// import { ForgotPassword, Login, SignUp } from "./pages/AuthPages/";

export const App = () => {
  return (
    <>
      <Router>
        <Submenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} /> */}
        </Routes>
      </Router>
    </>
  );
};
