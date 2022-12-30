import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageLoader, Submenu } from "./components/index";
import {
  Home,
  ProductListing,
  Profile,
  Wishlist,
  Cart,
  Address,
  SuccessfulPayment,
  DeclinedPayment,
} from "./pages";

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
import { useStateContext } from "./context/StateProvider";

export const App = () => {
  const { userState } = useAuthContext();
  const { categories } = useStateContext();
  useGetCategories();
  useGetWishlist();
  useGetCart();
  useGetUser();

  const encodedToken = localStorage.getItem("algern-clothing-token");

  if (!categories.length || (encodedToken && !userState._id)) {
    return <PageLoader />;
  }

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

        <Route
          path="/buy/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        />

        <Route
          path="/success"
          element={
            <PrivateRoute>
              <SuccessfulPayment />
            </PrivateRoute>
          }
        />

        <Route
          path="/declined"
          element={
            <PrivateRoute>
              <DeclinedPayment />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
