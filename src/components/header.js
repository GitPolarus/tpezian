import { Component } from "react";
import Footer from "./footer";
import NavBar from "./navbar/navbar";

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Header</h3>
        <NavBar />
        <Footer />
      </header>
    );
  }
}

export default Header;
