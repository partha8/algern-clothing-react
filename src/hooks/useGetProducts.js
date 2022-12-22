import { useStateContext } from "../context/StateProvider";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../utils/constants";

export const useGetProducts = () => {
  const { productsDispatch, sortByCategory } = useStateContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
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
};
