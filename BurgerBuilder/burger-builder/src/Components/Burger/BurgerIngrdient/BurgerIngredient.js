import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";
import BurgerBuilder from "../../../Containers/BurgerBuilder/BurgerBuilder";

class BurgerIngredient extends Component {
  render() {
    let ingri = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingri = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingri = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingri = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingri = <div className={classes.Cheese}></div>;
        break;
      case "bacon":
        ingri = <div className={classes.Bacon}></div>;
        break;
      case "salad":
        ingri = <div className={classes.Salad}></div>;
        break;
      default:
        ingri = null;
        break;
    }
    return ingri;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
