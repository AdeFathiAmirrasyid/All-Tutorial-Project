import React, { Component } from "react";

export default class Child_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  minBeli = 1;
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <p> Stock Product : {this.props.stock}</p>
        <button onClick={() => this.props.fungsi(this.minBeli)}>Beli</button>
      </div>
    );
  }
}
