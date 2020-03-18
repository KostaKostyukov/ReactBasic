import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import classes from "./Logo.module.css";

function Logo(props) {
  return (
    <div>
      <img src={burgerLogo} alt="MyBurger" className={classes.Logo}></img>
    </div>
  );
}

export default Logo;
