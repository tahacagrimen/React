import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={updateName} />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={updatePrice}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddMovie;
