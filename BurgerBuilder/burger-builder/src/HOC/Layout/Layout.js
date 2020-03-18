import React from "react";
import Aux from "../Auxi";
import styles from "./Layout.module.css";
import ToolBar from "../../Components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../Components/Navigation/SideDrawer/Sidedrawer";

const layout = props => (
  <Aux>
    <ToolBar></ToolBar>
    <Sidedrawer></Sidedrawer>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
