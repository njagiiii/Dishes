import React from "react";
//import Navbar from "./Navbar"

function About(){
    return(
        <div>
            <img src="https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600"alt=""/>
            <h1>
                Welcome Everyone
            </h1>
            <p>
            Embark on a culinary adventure like no other with Tasty Dishes, a beautifully designed and user-friendly app that brings you an extensive collection of recipes from diverse cultures around the world.
            </p>
            <p>
            Discover the rich flavors, vibrant spices, and unique cooking techniques that define each culture's cuisine. From sizzling Indian curries to comforting Italian pasta dishes, fiery Mexican salsas to delicate Japanese sushi rolls, Tasty Dishes has it all.

            </p>
            <p>
            With a vast selection of recipes carefully curated by seasoned chefs and culinary experts, you'll find inspiration for every occasion and taste preference. Whether you're a novice cook or a seasoned food enthusiast, our step-by-step instructions and handy tips will guide you towards creating authentic and mouthwatering dishes.

            </p>
            <p>
            Experience the joy of exploring new flavors and expanding your culinary repertoire. Our intuitive search and filtering options make it easy to find recipes based on dietary preferences, ingredients, or cultural origins. Discover vegetarian delights, gluten-free options, and recipes suitable for special occasions or quick weekday meals.

            </p>
            <p>
            Stay organized and create your personalized recipe collections for easy access. Plan your meals with our meal planner feature, and never run out of exciting ideas for breakfast, lunch, dinner, or even festive gatherings.
            </p>
            <p>
            Tasty Dishes is more than just a recipe app; it's an immersive cultural experience that celebrates the diversity of global cuisines. Join our vibrant community of food enthusiasts, share your own recipes, and connect with like-minded individuals who share a passion for cooking and cultural exploration.
            </p>
            <form>
                <p>
                   <b>FEEDBACK FORM</b> 
                </p>
       <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       <div id="emailHelp" class="form-text">(We'll never share your email with anyone else).</div>
     </div>
       <div class="mb-3">
      <label for="exampleInputName" class="form-label">Name</label>
      <input type="name" class="form-control" id="exampleInputName"/>
      <div id="nameHelp" class="form-text">(Optional)</div>
     </div>
     <div class="mb-3">
      <label for="exampleInputLocation" class="form-label">Location Visited</label>
      <input type="name" class="form-control" id="exampleInputLocation"/>
      <div id="LoctionHelp" class="form-text"></div>
     </div>

     <p>Did you:</p>
     <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
       <label class="form-check-label" for="exampleCheck1">Dine in</label>
     </div>
     <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
       <label class="form-check-label" for="exampleCheck2">Dine out</label>
     </div>


  <button
  
   type="submit" class="btn btn-primary ">Submit</button>
   

</form>

<div class="modal-dialog modal-fullscreen-sm-down">
  ...
</div>
        </div>
        
    )
}
export default About;