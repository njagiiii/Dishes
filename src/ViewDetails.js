import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ViewDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] =useState('')
  const [selectedOption1, setSelectedOption1] =useState('')
   const [ totalPrice,setTotalPrice] = useState(0); 

  //  create a function that when i click the order button i should see the payment details
    const handleSummary = () =>{
      const total = foodItem.price * 5
      setTotalPrice(total);
      navigate('/order-summary', {state:{foodItem, totalPrice:total}});
    }


    if(!location.state || !location.state.foodItem ){
      return <p>Nothing in here</p>  //check if there is any food item here
    }

      const {foodItem} = location.state; //then pass the food item to this location

        const handleChange = (event) =>{
           setSelectedOption(event.target.value);  //handle dropdown selection
        }

        const handleChange1 = (event) =>{
          setSelectedOption1(event.target.value);
       }

      //REnder the details of the selevted food
  return (
    <div style={{marginLeft:"50px", marginTop:"80px"}}>
    <div class="card mb-3" style={{maxWidth:"900px",  border:"none"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={foodItem.image}  class="img-fluid rounded-start" alt={foodItem.name} style={{borderRadius:"none",marginLeft:"10px",marginTop:"40px" }}/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{ marginTop:"50px",marginLeft:"50px"}}>
        <h5 class="card-title">{foodItem.name}</h5>
        <p class="card-text">{foodItem.description}</p>
        <p class="card-text">KSH {foodItem.price}</p>
      {/* dropdown menu 1 */}
        <div>
    <label htmlFor='dropdown' style={{marginTop:"20px"}}>CHOICE OF JUICE</label>
     <select id='dropdown1' value={selectedOption} onChange={handleChange} style={{width:"400px" , height:"50px", borderRadius:"5px",display:"block", marginTop:"15px"}}>
      <option value=''>Select an option</option>
      <option value='option1'>PASSION</option>
      <option value='option2'>COCKTAIL</option>
      <option value='option3'>WATERMELON</option>
      <option value='option4'>CARROT</option>
      <option value='option5'>BEETROOT</option>
     </select>
     </div>
      {/* dropdown menu 2 */}
     <div>
    <label htmlFor='dropdown' style={{marginTop:"20px"}}>CHOOSE AN ACCOMPANIMENT</label>
     <select id='dropdown2' value={selectedOption1} onChange={handleChange1} style={{width:"400px" , height:"50px", borderRadius:"5px",display:"block", marginTop:"15px"}}>
      <option value=''>Select an option</option>
      <option value='option6'>HOME FRIES</option>
      <option value='option7'>SUB HOME FRIES WITH PLANTAIN</option>
      <option value='option3'>SUB HOME FRIES WITH ATEAMED VEGIES</option>
     </select>
     </div>
     <button style={{width:"300px" , marginTop:"30px", borderRadius:"10px", height:"50px",marginLeft:"40px",color:"white"}} onClick={handleSummary}>Order</button>
     {totalPrice > 0 && (
      <p>Total Price KSH {totalPrice}</p>
     )}
     </div>
      </div>
    </div>
    
  </div>
</div>
    
  )
}

export default ViewDetails;