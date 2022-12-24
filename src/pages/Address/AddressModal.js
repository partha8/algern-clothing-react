import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { states } from "../../utils/states";

export const AddressModal = ({
  isModalOpen,
  setIsModalOpen,
  formState,
  formDispatch,
  submitHandler,
}) => {
  return (
    <div
      className={`${isModalOpen ? "submenu-wrapper show" : "submenu-wrapper"}`}
    >
      <section className="submenu">
        <AiOutlineClose
          className="close"
          onClick={() => {
            setIsModalOpen(false);
            formDispatch({ type: "CLEAR_FORM" });
          }}
        />
        <form
          className="address-form"
          onSubmit={(e) => submitHandler(e, formState)}
        >
          <label>Full Name:</label>
          <input
            type="text"
            value={formState.name}
            name="name"
            required={true}
            placeholder="John Doe"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>Mobile Number:</label>
          <input
            type="tel"
            patter="[0-9]{10}"
            name="mobile"
            required={true}
            value={formState.mobile}
            placeholder="1234567890"
            maxLength="10"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>Pin Code:</label>
          <input
            type="text"
            maxLength="6"
            required={true}
            placeholder="303030"
            value={formState.pincode}
            name="pincode"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            type="text"
            value={formState.flat}
            required={true}
            name="flat"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>Area, Colony, Street, Sector, Village</label>
          <input
            type="text"
            required={true}
            value={formState.area}
            name="area"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>Landmark</label>
          <input
            type="text"
            value={formState.landmark}
            name="landmark"
            placeholder="E.g. Near AIIMS Flyover"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>City / Town</label>
          <input
            type="text"
            value={formState.city}
            name="city"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          />
          <label>State / Province / Region</label>
          <select
            name="state"
            onChange={(e) =>
              formDispatch({ type: "HANDLE_CHANGE", payload: e })
            }
          >
            <option disabled>Select State</option>
            {states.map((state, index) => {
              return (
                <option value={state} key={index}>
                  {state}
                </option>
              );
            })}
          </select>
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};
