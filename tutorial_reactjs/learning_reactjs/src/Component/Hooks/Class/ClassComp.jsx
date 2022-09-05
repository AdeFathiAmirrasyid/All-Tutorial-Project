import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumlah: 0,
    };
  }

  addProduct = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.jumlah}</h1>
        <button onClick={this.addProduct}>Tambah Product</button>
      </div>
    );
  }
}
