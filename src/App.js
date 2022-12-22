import React from "react";
import { Routes, Route } from "react-router-dom";
import { Submenu} from "./components/index";
import { Home, ProductListing, Profile, Wishlist, Cart } from "./pages";

import { Login, SignUp } from "./pages/AuthPages/";


import {
  useGetCategories,
  useGetWishlist,
  useGetCart,
  useGetUser,
} from "./hooks/";
import { useAuthContext } from "./context/AuthProvider";

import { PrivateRoute } from "./routes/PrivateRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const { userState } = useAuthContext();
  useGetCategories();
  useGetWishlist();
  useGetCart();
  useGetUser();

  return (
    <>
      <Submenu />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
