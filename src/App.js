
import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Breakfast from './Breakfast';
import Menu from './Menu';
import MenuContext from './MenuContext';
import Dessert from './Dessert';
import Appetizer from './Appetizer';
import MainCourse from './Main';
import Drinks from './Drinks';
import FeaturedProduct from './FeaturedProduct';
import ViewDetails from './ViewDetails';
import OrderSummary from './OrderSummary';


function App() {
  return (
    <div>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="Breakfast" element={<Breakfast />} />
          <Route path="Dessert" element={<Dessert />} />
          <Route path="Appetizer" element={<Appetizer />} />
          <Route path="main" element={<MainCourse />} />
          <Route path="Drinks" element={<Drinks />} />
          <Route path="/view-details" element={<ViewDetails />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
        <FeaturedProduct />
      </MenuContext>
   
   
    </div>
  );
}


  
    
 
export default App;
