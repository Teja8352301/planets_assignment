import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/NavItem/Navbar";
import React, { Component } from "react";
import axios from "axios";
import * as actionTypes from "./actionTypes/actionTypes";
import Element from "./Element/Element";
import Favourites from "./containers/Home/Favourites/Favourites";
import Home from "./containers/Home/Home";
class App extends Component {
  componentDidMount() {
    this.props.planetsAdded();
  }
  addToFav(ele, id) {
    this.props.addFavourites(id);

    let index = this.props.data.findIndex(val => {
      return val.id === id;
    });
    if (this.props.data[index].isFavourite) {
      ele.target.style.color = "red";
    } else {
      ele.target.style.color = "grey";
    }
  }

  render() {
    let home = (
      <Home
        data={this.props.data}
        check={this.props.check}
        addFavourite1={(ele, id) => this.addToFav(ele, id)}
      />
    );
    return (
      <React.Fragment>
        <Navbar />
        <Route path="/Home" exact render={() => home} />
        <Route path="/Favourites" exact component={Favourites} />
      </React.Fragment>
    );
  }
}
let stateToProps = state => {
  if (state) {
    return {
      data: state.planets,
      check: state.check,
    };
  } else {
    return {};
  }
};
let propsToStore = dispatch => {
  return {
    planetsAdded: () => dispatch(actionTypes.addPlanets()),
    addFavourites: id => dispatch({ type: "ADD_FAV", id: id }),
  };
};

export default connect(stateToProps, propsToStore)(App);
