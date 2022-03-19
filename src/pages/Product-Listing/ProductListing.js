import React from "react";
import { Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
// import { Filters } from "./Filters";
import "./product-listing.css";
import { Card } from "../../components/Card/Card";

export const ProductListing = () => {
  const { productsList} = useStateContext();

  return (
    <>
      <Navbar />
      <h3 className="text-center">Shop Our Collection </h3>
      <div className="product-listing">
        {/* <Filters /> */}
        <div className="products">
          {productsList.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
};
