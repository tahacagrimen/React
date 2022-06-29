import React, { useContext } from "react";
import "./Nav.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="Nav">
      <h3>Taha Çağrı Men</h3>
      <p>List Of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
