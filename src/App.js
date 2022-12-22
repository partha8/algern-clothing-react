import React from "react";
import { Routes, Route } from "react-router-dom";
import { Submenu, Toast } from "./components/index";
import { Home, ProductListing, Profile, Wishlist, Cart } from "./pages";

import { Login, SignUp } from "./pages/AuthPages/";

import { useStateContext } from "./context/StateProvider";

import {
  useGetCategories,
  useGetWishlist,
  useGetCart,
  useGetUser,
} from "./hooks/";
import { useAuthContext } from "./context/AuthProvider";

import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  const { toast } = useStateContext();
  const { userState } = useAuthContext();
  useGetCategories();
  useGetWishlist();
  useGetCart();
  useGetUser();

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
