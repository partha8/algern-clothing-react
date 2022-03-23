import React from "react";
import { Card, Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useStateContext();

  return (
    <div className="wishlist">
      <Navbar />

      <h2 className="text-center">Wishlist</h2>
      <div className="cards">
        {wishlist.map((product) => {
          return <Card key={product._id} {...product} />;
        })}
      </div>
    </div>
  );
};
