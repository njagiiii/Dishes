import React from "react";
import { MenuData } from "./MenuContext";
import { useNavigate } from "react-router-dom";

function FeaturedProducts() {
  const menuData = MenuData();
  const navigation = useNavigate();

  // Check if data is available
  if (!menuData || !menuData.appetizers || menuData.appetizers.length === 0) {
    return <p>Loading...</p>;
  }

  //Function to handle view click and pass selected food item as prop
  const handleViewClick = (item) => {
    navigation("/view-details", { state: { foodItem: item } });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4"> Featured Products</h2>
      <p style={{ textAlign: "center" }}>
        Introducing Our Chef's Specials - A Culinary Journey Like No Other!
      </p>
      <p style={{ textAlign: "center" }}>
        At [Restaurant Name], we take immense pride in presenting our Chef's
        Specials – a delightful selection of dishes crafted with passion and
        creativity by our talented culinary team. Each dish represents a
        harmonious blend of flavors, textures, and presentation, designed to
        elevate your dining experience to new heights. Our Chef's Specials menu
        showcases the finest ingredients sourced from local producers and
        international suppliers, ensuring the freshest and highest quality
        culinary creations. With every dish, we aim to transport your taste buds
        on a culinary journey, exploring diverse cuisines and innovative cooking
        techniques. Discover the perfect harmony of tastes as our expert chefs
        infuse traditional recipes with modern twists, creating an exceptional
        and unforgettable dining adventure. From succulent seafood delicacies to
        tender cuts of premium meats, and from vegan delights to sumptuous
        desserts, our Chef's Specials cater to every discerning palate.
      </p>
      <div className="row">
        {menuData.appetizers.map((item) => (
          <div
            key={item.id}
            className="col-md-4 mb-4"
            onClick={() => handleViewClick(item)}
          >
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
                  type="button"
                  class="btn"
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
    </div>
  );
}

export default FeaturedProducts;
