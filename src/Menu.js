
import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {     
  return (
    <div className="container menu-parent-div text-center">
    <div className="animate-text menu-header"> 
    <h1 className='font-weight-bold'>Welcome to Tasty Dishes</h1>
      <p className="font-weight-bold header-bold">
        Welcome to Tasty Dishes delicious universe. Discover the Delectable Delights on Our Exquisite Restaurant Menu! <br>
        </br>Everything from our Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals Right here at your fingertips.<br>
        </br>ORDER NOW!</p>
    </div>
    <div>
          {/* Menu Row 1 */}
          <div className="row mt-5 ">
          {/* Row 1 Card 1 */}
          <div className="col-lg-6 mb-4">
            <div className="card menu-card bg-light" style={{ width: "30rem" }}>
              <Link to="Breakfast">
                <img
                  src="https://cafejavasmedia.s3.af-south-1.amazonaws.com/categoryImages/1682056978.jpg"
                  className="card-img-top"
                  alt="..."
                />
  
              </Link>
              <div className="card-body">
                
                <h5 className="card-title">Big on Breakfast</h5>
              </div>
            </div>
          </div>

            

            

            {/* Row 1 Card 2 */}
            <div className="col-lg-6 mb-4">
            <div className="card menu-card bg-light" style={{width: "30rem"}}>
            <Link to="Appetizer">
                  <img src="https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."></img>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">Appetizers</h5>
                    
                  </div>
               </div>
               </div>
              </div>
            
          
          
          {/* Menu Row 2 */}
          <div className="row mt-5">
            {/* Row 2 Card 1 */}
            <div className="col-lg-6 mb-4">
            <div className="card menu-card bg-light" style={{width: "30rem"}}>
              <Link to="Dessert">
                  <img src="https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579274066.jpg" class="card-img-top" alt="..."></img>
                   </Link>
                  <div className="card-body">
                    <h5 className="card-title">Desserts</h5>
                  </div>
             </div>
               </div>
            

            {/* Row 2 Card 2 */}
            <div className="col-lg-6 mb-4">
            <div className="card menu-card bg-light" style={{ width: "30rem" }}>
              <Link to="main">
                <img
                  src= "https://images.pexels.com/photos/12842926/pexels-photo-12842926.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                {/* You can remove the Link component here, as it's not necessary */}
                <h5 className="card-title">Main Courses</h5>
              </div>
            </div>
          </div>
          {/* Menu Row 3 */}
          <div className="row mt-5">
            {/* Row 3 Card 1 */}
            <div className="col-lg-6 offset-lg-3">
            <a href="about:blank">
            <div className="card menu-card bg-light" style={{width: "30rem"}}>
               <Link to="Drinks">  
                  <img src="https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."></img>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">Drinks</h5>
                    
                  </div>
               </div>
               </a>
            </div>
            
        </div>
        </div>
        </div>
        </div>
    
  );
  }
export default Menu;
