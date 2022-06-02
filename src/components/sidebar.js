import { Component } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <h1> {this.props.title} </h1>
        <li>Fisrt</li>
      </nav>
    );
  }
}
export default SideBar;
