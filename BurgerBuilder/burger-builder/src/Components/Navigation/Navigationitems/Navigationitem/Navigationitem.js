import React from "react";
import classes from "./Navigationitem.module.css";

function Navigationitem(props) {
  return (
    <li className={classes.Navigationitem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
}

export default Navigationitem;
