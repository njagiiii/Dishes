import React from 'react'

const Home= () => {
  return (

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" className="d-block w-100" alt="food plate"/>
      </div>
      <div className="carousel-item">
        <img src="https://images.squarespace-cdn.com/content/v1/51f9ecc2e4b0cc5aa44cb93a/1412107808846-K5930U0Z6DXUCFW0EA5Z/_MG_4145.jpg" className="d-block w-100" alt="food"/>
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTnGUbmvNvYjK1ZZMNOj6ory-5S-OG-H5yMwdGiptj6iS2BKAYrOFBtk-VrmWxcRrmxA&usqp=CAU" className="d-block w-100" alt="tasty"/>
      </div>
      <div className="carousel-item">
      <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/04/food-photography-blogs-spread.jpg" className="d-block w-100" alt="tasty"/>
      </div>
    </div>
  </div>
  
  )
}

export default Home;
