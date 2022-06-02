import { Component } from "react";
import Button from "../button";
import "./nav.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="inline">
            <Button name="Home" />
          </li>
          <li className="inline">
            <Button name="Test" />
          </li>
          <li className="inline">
            <Button name="About" />
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
