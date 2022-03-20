import { useStateContext } from "../context/StateProvider";

export const useFilteredProducts = (productsList) => {
  let newProductsList = [...productsList];
  const { sortByPrice, productTypesArray, ratingInput } = useStateContext();

  if (sortByPrice && sortByPrice === "HIGH_TO_LOW") {
    newProductsList = newProductsList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortByPrice && sortByPrice === "LOW_TO_HIGH") {
    newProductsList = newProductsList.sort((a, b) => a["price"] - b["price"]);
  }

  if (productTypesArray.length > 0) {
    newProductsList = newProductsList.filter((product) => {
      return productTypesArray.includes(product.productType);
    });
  }

  newProductsList = newProductsList.filter(
    (product) => parseInt(product.rating) < parseInt(ratingInput)
  );
  
  return [...newProductsList];
};
