import React, { Component } from "react";
import Aux from "../../HOC/Auxi";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
