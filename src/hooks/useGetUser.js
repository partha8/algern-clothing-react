import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useStateContext } from "../context/StateProvider";
import { API_URL } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";

export const useGetUser = () => {
  const { toastHandler } = useStateContext();
  const { authDispatch } = useAuthContext();
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from.pathname || "/" || "/profile";

  useEffect(() => {
    const encodedToken = localStorage.getItem("algern-clothing-token");
    if (encodedToken) {
      (async () => {
        try {
          const res = await axios.get(`${API_URL}/user`, {
            headers: {
              authorization: encodedToken,
            },
          });

          authDispatch({
            type: "HANDLE_USER",
            payload: {
              user: res.data.foundUser,
              encodedToken: res.data.encodedToken,
            },
          });
          navigate(from, { replace: true });
        } catch (error) {
          toastHandler(true, error.message, "error");
          console.error(error);
        }
      })();
    }
  }, []);
};
