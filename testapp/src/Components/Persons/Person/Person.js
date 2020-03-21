import React from "react";
import classes from "./Person.css";
import Auxi from "../../../HOC/Auxiliry";
import withClass from "../../../HOC/WithClass";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

const person = props => {
  console.log("person.js rendring ");

  return (
    <Auxi>
      <AuthContext.Consumer>
        {context => (context.autho ? <p>Wellcome</p> : <p>Please login</p>)}
      </AuthContext.Consumer>

      <p onClick={props.click}>
        im {props.name} and im {props.age}{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </Auxi>
  );

  //<div className={classes.Person}>

  // </div>
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(person, classes.Person);
