import React from "react";
import './typewriter.css';

type TypewriterProps = {
  static: string,
  dynamic: string[]
}

type TypewriterState = {
  productIndex: number,
  charIndex: number
}



// const element = document.getElementById('typewriter-text');
// var productIndex = 0;
// var charIndex = 0;
// var timer = 0;

export default class Typewriter extends React.Component<TypewriterProps, TypewriterState> {
  constructor(props) {
    super(props);
    this.state = {
      productIndex: 0,
      charIndex: 0
    }

    this.tick = this.tick.bind(this);

    setInterval(this.tick, 100);
  }

  tick() {
    var charIndex = this.state.charIndex + 1;
    var productIndex = this.state.productIndex;

    if (charIndex > this.props.dynamic[productIndex].length + 10) {
      charIndex = 0;
      productIndex = (productIndex + 1) % this.props.dynamic.length;
    }

    document.getElementById("typewriter-text").innerHTML = `${this.props.static}${this.props.dynamic[productIndex].slice(0, charIndex)}`;

    this.setState({
      charIndex: charIndex,
      productIndex: productIndex
    });
  }

  render() {
    return <h1 id="typewriter-text">{this.props.static}</h1>;
  }
}