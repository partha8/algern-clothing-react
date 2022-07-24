import React from "react";
import { Navbar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../utils/productUtils";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export const Cart = () => {
  const { cart, productsDispatch, toastHandler } = useStateContext();
  return (
    <>
      <Navbar />
      <div className="cart">
        <header className="cart-header">
          <h3>Items in Your Cart</h3>
          <span className="btn">Checkout</span>
        </header>

        <div className="cart-table">
          <ul>
            {cart.map((item) => {
              const { name, price, size, color, id, image, qty, _id } = item;
              return (
                <li className="product-item">
                  <div className="item-main">
                    <div className="item-block ib-info">
                      <img
                        className=" responsive-image product-img"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="ib-info-meta">
                        <span className="title">{name}</span>
                        <span className="itemno quiet">#{id}</span>
                        <span className="styles">
                          <span>
                            <strong>Color</strong>: {color}
                          </span>
                          <span>
                            <strong>Size</strong>: {size}
                          </span>
                          <span className="blue-link">Edit Details</span>
                        </span>
                      </div>
                    </div>

                    <div className="item-block ib-qty-total-price">
                      <div className="ib-qty">
                        <span className="qty">{qty}</span>
                        <span className="arrows">
                          <AiOutlineArrowUp
                            onClick={() =>
                              increaseQty(_id, productsDispatch, toastHandler)
                            }
                          />
                          <AiOutlineArrowDown
                            onClick={() =>
                              decreaseQty(
                                _id,
                                productsDispatch,
                                toastHandler,
                                qty
                              )
                            }
                          />
                        </span>
                        <span className="price">
                          <span>x</span> Rs.{price}
                        </span>
                      </div>

                      <div className="ib-total-price">
                        <span className="tp-price">Rs.{qty * price}</span>
                        <span className="tp-remove">
                          <BsFillTrashFill
                            onClick={() =>
                              removeFromCart(
                                _id,
                                productsDispatch,
                                toastHandler
                              )
                            }
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="item-foot">
                    <div className="if-left">In Stock</div>
                    <div className="if-right">
                      <span className="blue-link">Gift Options</span> |{" "}
                      <span className="blue-link">Add to Wishlist</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sub-table">
          <div className="summary-block">
            <div className="sb-promo">
              <input type="text" placeholder="Enter Promo Code" />
              <span className="btn">Apply</span>
            </div>
            <ul>
              <li className="subtotal">
                <span className="sb-label">Subtotal</span>
                <span className="sb-value">
                  Rs.
                  {cart.reduce((sum, curr) => {
                    return sum + curr.qty * curr.price;
                  }, 0)}{" "}
                </span>
              </li>

              <li className="shipping">
                <span className="sb-label">Shipping</span>
                <span className="sb-value">n/a</span>
              </li>

              <li className="tax">
                <span className="sb-label">Est. Tax</span>
                <span className="sb-value">Rs. 0.00</span>
              </li>

              <li className="grand-total">
                <span className="sb-label">Total</span>
                <span className="sb-value">
                  Rs.
                  {cart.reduce((sum, curr) => {
                    return sum + curr.qty * curr.price;
                  }, 0)}{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="cart-footer">
          <span className="cont-shopping">
            <i className="bx bx-chevron-left"></i>Continue Shopping
          </span>
          <span className="btn">Checkout</span>
        </div>
      </div>
    </>
  );
};
