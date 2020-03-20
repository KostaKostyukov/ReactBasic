import React from "react";
import classes from "./Person.css";
import styled from "styled-components";
import Auxi from "../../../HOC/Auxiliry";

const person = props => {
  console.log("person.js rendring ");
  return (
    <Auxi>
      <p onClick={props.click}>
        im {props.name} and im {props.age}{" "}
      </p>
      <p>{props.children}</p>,
      <input type="text" onChange={props.changed} value={props.name}></input>
    </Auxi>
  );

  //<div className={classes.Person}>

  // </div>
};

export default person;
