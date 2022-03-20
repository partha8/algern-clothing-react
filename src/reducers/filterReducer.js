export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortByPrice: action.payload,
      };

    case "SORT_BY_CATEGORY": {
      return {
        ...state,
        sortByCategory: action.payload,
      };
    }

    case "SET_PRODUCT_TYPE": {
      return {
        ...state,
        productTypesArray: action.payload,
      };
    }

    case "SET_RATING": {
      return {
        ...state,
        ratingInput: action.payload,
      };
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortByPrice: null,
        productTypesArray: [],
        ratingInput: 5,
      };
    }

    default:
      return state;
  }
};
