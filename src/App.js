
import About from"./About" 
import "./index.css";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Featured from "./Featured";   
import React from 'react';
import Footer from "./Footer";
import Careers from "./Careers"
import './App.css'
import { Route, Routes } from 'react-router-dom';
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
      <MenuContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/menu" element={<Menu />} />
          <Route path="/features" element={<Featured />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/appetizer" element={<Appetizer />} />
          <Route path="/main" element={<MainCourse />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/career" element={<Careers/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </MenuContext>
      <Footer />
    </div>
  );
}

export default App;
