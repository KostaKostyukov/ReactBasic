import React from 'react';
import classes from './Person.css';
import styled from 'styled-components';

const person = (props) => {
    console.log("person.js rendring ");
    return (
        <div className = {classes.Person}>
            <p onClick = {props.click}>im {props.name} and im {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}></input>
        </div>
    )
};

export default person;