import React from "react";
import Navbar from "../components/Navbar";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies-page">
      <Navbar />

      <div className="banner">
        <img
    src="https://images8.alphacoders.com/113/thumb-1920-1130049.jpg"
    alt="Harry Potter"
  />
        <div className="banner-text">
          <h1>Harry Potter</h1>
          <p>
            A young wizard, Harry Potter, discovers his magical heritage and battles the dark wizard Voldemort to protect the wizarding world. Along the way, he learns the power of friendship, bravery, and love.
          </p>
          <div className="buttons">
            <button className="play">Play</button>
            <button className="info">More Info</button>
          </div>
        </div>
      </div>

      <div className="row">
        <h2>Popular on PRISOW</h2>
        <div className="movie-list">
        <img src="https://image.tmdb.org/t/p/original/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg" alt="movie poster" />
         <img src="https://media-cache.cinematerial.com/p/500x/wo2fydih/wednesday-movie-cover.jpg?v=1700736342" alt="movie poster" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/8d8f28105415493.619ded067937d.jpg" alt="movie poster"/>
          <img src="https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg" alt="movie poster"/>
          <img src="https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg?region=0%2C0%2C540%2C810" alt="movie poster"/>
          <img src="https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_.jpg" alt="movie poster"/>
         
          
        </div>
      </div>
    </div>
  );
}

export default Movies;