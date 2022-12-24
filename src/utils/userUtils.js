import axios from "axios";
import { API_URL } from "./constants";
import { toast } from "react-toastify";

export const updateAddress = async (body, authDispatch) => {
  const encodedToken = localStorage.getItem("algern-clothing-token");

  try {
    toast.info("updating address...");
    const response = await axios.post(
      `${API_URL}/user/address`,
      { ...body },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );

    if (response.status === 200) {
      authDispatch({
        type: "HANDLE_USER",
        payload: {
          user: response.data.foundUser,
          encodedToken: response.data.encodedToken,
        },
      });
      toast.success("Address updated!");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
