import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.name}</button>;
  }
}

export default Button;
