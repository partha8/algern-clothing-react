import React, { createContext, useContext, useReducer, useState } from "react";

import { productsReducer } from "../reducers/productsReducer";
import { filterReducer } from "../reducers/filterReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  // for submenu, responsive navbar
  const [showMenu, setShowMenu] = useState(false);

  // initial states for product related states
  const initialProductState = {
    cart: [],
    wishlist: [],
    productsList: [],
    categories: [],
    order: [],
  };

  // inital filter states
  const initialFilterState = {
    sortByPrice: null,
    sortByCategory: null,
    productTypesArray: [],
    ratingInput: 5,
  };

  const [
    { cart, wishlist, productsList, categories, order },
    productsDispatch,
  ] = useReducer(productsReducer, initialProductState);

  const [
    { sortByPrice, sortByCategory, productTypesArray, ratingInput },
    filterDispatch,
  ] = useReducer(filterReducer, initialFilterState);

  return (
    <StateContext.Provider
      value={{
        showMenu,
        cart,
        wishlist,
        productsList,
        categories,
        order,

        sortByPrice,
        sortByCategory,
        productTypesArray,
        ratingInput,

        setShowMenu,
        productsDispatch,
        filterDispatch,
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
