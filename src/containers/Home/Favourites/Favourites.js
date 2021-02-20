import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
class Favourites extends Component {
  render() {
    let favourites = null;
    if (this.props.check) {
      let newArray = this.props.data.filter(val => {
        return val.isFavourite === true;
      });
      //   console.log(newArray);

      favourites = newArray.map(val => {
        return (
          <div key={val.id} className="Element">
            <h1>Planet name :{val.name}</h1>
          </div>
        );
      });
    }
    console.log(favourites);
    return <div>{favourites}</div>;
  }
}
let storeToProps = state => {
  if (state) {
    return {
      data: state.planets,
      check: state.check,
    };
  } else {
    return {};
  }
};

export default connect(storeToProps)(Favourites);
