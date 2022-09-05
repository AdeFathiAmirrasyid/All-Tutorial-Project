import React, { Component } from "react";
import Child_1 from "./Child_1";
import Child_2 from "./Child_2";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: 15,
    };
  }

  handleBeliProduct = (jumlah) => {
    this.setState({
      stock: this.state.stock - jumlah,
    });
  };

  render() {
    return (
      <div>
        <Child_1
          stock={this.state.stock}
          fungsi={this.handleBeliProduct.bind(this)}/>
        <Child_2
           stock={this.state.stock}
         />
      </div>
    );
  }
}
