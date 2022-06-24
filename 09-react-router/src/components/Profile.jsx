import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();

  let { username } = useParams();

  return (
    <div>
      <h1>Profile page of {username}</h1>
      <button onClick={() => navigate("/about")}>Go to about page</button>
    </div>
  );
}

export default Profile;
