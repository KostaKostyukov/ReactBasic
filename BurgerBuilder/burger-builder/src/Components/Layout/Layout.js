import React from "react";
import Aux from "../../HOC/Auxi";
import styles from "./Layout.module.css";
const layout = props => (
  <Aux>
    <div>ToolBar , sidedrawer , backDrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
