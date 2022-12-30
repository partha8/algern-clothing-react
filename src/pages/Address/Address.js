import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthProvider";
import { useState, useReducer, useEffect } from "react";
import { formReducer, initialState } from "../../reducers/addressReducer";
import "./address.css";
import { Footer, Navbar } from "../../components";
import { AddressModal } from "./AddressModal";
import { updateAddress } from "../../utils/userUtils";
import { useStateContext } from "../../context/StateProvider";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const Address = () => {
  const { userState, authDispatch } = useAuthContext();
  const { productsDispatch, order, cart } = useStateContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [error, setError] = useState(false);
  const [formState, formDispatch] = useReducer(formReducer, initialState);

  console.log(order);
  const [reviewRedirect, setReviewRedirect] = useState("#");
  const editAddress = (e, _id) => {
    const editAddress = userState.addresses.find(
      (address) => address._id === _id
    );
    setEditId(_id);

    formDispatch({
      type: "EDIT_ADDRESS",
      payload: editAddress,
    });
    setIsModalOpen(true);
  };

  const deleteAddress = async (e, _id) => {
    const body = {
      address: {
        _id,
      },
      action: {
        type: "delete",
      },
    };
    await updateAddress(body, authDispatch);
  };

  const submitHandler = async (e, state) => {
    e.preventDefault();

    if (editId) {
      const body = { address: { ...state }, action: { type: "edit" } };
      await updateAddress(body, authDispatch);
    } else {
      const body = { address: { ...state } };
      await updateAddress(body, authDispatch);
    }

    formDispatch({ type: "CLEAR_FORM" });
    setIsModalOpen(false);
    setEditId(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const createCheckoutSession = async () => {
    try {
      const res = await axios.post(
        // "http://localhost:5000/order/create-checkout-session",
        `${API_URL}/order/create-checkout-session`,
        {
          order,
        },
        {
          headers: {
            authorization: localStorage.getItem("algern-clothing-token"),
          },
        }
      );

      const url = res.data.url;
      window.location = url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Link to="/cart">
        <h4 className="text-center">Go back to cart</h4>
      </Link>

      <div className="address-page">
        <div className="addresses-container">
          <div
            onClick={() => {
              setIsModalOpen(true);
              formDispatch({ type: "CLEAR_FORM" });
            }}
            className="address-card add-address"
          >
            <FaPlus />
            <h3>Add Address</h3>
          </div>
          {userState.addresses.map((address) => {
            const {
              _id,
              name,
              mobile,
              pincode,
              flat,
              area,
              landmark,
              city,
              state,
            } = address;
            return (
              <div
                onClick={() => {
                  setSelectedAddress(address);
                  productsDispatch({
                    type: "SET_ORDER",
                    payload: {
                      items: [...cart],
                      selectedAddress: address,
                    },
                  });
                }}
                className={`address-card ${
                  selectedAddress && selectedAddress._id === _id
                    ? "highlight"
                    : ""
                }`}
                key={_id}
              >
                <h4>{name}</h4>
                <p>
                  {flat}, {area}
                </p>
                <p>
                  {city}, {state} {pincode}
                </p>
                <p>Phone Number: {mobile}</p>

                <div className="address-action-btns">
                  <button onClick={(e) => editAddress(e, _id)}>Edit</button>
                  <button onClick={(e) => deleteAddress(e, _id)}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="address-footer">
          <h3 className={`text-center ${error ? "error" : ""}`}>
            {!error
              ? "Select an address from above"
              : "You must select an address!"}
          </h3>

          {/* <Link className="address-action-btns" to={`${reviewRedirect}`}>
            <button
              // disabled={!selectedAddress}
              onClick={() => {
                if (!selectedAddress) {
                  setError(true);
                  setReviewRedirect("#");
                } else {
                  productsDispatch({
                    type: "SET_ORDER",
                    payload: {
                      selectedAddress,
                    },
                  });
                  setReviewRedirect("/buy/review");
                }
              }}
            >
              Proceed to Buy
            </button>
          </Link> */}

          <button
            className="address-action-btns"
            // disabled={!selectedAddress}
            onClick={() => {
              if (!selectedAddress) {
                setError(true);
                setReviewRedirect("#");
              } else {
                productsDispatch({
                  type: "SET_ORDER",
                  payload: {
                    items: [...cart],
                    selectedAddress,
                  },
                });
                createCheckoutSession(order);
                setReviewRedirect("/buy/review");
              }
            }}
          >
            Proceed to Buy
          </button>
        </div>
        {isModalOpen && (
          <AddressModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            formState={formState}
            formDispatch={formDispatch}
            submitHandler={submitHandler}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
