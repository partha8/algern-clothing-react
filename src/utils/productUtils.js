import axios from "axios";
let encodedToken = localStorage.getItem("token");

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
  wishlist
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
  } else {
    removeFromWishlist(product._id, productsDispatch, toastHandler);
  }
};

export const addToCart = async (
  product,
  productsDispatch,
  toastHandler,
  cart
) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 201) {
      console.log(response.data.cart);
      productsDispatch({ type: "SET_CART", payload: response.data.cart });
      toastHandler(true, "Product added to cart!", "success");
    }
  } catch (error) {
    console.log(error);
    toastHandler(true, "Error while adding to cart", "error");
  }
};

export const removeFromCart = async (id, productsDispatch, toastHandler) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200) {
      productsDispatch({
        type: "SET_CART",
        payload: response.data.cart,
      });
      toastHandler(true, "Product removed from cart", "success");
    }
  } catch (error) {
    console.log(error);
    toastHandler(true, "Error while removing item to cart", "error");
  }
};

export const increaseQty = async (id, productsDispatch, toastHandler) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      productsDispatch({
        type: "SET_CART",
        payload: response.data.cart,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const decreaseQty = async (id, productsDispatch, toastHandler, qty) => {
  if (qty === 1) {
    toastHandler(true, "can't go below 1", "error");
    return;
  }
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      productsDispatch({
        type: "SET_CART",
        payload: response.data.cart,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
