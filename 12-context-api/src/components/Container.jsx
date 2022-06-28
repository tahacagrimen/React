import React from "react";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "../context/TeamContext";
import { useContext } from "react";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Header />
      <hr />
      <Button />
    </div>
  );
}

export default Container;
