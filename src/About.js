import React from "react";

function About() {
  const handleSubmit = (event) => {
    event.preventDefault();
     window.alert('Thankyou For Your Feedback!')
    // Display the thank you message
    window.location.reload(); // Reload the page to clear the form and pop-up
  };
  return (
    <div>
      <img src="https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600"class="rounded mx-auto d-block" alt="" />
      <h1>Welcome Everyone</h1>
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

      <form onSubmit={handleSubmit}>
        <p>
          <b>FEEDBACK FORM</b>
        </p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">(We'll never share your email with anyone else).</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            name="name"
          />
          <div id="nameHelp" className="form-text">(Optional)</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLocation" className="form-label">Location Visited</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputLocation"
            name="location"
          />
          <div id="LocationHelp" className="form-text"></div>
        </div>

        <p>Did you:</p>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="dineIn"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Dine in</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
            name="dineOut"
          />
          <label className="form-check-label" htmlFor="exampleCheck2">Dine out</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default About;