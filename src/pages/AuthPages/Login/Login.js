import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "../../../components";
import { useAuthContext } from "../../../context/AuthProvider";
import { useStateContext } from "../../../context/StateProvider";

export const Login = () => {
  const [person, setPerson] = useState({ email: "", password: "" });

  const { login } = useAuthContext();

  const loginHandler = (e) => {
    e.preventDefault();
    if (person.email && person.password) {
      login(person);
      setPerson({ email: "", password: "" });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const guestLogin = () => {
    setPerson({ email: "partha@gmail.com", password: "parthasarma" });
  };

  return (
    <>
      <Navbar />
      <section className="form-container">
        <section className="tab-group">
          <NavLink
            className={({ isActive }) => `tab ${isActive ? "current-tab" : ""}`}
            to="/login"
          >
            Log In
          </NavLink>
          <NavLink
            className={({ isActive }) => `tab ${isActive ? "current-tab" : ""}`}
            to="/signup"
          >
            Sign up
          </NavLink>
        </section>

        <div className="login" id="login">
          <h3>Welcome Back!</h3>

          <form className="auth-form" onSubmit={loginHandler}>
            <label className="auth-label">
              Email Address<span className="req">*</span>
            </label>
            <input
              className="auth-input"
              type="email"
              name="email"
              required
              autoComplete="off"
              value={person.email}
              onChange={handleChange}
            />

            <label className="auth-label">
              Password<span className="req">*</span>
            </label>
            <input
              className="auth-input"
              type="password"
              name="password"
              required
              autoComplete="off"
              value={person.password}
              onChange={handleChange}
            />

            <button className="btn btn-form-action">Log In</button>
            <button onClick={guestLogin} className="btn btn-form-action ">
              Guest Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
