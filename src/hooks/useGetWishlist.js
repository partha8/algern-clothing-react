
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useStateContext } from "../context/StateProvider";

const encodedToken = localStorage.getItem("token");

export const useGetWishlist = () => {
  const { userState } = useAuthContext();
  const { productsDispatch } = useStateContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
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
  }, [userState._id]);
};
