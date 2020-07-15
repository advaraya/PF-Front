import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";

class Logout extends React.Component {
  state = {
    navigate: false,
  };

  logout = () => {
    localStorage.clear("cookie-login");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return <button onClick={this.logout}>Log out</button>;
  }
}

export default Logout;
