import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.DrawerToggleClicked}></DrawerToggle>
      {/* <Logo></Logo> */}
      <nav>
        <Navigationitems></Navigationitems>
      </nav>
    </header>
  );
}

export default Toolbar;
