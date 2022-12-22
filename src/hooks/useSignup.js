import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { useStateContext } from "../context/StateProvider";

export const useSignup = async () => {
  const { login } = useAuthContext();
  const { toastHandler } = useStateContext();
  const person = {
    email: "partha@gmail.com",
    password: "parthasarma",
  };

  useEffect(() => {
    login(person, toastHandler);
  }, []);
};
