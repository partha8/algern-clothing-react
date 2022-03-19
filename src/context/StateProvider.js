import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

import axios from "axios";
import { productsReducer } from "../reducers/productsReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const initialProductState = {
    cart: [],
    wishlist: [],
    productsList: [],
  };

  const [{ cart, wishlist, productsList }, productsDispatch] = useReducer(
    productsReducer,
    initialProductState
  );

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      productsDispatch({
        type: "SET_PRODUCTS",
        payload: response.data.products,
      });
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        showMenu,
        cart,
        wishlist,
        productsList,

        setShowMenu,
        productsDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useStateContext };
