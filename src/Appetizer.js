import React from 'react';
import { MenuData } from './MenuContext';

function Appetizer() {
  const menuData = MenuData();

  // Check if data is available
  if (!menuData || !menuData.appetizers || menuData.appetizers.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <h2 className='text-center mt-4 mb-4'> Appetizer Menu</h2>
      <div className="row">
        {menuData.appetizers.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appetizer;
