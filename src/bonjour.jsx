import { Component, Fragment } from "react";

class Bonjour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>
          Bonjour {this.props.name} {this.props.prenom}
        </h1>
      </Fragment>
    );
  }
}

export default Bonjour;
