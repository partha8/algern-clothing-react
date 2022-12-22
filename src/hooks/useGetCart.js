import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useStateContext } from "../context/StateProvider";
import { API_URL } from "../utils/constants";

export const useGetCart = () => {
  const { userState } = useAuthContext();
  const { productsDispatch } = useStateContext();
  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (userState._id) {
      (async () => {
        try {
          const response = await axios.get(`${API_URL}/cart`, {
            headers: {
              authorization: encodedToken,
            },
          });
          if (response.status === 200 || response.status === 201) {
            productsDispatch({
              type: "SET_CART",
              payload: response.data.cart,
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      productsDispatch({ type: "SET_CART", payload: [] });
    }
  }, [userState._id]);
};
