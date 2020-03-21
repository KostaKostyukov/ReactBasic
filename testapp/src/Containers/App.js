import React, { Component } from "react";
import classes from "./App.css";
import Person from "../Components/Persons/Person/Person";
import person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Persons/Cockpit/Cockpit";
import withClass from "../HOC/WithClass";
import Auxi from "../HOC/Auxiliry";
import AuthContext from "../Context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[APP.JS] c'tor");
  }
  state = {
    persons: [
      {
        id: "jhjhdfsf",
        name: "kosta",
        age: 23
      },
      {
        id: "jhjhdfsfqrq",
        name: "katia",
        age: 29
      },
      {
        id: "jhjhdfsfsxggqrq",
        name: "kajksjfas",
        age: 29
      }
    ],
    showPersons: false,
    changeCounter: 0,
    autho: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[app.js] getderivedstate ");
    return state;
  }

  componentDidMount() {
    console.log("app.js component did mount");
  }
  shouldComponentUpdate(nextProp, nextState) {
    console.log("[component shouldUpdate]");
    /* if (nextProp.persons !== this.props.persons) {
      return true;
    } else return false; */
    return true;
  }
  loginHandler = () => {
    this.setState({ autho: true });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  deletePersonHandler = Personindex => {
    const persons = this.state.persons.slice();
    persons.splice(Personindex, 1);
    this.setState({
      persons: persons
    });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      };
    });
  };
  render() {
    console.log("app.js render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAutho={this.state.autho}
        ></Persons>
      );
      //      btnClass.push(classes.Red);
    }

    return (
      //<div className={classes.App}>
      <Auxi>
        <AuthContext.Provider
          value={{ autho: this.state.autho, login: this.loginHandler }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          ></Cockpit>
          {persons}
        </AuthContext.Provider>
      </Auxi>
      //</div>
    );
  }
}

export default withClass(App, classes.App);
