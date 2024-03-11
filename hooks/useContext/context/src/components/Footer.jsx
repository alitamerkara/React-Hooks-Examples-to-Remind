import React from "react";
import { MainContext, useContext } from "./Context";

const Footer = () => {
  const { theme, setTheme } = useContext(MainContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Footer;
