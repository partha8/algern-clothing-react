import axios from "axios";
import { API_URL } from "./constants";

export const updateWishlist = async (id, productsDispatch, toastHandler) => {
  const encodedToken = localStorage.getItem("algern-clothing-token");

  try {
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
      toastHandler(true, "wishlist updated!", "success");
    }
  } catch (error) {
    console.log(error);
    toastHandler(true, error.message, "error");
  }
};

export const updateCart = async (
  id,
  productsDispatch,
  toastHandler,
  actionType = null
) => {
  const encodedToken = localStorage.getItem("algern-clothing-token");

  try {
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
    toastHandler(true, "Cart updated!", "success");
  } catch (error) {
    console.error(error);
    toastHandler(true, error.message, "error");
  }
};
