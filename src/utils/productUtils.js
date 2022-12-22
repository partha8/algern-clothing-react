import axios from "axios";
import { API_URL } from "./constants";
import { toast } from "react-toastify";

export const updateWishlist = async (id, productsDispatch) => {
  const encodedToken = localStorage.getItem("algern-clothing-token");

  try {
    toast.info("Updating wishlist...");
    const response = await axios.post(
      `${API_URL}/wishlist`,
      {
        _id: id,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      productsDispatch({
        type: "SET_WISHLIST",
        payload: response.data.wishlist,
      });
      toast.success("Wishlist updated!");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const updateCart = async (id, productsDispatch, actionType = null) => {
  const encodedToken = localStorage.getItem("algern-clothing-token");

  try {
    toast.info("Updating cart...");
    const response = await axios.post(
      `${API_URL}/cart`,
      {
        _id: id,
        action: !actionType
          ? null
          : {
              type: actionType,
            },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    productsDispatch({ type: "SET_CART", payload: response.data.cart });
    toast.success("Cart updated!");
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};
