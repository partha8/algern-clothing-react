import React, { createContext, useContext, useReducer, useState } from "react";
import { productReducer } from "../reducers/productReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const initialProductState = {
    cart: [],
    wishlist: [],
    productList: [],
  };

  const [{ cart, wishlist, productList }, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  return (
    <StateContext.Provider
      value={{
        showMenu,
        cart,
        wishlist,
        productList,

        setShowMenu,
        productDispatch,
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
