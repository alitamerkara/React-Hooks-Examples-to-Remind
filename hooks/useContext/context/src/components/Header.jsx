import React from "react";
import { MainContext, useContext } from "./Context";

const Header = () => {
  const { theme } = useContext(MainContext);
  return <div>theme is : {theme}</div>;
};

export default Header;
