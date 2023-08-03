import React, { useState } from 'react';
import { MenuData } from './MenuContext';

function Breakfast() {
  const menuData = MenuData();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Check if data is available
  if (!menuData || !menuData.breakfast || menuData.breakfast.length === 0) {
    return <p>Loading...</p>;
  }

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-4 mb-4'>Breakfast Menu</h2>
      <div className="row">
        {menuData.breakfast.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card food-card h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: Ksh {item.price}</p>
                <button
                  className="btn btn-primary btn-sm rounded-md shadow-lg"
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
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.name}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img src = {selectedItem.image} alt = {selectedItem.name} id = "circle" />
                <p>{selectedItem.description}</p>
                <p>Price: Ksh {selectedItem.price}</p>
                <p>Order message: Your order for {selectedItem.name} has been placed.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Breakfast;
