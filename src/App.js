

import "./index.css";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Featured from "./Featured"
import { Route,Routes } from "react-router-dom";
import './App.css';
import Careers from './Careers';
import Footer from './Footer';    
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
    <Navbar />
    <Router>
      <MenuContext>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route  path="/menu" element={<Menu />} />
          <Route path="/features" element={<Featured />} />
          <Route path="*" element={<h1>404 not found</h1>} />
          <Route path="/" element={<Menu />} />
          <Route path="Breakfast" element={<Breakfast />} />
          <Route path="Dessert" element={<Dessert />} />
          <Route path="Appetizer" element={<Appetizer />} />
          <Route path="main" element={<MainCourse />} />
          <Route path="Drinks" element={<Drinks />} />
        </Routes>
      </MenuContext>
    </Router>
    <Careers />
      <Footer />
    </div>
  );
}

    
 
export default App;
