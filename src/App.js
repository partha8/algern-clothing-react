import React from "react";
import { Routes, Route } from "react-router-dom";
import { Submenu, Toast } from "./components/index";
import { Home, ProductListing, Profile, Wishlist } from "./pages";
import Mockman from "mockman-js";

import { Login, SignUp } from "./pages/AuthPages/";

import { useStateContext } from "./context/StateProvider";

import { useGetCategories, useGetProducts } from "./hooks/";
import { useAuthContext } from "./context/AuthProvider";

import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  const { toast } = useStateContext();
  const { userState } = useAuthContext();
  useGetProducts();
  useGetCategories();
  return (
    <>
      <Submenu />
      {toast.showToast && <Toast />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-listing" element={<ProductListing />} />

        {userState._id ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        {/* <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} /> */}
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
};
