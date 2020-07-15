import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Signin from "./components/Registro/Registro";
import Listing from "./components/Listado/Listado";
import MyCreateAd from "./components/CrearAd/CrearAd";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ChangePassword from "./components/ChangePassword/ChangePassword";

import Ad from "./components/DetalleAnuncio/DetalleAnuncio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/*<a className="navbar-brand" href="#">
                <img src={logo} className="App-logo" alt="logo" />
              </a>*/}

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Listing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <hr />
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Listing} />
              <Route path="/password-reset" component={PasswordReset} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/ad-details/:urlAnuncio" component={Ad} />
              <Route path="/ad-create" component={MyCreateAd} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
