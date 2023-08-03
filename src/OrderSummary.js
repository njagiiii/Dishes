import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const location = useLocation();
    const navigation = useNavigate();

    //check if this location contains an order summary
     if(!location.state || !location.state.foodItem || !location.state.totalPrice){
        return <p>No order Availale</p>
     }
     
       const {foodItem, totalPrice} = location.state;  //get the fooditem and the total price

       //function to handl on popup
       const handleCheckout =() =>{
        window.alert('Your Order has been received')
       }

       //function to go back to the menu on navigation
          const handleAddorder = ()=> {
            navigation('/')
          }

  return (
    <div class="card mb-3" style={{maxWidth:"800px", marginTop:"100px", marginLeft:"800px", border:"none"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={foodItem.image} class="img-fluid rounded-start" alt={foodItem.name}/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{marginLeft:"100px", marginTop:"50px"}}>
        <h5 class="card-title">Order Summary</h5>
        <p class="card-text"> Total Price:{totalPrice}</p>
         <button style={{width:"200px", height:"50px", borderRadius:"10px"}} onClick={handleCheckout}>CheckOut</button>
         <button style={{width:"200px", height:"50px", borderRadius:"10px",marginTop:"20px",display:"block"}} onClick={handleAddorder}>Add Order</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderSummary