import React, { useState } from "react";
import { Footer, Navbar } from "../../components";
import { useAuthContext } from "../../context/AuthProvider";
import { useStateContext } from "../../context/StateProvider";
import { getOrders } from "../../utils/productUtils";
import { Address } from "../index";
import "./profile.css";

export const Profile = () => {
  const { userState, logout } = useAuthContext();
  const { productsDispatch, orders } = useStateContext();
  const [tab, setTab] = useState("user-details");

  console.log(orders);

  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="profile-tabs">
          <p
            onClick={() => setTab("user-details")}
            className={`${tab === "user-details" ? "active-profile-tab" : ""} `}
          >
            User Details
          </p>
          <p
            onClick={() => setTab("addresses")}
            className={`${tab === "addresses" ? "active-profile-tab" : ""} `}
          >
            Addresses
          </p>
          <p
            onClick={() => {
              setTab("orders");
              getOrders(productsDispatch);
            }}
            className={`${tab === "orders" ? "active-profile-tab" : ""} `}
          >
            Orders
          </p>
        </div>

        {tab === "user-details" && (
          <div
            style={{
              maxWidth: "700px",
              margin: "1rem auto",
              padding: " 0 1rem",
            }}
          >
            <h3>
              <span className="underline">Name</span> : {userState.firstName}{" "}
              {userState.lastName}
            </h3>

            <h3>
              <span className="underline">Email</span> : {userState.email}
            </h3>

            <button
              style={{
                background: "var(--primary-color)",
                color: "var(--font-color-light)",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        )}

        {tab === "addresses" && <Address />}

        {tab === "orders" && (
          <>
            {orders.map((order) => {
              const { _id, address, items, total_paid } = order;
              return (
                <div className="order-container" key={_id}>
                  <small style={{ fontWeight: "bold" }}>id: {_id}</small>
                  {items.map((item) => {
                    return (
                      <div className="item-container">
                        <p>
                          {item.name} x {item.quantity}
                        </p>
                        <small>Each {item.unit_price}</small>
                      </div>
                    );
                  })}
                  <p>Total paid: {total_paid}</p>
                  <p>Delivery Address: {address} </p>
                </div>
              );
            })}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};
