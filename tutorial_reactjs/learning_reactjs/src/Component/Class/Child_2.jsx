import React, { Component } from 'react';
import GrandChild from './GrandChild';

export default class Child_2 extends Component {
  render() {
    return (
      <div>
        <h3>Child 2</h3>
        <GrandChild data={this.props.stock}/>
      </div>
    );
  }
}
