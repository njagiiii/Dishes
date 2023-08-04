import React from "react";

const Careers = () => {
  //This function handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Check if the current hour is past 4 pm (16:00)
    const isPast4PM = currentHour >= 16 || currentHour < 9;

    // Show different messages based on the time
    const toastElement = document.querySelector(".toast-bodi"); // Use querySelector to get the specific element
    if (isPast4PM) {
      toastElement.textContent =
        "We are currently closed for applications. Please apply during our working hours.";
    } else {
      toastElement.textContent =
        "Your application has been received. Thank you for contacting us!";
    }

    //shows the toast message
    const liveToast = document.getElementById("liveToast");
    liveToast.classList.add("show");

    //this hides the toast message after 4 seconds
    setTimeout(() => {
      liveToast.classList.remove("show");
    }, 4000);
  }

  return (
    <div className="container">
       <h1 style={{textAlign:"center"}}> Careers </h1>
      <div className="row">
        <div className="col-md-12 mb-4 mt-4 ">
          <img
            src="https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Chefs learning"
            className="img-thumbnail rounded mx-auto d-block"
            style={{ height: "700px", width: "100%" }}
          />
          <div
            className="carousel-middle"
            style={{
              position: "absolute",
              top: "7%",
              left: "19%",
              textAlign: "center",
            }}
          >
          </div>
        </div>
      </div>
      <p>
        <b style={{fontSize:"25px"}}>Careers with us?</b>
      </p>
      <p style={{fontSize:"22px"}}>
        We are always looking for eager, hard working people with exciting
        personalities, a passion for superb service and an eye for detail. We
        offer flexible hours, hands on training, competitive wages and staff
        incentives. Tasty Dishes is always accepting applications for all
        positions and we believe that every person that comes through our front
        door looking for work deserves a moment of our time. Please feel free to
        drop by any of our locations any day of the week between 9:00am and
        4:00pm to speak with a manager or just fill in the form below with your
        data and position you’re applying for.
      </p>
      {/* he application form */}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label htmlFor="Full Name" style={{fontSize:"20px"}}>Full Name: </label>
          <input class="form-control" type="text" name="fullname" required></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="Email"  style={{fontSize:"20px"}}>Email: </label>
          <input class="form-control" type="email" name="email" required></input>
        </div>
        <div className="col-12">
          <label htmlFor="Position"  style={{fontSize:"20px"}}>Position: </label>
          <select class="form-select">
            <option selected style={{ textAlign: "center" }}>
              Select Position...
            </option>
            <option value="Barista">Barista</option>
            <option value="Chef">Chef</option>
            <option value="Sous Chef">Sous chef</option>
            <option value="Commi 1">Commi 1</option>
            <option value="Commi 2">Commi 2</option>
            <option value="Waiter/waitress">Waiter/waitress</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="Resume"  style={{fontSize:"20px"}}>Resume: </label>
          <input class="form-control" type="file"></input>
        </div>
        <div class="col-12 mb-3">
          <button type="submit" className="btn " id="liveToastBtn"  style={{backgroundColor:"#547043", color:"white", padding:"15px 35px",fontSize:"25px"}}>
            Send
          </button>
        </div>
      </form>

      {/* this is the toast message body */}
      <div class="toast-container position-fixed top-0 end-0 p-3">
        <div id="liveToast" class="toast">
          <div class="toast-header">
            <i class="bi bi-chat-left-fill" style={{ color: "lightblue" }}></i>
            <strong class="me-auto">&nbsp;&nbsp;Tasty Dishes</strong>
            <small>{new Date().toLocaleString()}</small>
          </div>
          <div class="toast-body">
            <em class="toast-bodi"></em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
