import React, { Component } from "react";
class Home extends Component {
  Element = null;
  newRender() {
    if (this.props.check) {
      this.Element = this.props.data.map(val => {
        {
          let coloring = {
            fontSize: "48px",
            color: "grey",
          };
          if (val.isFavourite === true) {
            coloring = { ...coloring, color: "red" };
          }
          return (
            <div key={val.id} className="Element" id={val.id}>
              <h1>Planet name :{val.name}</h1>
              <i
                onClick={ele => this.props.addFavourite1(ele, val.id)}
                className="fa fa-heart"
                style={coloring}
              ></i>
            </div>
          );
        }
      });
    }
  }
  render() {
    this.newRender();
    return this.Element;
  }
}

export default Home;
