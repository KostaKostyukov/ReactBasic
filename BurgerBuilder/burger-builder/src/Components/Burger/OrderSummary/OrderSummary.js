import React, { Component } from "react";
import Auxi from "../../../HOC/Auxi";
import Button from "../../UI/Button/Button";

export default class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("OrderSummaryy will update");
  }
  render() {
    const ingriSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Auxi>
        <h3>Your order</h3>
        <p>A Burger with the following stuff</p>
        <ul>{ingriSummary}</ul>
        <p>Continue with check out</p>
        <p>
          <strong>Total Price : {this.props.Price}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.PurchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.PurchaseContinued}>
          CONTINUE
        </Button>
      </Auxi>
    );
  }
}
