import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breakfast from './Breakfast';
import Menu from './Menu';
import MenuContext from './MenuContext';
import Dessert from './Dessert';
import Appetizer from './Appetizer';
import MainCourse from './Main';
import Drinks from './Drinks';


function App() {
  return (
    <div>
      
    <Router>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="Breakfast" element={<Breakfast />} />
          <Route path="Dessert" element={<Dessert />} />
          <Route path="Appetizer" element={<Appetizer />} />
          <Route path="main" element={<MainCourse />} />
          <Route path="Drinks" element={<Drinks />} />
        </Routes>
      </MenuContext>
    </Router>
   
    </div>
  );
}

export default App;
