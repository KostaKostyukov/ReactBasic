import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/Navigationitems";
import classes from "./Sidedrawer.module.css";

function Sidedrawer(props) {
  return (
    <div className={classes.Sidedrawer}>
      {/* <Logo></Logo> */}
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
}

export default Sidedrawer;
