import React, { useState, useContext } from "react";
import Movie from "./Movie";
// Movie componentine props göndermek için bu componente Movie yi import etmemiz lazım. Çünkü Parent to Child diye ilerler propslar.
import { MovieContext } from "./MovieContext";

function MovieList() {
  //   const [movies, setMovies] = useState([
  //     { name: "The Shawshank Redemption", price: "$10", id: 1 },
  //     { name: "The Godfather", price: "$8", id: 2 },
  //     { name: "The Godfather: Part II", price: "$6", id: 3 },
  //     { name: "The Dark Knight", price: "$11", id: 4 },
  //   ]);
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
  // <Movie/> nin içine göndermek istediğimiz propsları ekliyoruz.
}

export default MovieList;
