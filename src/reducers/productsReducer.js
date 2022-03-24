export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      const { products, sortByCategory } = action.payload;
      const newProductsList = products.filter(
        (product) => product.categoryName === sortByCategory
      );
      return {
        ...state,
        productsList: newProductsList,
      };
    }

    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: [...action.payload],
      };
    }

    case "SET_WISHLIST": {
      return {
        ...state,
        wishlist: action.payload,
      };
    }
    case "SET_CART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
};
