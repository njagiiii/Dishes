import React, { useState } from "react";
import { MenuData } from "./MenuContext";

function MainCourse() {
  const menuData = MenuData();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Check if data is available
  if (
    !menuData ||
    !menuData.main_courses ||
    menuData.main_courses.length === 0
  ) {
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
      <h2 className="text-center mt-4 mb-4">Main Course Menu</h2>
      <p style={{ textAlign: "center" }}>Indulge in our delectable main course offerings</p>
      <p style={{ textAlign: "center" }}>
        Indulge in the rich aromas of our expertly seasoned grilled meats, or
        savor the exquisite blend of spices in our signature curry dishes.
        Whether you prefer a hearty comfort meal or a lighter, elegant option,
        our Main Course menu offers something for every discerning palate. Our
        commitment to sourcing the freshest, high-quality ingredients ensures
        that every dish is a culinary masterpiece. We take great pride in
        delivering an exceptional dining experience, and our Main Courses are no
        exception. 
      </p>
      <p style={{ textAlign: "center" }}>
        From the Tasty Dishes team, we look forward to serving you the appetizer
        of your dreams. Bon appétit!
      </p>
      <div className="row">
        {menuData.main_courses.map((item) => (
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
                  className="btn"
                  style={{
                    backgroundColor: "#547043",
                    color: "white",
                    fontSize: "15px",
                    padding: "10px 20px",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleOrderClick(item)}
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

export default MainCourse;
