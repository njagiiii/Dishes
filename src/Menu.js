import React, { useState, useEffect } from 'react';

const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
  

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
//       const response = await fetch('https://tasty-dishes-cr4o.onrender.com/menu');
//       if (!response.ok) {
//         throw new Error('Failed to fetch menu items');
//       }
//       const data = await response.json();
//       console.log(data);
//       setMenuItems(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <div className="container">
    <div>
          {/* Menu Row 1 */}
          <div className="row mt-5">
            {/* Row 1 Card 1 */}
            <div className="col">
                <div class="card" style={{width: "18rem"}}>
                  <img src="..." class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
            </div>
            {/* Row 1 Card 2 */}
            <div class="col">
            Column
            </div>
          </div>
          
          {/* Menu Row 2 */}
          <div className="row mt-5">
            {/* Row 2 Card 1 */}
            <div className="col">
              column
            </div>
            {/* Row 2 Card 2 */}
            <div class="col">
            Column
            </div>
          </div>
          
          {/* Menu Row 3 */}
          <div className="row mt-5">
            {/* Row 3 Card 1 */}
            <div className="col">
              column
            </div>
            
          </div>
      </div>
    </div>
  );

  }
export default Menu;
