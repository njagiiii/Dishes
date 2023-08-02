import React from "react";

const Careers = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-11" style={{ marginTop: "20px", marginBottom: "20px", width: "100%"}}>
          <img
            src="https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Chefs learning"
            className="img-thumbnail rounded mx-auto d-block"
            style={{height: "700px", width:"100%"}}
          />
          <div className="middle" style={{position: "absolute",top: "7%", left: "19%", textAlign: "center"}}>
            <div className="text">
              <h1><em><b>CAREERS</b></em></h1>
            </div>
          </div>
        </div>
      </div>
      <p><b>Careers with us?</b></p>
      <p>
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
    </div>
  );
};

export default Careers;
