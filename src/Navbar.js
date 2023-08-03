import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar(){
   //check the pathway to hide the navbar
    // const location =useLocation()

    //if the location is home hide the navbar
      // if(location.pathname === "/"){
      //   return null;
      // }

  return(
    <div class="shadow p-1 mb-3 bg-body-tertiary rounded border-bottom border-black" style={{backgroundColor:"black"}}>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works" style={{textDecoration : "none"}}>Tasty Dishes</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style={{marginLeft:"600px", gap: "30px"}}>
        <li class="nav-item">
          <NavLink class="nav-link active"  aria-current="page" to="/" style={{textDecoration : "none"}} >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id="nav-item" to="/menu" style={{textDecoration : "none"}}>Menu</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id="nav-item" to="features" style={{textDecoration : "none"}}>Featured Products</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id="nav-item" to="/about" style={{textDecoration : "none"}}>About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}
export default Navbar;