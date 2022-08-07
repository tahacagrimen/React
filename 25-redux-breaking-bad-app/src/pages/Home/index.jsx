import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import "./index.css";
import Masonry from "react-masonry-css";
import { RotatingLines } from "react-loader-spinner";

import { Link } from "react-router-dom";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="36"
            visible={true}
            className="loader"
          />
        )}

        {hasNextPage && !isLoading && (
          <button
            style={{
              visibility: isLoading ? "hidden" : "",
            }}
            onClick={() => dispatch(fetchCharacters(nextPage))}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
