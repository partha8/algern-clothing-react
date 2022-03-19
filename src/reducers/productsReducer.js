export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        productsList: [...action.payload],
      };
    }
    default:
      return state;
  }
};
