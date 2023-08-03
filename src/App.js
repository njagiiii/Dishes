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
    <Router>
      <MenuContext>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="appetizer" element={<Appetizer />} />
          <Route path="main" element={<MainCourse />} />
          <Route path="drinks" element={<Drinks />} />
        </Routes>
      </MenuContext>
    </Router>
  );
}

export default App;
