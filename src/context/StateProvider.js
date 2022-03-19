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
    (async () => {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          productsDispatch({
            type: "SET_PRODUCTS",
            payload: response.data.products,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
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
