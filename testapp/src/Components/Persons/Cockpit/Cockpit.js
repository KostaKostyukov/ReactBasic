import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../../Context/auth-context";

const Cockpit = props => {
  const toggleButtonRef = useRef(null);

  // this presses the button the moment the page renders.
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);

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
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        TogglePersons{" "}
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
