import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useStateContext } from "../context/StateProvider";
import { API_URL } from "../utils/constants";

export const useGetWishlist = () => {
  const { userState } = useAuthContext();
  const { productsDispatch } = useStateContext();

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (userState._id) {
      (async () => {
        try {
          const response = await axios.get(`${API_URL}/wishlist`, {
            headers: {
              authorization: encodedToken,
            },
          });
          if (response.status === 200) {
            productsDispatch({
              type: "SET_WISHLIST",
              payload: response.data.wishlist,
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      productsDispatch({ type: "SET_WISHLIST", payload: [] });
    }
  }, [userState._id]);
};
