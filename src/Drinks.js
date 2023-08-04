import React, { useState } from "react";
import { MenuData } from "./MenuContext";

function Drinks() {
  const menuData = MenuData();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Check if data is available
  if (!menuData || !menuData.beverages || menuData.beverages.length === 0) {
    return <p>Loading...</p>;
  }

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    setShowModal(false);
    setShowToast(true);
  };

  // variable to store the timer ID
  let toastTimer;

  // Clear the previous timer if any and set a new timer for hiding the toast after 5 seconds
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    setShowToast(false);
  }, 5000);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Drinks Menu</h2>
      <p style={{ textAlign: "center" }}>Welcome to Our Drinks Selection</p>
      <p style={{ textAlign: "center" }}>
        At Tasty Dishes, we take pride in offering a diverse and enticing array
        of beverages to complement your dining experience. Our carefully curated
        drinks menu showcases an exquisite selection that caters to every taste,
        whether you're in the mood for refreshing non-alcoholic options or
        exquisite cocktails crafted by our talented mixologists. At [Restaurant
        Name], our drinks menu is a journey of taste and discovery, elevating
        your dining experience with each sip. Our attentive staff is always on
        hand to assist you in finding the perfect beverage to complement your
        culinary choices. Whether you're celebrating a special occasion or
        simply enjoying a meal with friends, our drinks selection promises to
        elevate your dining experience to new heights.
      </p>
      <p style={{ textAlign: "center" }}>
        From the Tasty Dishes team, we look forward to serving you the Drinks of
        your dreams. Bon appétit!
      </p>
      <div className="row">
        {menuData.beverages.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card food-card h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: Ksh {item.price}</p>
                <button
                  className=""
                  onClick={() => handleOrderClick(item)}
                  style={{
                    backgroundColor: "#547043",
                    color: "white",
                    fontSize: "23px",
                    padding: "10px 25px",
                    borderRadius: "10px",
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  id="circle"
                />
                <p>{selectedItem.description}</p>
                <p>Price: Ksh {selectedItem.price}</p>
                <p>
                  Order message: Your order for {selectedItem.name} has been
                  placed.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}

      {/* Toast */}
      {selectedItem && showToast && (
        <div
          className="toast show"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            minWidth: "200px",
          }}
        >
          <div className="toast-header">
            <strong className="me-auto">Order Confirmed</strong>
          </div>
          <div className="toast-body">
            Thank you for ordering the {selectedItem.name}. Your order is on the
            way.
          </div>
        </div>
      )}
    </div>
  );
}

export default Drinks;
