import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Submenu, Toast } from "./components/index";
import { Home, ProductListing, Profile, Wishlist, Cart } from "./pages";

import { Login, SignUp } from "./pages/AuthPages/";

import { useStateContext } from "./context/StateProvider";

import {
  useGetCategories,
  useGetProducts,
  useGetWishlist,
  useGetCart,
  useSignup,
} from "./hooks/";
import { useAuthContext } from "./context/AuthProvider";

import { PrivateRoute } from "./routes/PrivateRoute";

import { API_URL } from "./utils/constants";
import axios from "axios";

export const App = () => {
  const { toast } = useStateContext();
  const { userState, authDispatch } = useAuthContext();
  // useGetProducts();
  useGetCategories();
  useGetWishlist();
  useGetCart();
  // useSignup();

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      (async () => {
        try {
          const res = await axios.get(`${API_URL}/user`, {
            headers: {
              authorization: encodedToken,
            },
          });

          authDispatch({
            type: "HANDLE_USER",
            payload: {
              user: res.data.foundUser,
              encodedToken: res.data.encodedToken,
            },
          });
        } catch (error) {}
      })();
    }
  }, []);
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
