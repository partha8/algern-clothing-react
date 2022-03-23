import axios from "axios";
const encodedToken = localStorage.getItem("token");

export const removeFromWishlist = async (
  id,
  productsDispatch,
  toastHandler
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200) {
      productsDispatch({
        type: "SET_WISHLIST",
        payload: response.data.wishlist,
      });
      toastHandler(true, "Product removed from wishlist", "success");
    }
  } catch (error) {
    console.log(error);
    toastHandler(true, "Error while removing item to wishlist", "error");
  }
};

export const addToWishlist = async (
  product,
  productsDispatch,
  toastHandler,
  wishlist,
  productsList
) => {
  const itemIndex = wishlist.findIndex((item) => item._id === product._id);
  if (itemIndex === -1) {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        productsDispatch({
          type: "SET_WISHLIST",
          payload: response.data.wishlist,
        });
        toastHandler(true, "Product added to wishlist!", "success");
      }
    } catch (error) {
      console.log(error);
      toastHandler(true, "Error while adding item to wishlist", "error");
    }
  }
};

export const addToCart = () => {};
