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
    <div className="animate-text"> 
      <p><h1>Welcome to Tasty Dishes</h1>Welcome to CJ's delicious universe. Discover the Delectable Delights on Our Exquisite Restaurant Menu! <br></br>Everything from our Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals Right here at your fingertips.<br></br>ORDER NOW!</p>
    </div>
    <div>
          {/* Menu Row 1 */}
          <div className="row mt-5">
            {/* Row 1 Card 1 */}
            <div className="col">
                <div class="card menu-card" style={{width: "30rem"}}>
                  <img src="https://cafejavasmedia.s3.af-south-1.amazonaws.com/categoryImages/1682056978.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Big on Breakfast</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
            </div>
            

            {/* Row 1 Card 2 */}
            <div className="col">
            <div class="card menu-card" style={{width: "30rem"}}>
                  <img src="https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Appetizers</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
               </div>
              </div>
            
          
          
          {/* Menu Row 2 */}
          <div className="row mt-5">
            {/* Row 2 Card 1 */}
            <div className="col">
            <div class="card menu-card" style={{width: "30rem"}}>
                  <img src="https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579274066.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Desserts</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
             </div>
               </div>
            

            {/* Row 2 Card 2 */}
            <div class="col">
              <div class="card menu-card" style={{width: "30rem"}}>
                  <img src="https://images.pexels.com/photos/12842926/pexels-photo-12842926.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Main Courses</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
             </div>
            </div>
          </div>
          
          {/* Menu Row 3 */}
          <div className="row mt-5">
            {/* Row 3 Card 1 */}
            <div className="col">
            <div class="card menu-card" style={{width: "30rem"}}>
                  <img src="https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Drinks</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
            </div>
            
          </div>
      </div>
    </div>
    
  );
  }
export default Menu;
