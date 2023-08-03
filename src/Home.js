import React from 'react';

const Home = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img
              src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/01/Charcuterie_Darina-Kopcok.jpg?fit=750%2C558&ssl=1"
              className="d-block w-100"
              alt="food plate"
            />
          </div>

          
          <div className="carousel-item">
            <img
              src="https://3.bp.blogspot.com/-DYDzOymPQSA/XIW4TsE7ZQI/AAAAAAAAHzw/mulRYiNTrvov-gN7Eu-45K4UDBltRvmsQCHMYCw/s1600/italian-food-images-pizza-pie-hd-wallpaper-and-background-photos.jpg"
              className="d-block w-100"
              alt="food"
            />
          </div>

                    <div className="carousel-item">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/111/444/15/food-chocolate-cinnamon-star-anise-wallpaper-preview.jpg"
              className="d-block w-100"
              alt="tasty"
            />
          </div>

          
          <div className="carousel-item">
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/04/food-photography-blogs-spread.jpg"
              className="d-block w-100"
              alt="tasty"
            />
          </div>
        </div>
      </div>

      
      <div className="d-flex justify-content-around my-5">
        <div style={{ position: 'relative', textAlign: 'center', width: '30%' }}>
          <img
            src="https://img.freepik.com/free-photo/fried-chicken-wings-with-french-fries-tomato_74190-6309.jpg?w=2000"
            alt="food 3"
            style={{ width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            flamed chicken
          </div>
        </div>
        <div style={{ position: 'relative', textAlign: 'center', width: '30%' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycFfiZusrBMbke5r2KmX6G_L2WgGjOcgRhA&usqp=CAU"
            alt="food 4"
            style={{ width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            Juicy Yummy !
          </div>
        </div>
      </div>

<div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          We're committed to great food, great coffee, great service, an experience that will make your time with us fabulous. All visuals are serving suggestions only.
          Prices are quoted in Kenyan Shillings and inclusive of VAT.
        </p>
      </div>

      
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <img
          src="https://img.freepik.com/premium-vector/tasty-food-chef-logo-mascot-template_190190-133.jpg" // Replace with your actual logo URL
          alt="food restaurant logo"
          style={{ width: '120px' }}
        />
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '5px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
            textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Welcome to Tasty Dishees!
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            textAlign: 'center',
            color: '#666',
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px',
          }}
        >
          Explore our delicious menu and place your order today!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn btn-primary"
            onClick={() => alert('You clicked the Place Order button!')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: 'black',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;







