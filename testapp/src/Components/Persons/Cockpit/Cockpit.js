import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[COCKPIT.JS] useEffect");
    /* setTimeout(() => {
      alert("Save data to cloud");
    }, 1000); */
    return () => {
      console.log("clean up");
    };
  }, []);

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>this is a text </p>
      <button className={btnClass} onClick={props.clicked}>
        TogglePersons{" "}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
