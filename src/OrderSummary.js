import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const navigation = useNavigate();

  //check if this location contains an order summary
  if (
    !location.state ||
    !location.state.foodItem ||
    !location.state.totalPrice
  ) {
    return <p>No order Availale</p>;
  }

  const { foodItem, totalPrice } = location.state; //get the fooditem and the total price

  //function to handl on popup
  const handleCheckout = () => {
    window.alert("Your Order has been received");
  };

  //function to go back to the menu on navigation
  const handleAddorder = () => {
    navigation("/menu");
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>My Order</h1>
    <div
      class="card mb-3"
      style={{
        maxWidth: "800px",
        marginTop: "100px",
        marginLeft: "900px",
        border: "none",
      }}
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={foodItem.image}
            class="img-fluid rounded-start"
            alt={foodItem.name}
            style={{ maxWidth: "300px", marginLeft: "0px" }}
          />
        </div>
        <div class="col-md-8">
          <div
            class="card-body"
            style={{ marginLeft: "130px", marginTop: "50px" }}
          >
            <h5 class="card-title">Order Summary</h5>
            <p style={{ fontSize: "20px", marginTop: "20px" }}>
              {" "}
              Item: {foodItem.name}
            </p>
            {/* <a href='/view-details' style={{textDecorationLine:"none", color:"#989898"}}>View details</a> */}
            <p
              class="card-text"
              style={{
                marginTop: "20px",
                color: "#a6b49a",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Total Price: {totalPrice}
            </p>
            <button
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={handleCheckout}
            >
              CheckOut
            </button>
            <button
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "10px",
                marginTop: "20px",
                display: "block",
                color: "white",
              }}
              onClick={handleAddorder}
            >
              Add Order
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderSummary;
