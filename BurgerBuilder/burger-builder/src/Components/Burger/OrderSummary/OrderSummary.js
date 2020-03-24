import React from "react";
import PropTypes from "prop-types";
import Auxi from "../../../HOC/Auxi";

function OrderSummary(props) {
  const ingriSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxi>
      <h3>Your order</h3>
      <p>A Burger with the following stuff</p>
      <ul>{ingriSummary}</ul>
      <p>Continue with check out</p>
    </Auxi>
  );
}

OrderSummary.propTypes = {};

export default OrderSummary;
