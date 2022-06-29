import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

// Ne zaman movie listesini kullanmak istersek MovieContext componentini import ediyoruz.

// MovieProvider componentlere bilgiyi iletir.

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(
    () =>
      localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies"))
        : { name: "The Shawshank Redemption", price: "$10", id: 1 },
    { name: "The Godfather", price: "$8", id: 2 },
    { name: "The Godfather: Part II", price: "$6", id: 3 },
    { name: "The Dark Knight", price: "$11", id: 4 }
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

// {props.children} yazmamızın sebebi tek tek componentleri yazmak yerine içine aldığı bütün childlara propsları gönderir.
