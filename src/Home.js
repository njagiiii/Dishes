import React from 'react'

const Home= () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://media.istockphoto.com/id/1203988866/photo/hamburger-with-flying-ingredients.jpg?s=612x612&w=0&k=20&c=_9kctCF9OX33WmIaWLgF8EthWtMZy39hdEY9LZtQHeg=" class="d-block w-100" alt="burger"/>
      </div>
      <div class="carousel-item active">
        <img src="" class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7M6dNz9B9u_DnrZeAszOVRXK_uji2_MzRjcMCbUc0YZRDFyz1Na19SEK6zVYU1B24so&usqp=CAU" class="d-block w-100" alt="image"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Home;
