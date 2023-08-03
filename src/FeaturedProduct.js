import React from 'react';
import { MenuData } from './MenuContext';
import { useNavigate } from 'react-router-dom';

function FeaturedProducts() {
  const menuData = MenuData();
  const navigation = useNavigate();

  // Check if data is available
  if (!menuData || !menuData.appetizers || menuData.appetizers.length === 0) {
    return <p>Loading...</p>;
  }

  //Function to handle view click and pass selected food item as prop
     const handleViewClick =(item)=>{
      navigation('/view-details', {state:{foodItem:item}})
     }

  return (
    <div className='container'>
      <h2 className='text-center mt-4 mb-4'> Featured Products</h2>
      <div className="row">
        {menuData.appetizers.map((item) => (
          <div key={item.id} className="col-md-4 mb-4" onClick={() => handleViewClick(item)}>
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
                <button className="btn btn-primary btn-sm rounded-md shadow-lg" >Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
