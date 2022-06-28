import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "johndoe",
        bio: "I am a software developer",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleLogin}>{loading ? "loading" : "Login"}</button>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
