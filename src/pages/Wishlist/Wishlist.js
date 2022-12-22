import React from "react";
import { Card, Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useStateContext();

  return (
    <div className="wishlist">
      <Navbar />

      {!wishlist.length && (
        <div className="png-holder">
          <img
            src="/wishlist.png"
            alt="wishlist empty"
            className="png-placeholder"
          />
          <h2>Start adding items to your wishlist now!</h2>
        </div>
      )}
      {wishlist.length && (
        <div className="cards">
          {wishlist.map((product) => {
            return <Card key={product._id} {...product} />;
          })}
        </div>
      )}
    </div>
  );
};
