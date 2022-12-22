import { useStateContext } from "../context/StateProvider";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../utils/constants";

export const useGetCategories = () => {
  const { productsDispatch } = useStateContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
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
};
