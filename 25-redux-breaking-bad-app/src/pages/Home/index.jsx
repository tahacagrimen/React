import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import "./index.css";
import Masonry from "react-masonry-css";
import { RotatingLines } from "react-loader-spinner";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        className="loader"
      />
    );
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div>
      <h2>Characters</h2>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.id}>
            <img
              src={character.img}
              alt={character.name}
              className="character"
            />
            <h3>{character.name}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
