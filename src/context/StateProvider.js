import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

import axios from "axios";
import { productsReducer } from "../reducers/productsReducer";
import { filterReducer } from "../reducers/filterReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const initialProductState = {
    cart: [],
    wishlist: [],
    productsList: [],
    categories: [],
  };

  const initialFilterState = {
    sortByPrice: null,
    sortByCategory: null,
    productTypesArray: [],
    ratingInput: 5,
  };

  const [{ cart, wishlist, productsList, categories }, productsDispatch] =
    useReducer(productsReducer, initialProductState);

  const [
    { sortByPrice, sortByCategory, productTypesArray, ratingInput },
    filterDispatch,
  ] = useReducer(filterReducer, initialFilterState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          productsDispatch({
            type: "SET_PRODUCTS",
            payload: { products: response.data.products, sortByCategory },
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [sortByCategory]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          productsDispatch({
            type: "SET_CATEGORIES",
            payload: response.data.categories,
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
        categories,

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
