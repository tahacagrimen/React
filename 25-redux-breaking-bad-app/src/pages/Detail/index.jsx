import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data));
  }, [char_id]);

  console.log(char);
  return (
    <div>
      {char && (
        <div>
          <h1>{char[0].name}</h1>
          <img src={char[0].img} alt={char.name} />
          <p>{char[0].status}</p>
          <p>{char[0].nickname}</p>
          <p>{char[0].appearance}</p>
          <p>{char[0].portrayed}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
