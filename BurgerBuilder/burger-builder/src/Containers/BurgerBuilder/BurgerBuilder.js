import React, { Component } from "react";
import Aux from "../../HOC/Auxi";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseble: false,
    purchasing: false,
    loading: false
  };
  componentDidMount() {
    axios
      .get("https://react-my-burger-c18fa.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({
          ingredients: response.data
        });
      });
  }

  purchase = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  updatePurchaseState(purchaseIngredients) {
    const ingredients = {
      ...purchaseIngredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseble: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngredients);
  };

  purchaseContinueHandler = () => {
    //alert("you continued");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "kosta",
        address: {
          street: "teest",
          zipcode: "124636",
          country: "israel"
        },
        email: "kosta@kosta.com",
        deliveryMethod: "fastest"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngredients);
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          PurchaseCancelled={this.purchaseCancelHandler}
          PurchaseContinued={this.purchaseContinueHandler}
          Price={this.state.totalPrice.toFixed(2)}
        ></OrderSummary>
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }
    let burger = <Spinner></Spinner>;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchaseble={this.state.purchaseble}
            ordered={this.purchase}
          ></BuildControls>
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
