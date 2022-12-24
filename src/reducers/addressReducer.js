export const initialState = {
  name: "",
  mobile: "",
  pincode: "",
  flat: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CLEAR_FORM":
      return {
        name: "",
        mobile: "",
        pincode: "",
        flat: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
      };
    case "EDIT_ADDRESS":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
