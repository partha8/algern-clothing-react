import React from "react";
import { Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import { Filters } from "./Filters/Filters";
import "./product-listing.css";
import { Card } from "../../components";

import { useFilteredProducts, useGetProducts } from "../../hooks";
import { useLocation } from "react-router-dom";

export const ProductListing = () => {
  const { productsList } = useStateContext();
  const filteredData = useFilteredProducts(productsList);

  useGetProducts();

  return (
    <>
      <Navbar />
      <h3 className="text-center">Shop Our Collection </h3>
      <div className="product-listing">
        <Filters />
        <div className="products">
          {filteredData.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
};
