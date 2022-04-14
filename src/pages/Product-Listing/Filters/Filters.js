import React from "react";
import { useStateContext } from "../../../context/StateProvider";
import "./filters.css";

export const Filters = () => {
  const {
    productsList,
    filterDispatch,
    productTypesArray,
    ratingInput,
    sortByPrice,
    categories,
    sortByCategory,
  } = useStateContext();

  const productTypes = [
    ...new Set(productsList.map((product) => product.productType)),
  ];

  const handleChange = (e) => {
    let arr = [...productTypesArray];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((productType) => productType !== e.target.value);
    }
    filterDispatch({ type: "SET_PRODUCT_TYPE", payload: arr });
  };

  return (
    <aside className="filters">
      <div className="underline flex-center">
        <h5 className="filters-title">Filter by</h5>
        <span
          onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
          className="text-right"
        >
          Clear
        </span>
      </div>
      <ul>
        <li className=" filter-type">
          <p className="filter-type-title">Categories </p>
          <form className="sub-categories">
            {categories.map((category) => {
              const { categoryName } = category;
              return (
                <label className="category">
                  <input
                    onClick={() =>
                      filterDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: categoryName,
                      })
                    }
                    type="radio"
                    checked={sortByCategory && sortByCategory === categoryName}
                  />
                  {categoryName}
                </label>
              );
            })}
          </form>
        </li>

        <li className=" filter-type">
          <p className="filter-type-title">Collection </p>
          <form className="sub-categories">
            {productTypes.map((type, index) => {
              return (
                <label className="category" for={type} key={index}>
                  <input
                    value={type}
                    checked={productTypesArray.some(
                      (productType) => productType === type
                    )}
                    onChange={handleChange}
                    type="checkbox"
                    name="collection"
                    id={type}
                  />
                  {type}
                </label>
              );
            })}
          </form>
        </li>

        <li className="filter-type">
          <p className="filter-type-title">Price</p>
          <form className="sub-categories">
            <label className="category">
              <input
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HIGH_TO_LOW",
                  })
                }
                type="radio"
                name="price-sort"
                checked={sortByPrice === "HIGH_TO_LOW"}
              />
              High to Low
            </label>
            <label className="category">
              <input
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LOW_TO_HIGH",
                  })
                }
                type="radio"
                name="price-sort"
                checked={sortByPrice === "LOW_TO_HIGH"}
              />
              Low to High
            </label>
          </form>
        </li>

        <li className="filter-type">
          <p className="filter-type-title">Rating</p>
          <div className="category">
            <div className="prices">
              <span>0</span>
              <span>5</span>
            </div>
            <div className="range-input">
              <input
                value={ratingInput}
                onChange={(e) =>
                  filterDispatch({
                    type: "SET_RATING",
                    payload: e.target.value,
                  })
                }
                className="range"
                step="1"
                type="range"
                min="0"
                max="5"
              />
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};
