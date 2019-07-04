import React, { Component } from "react";
import { Route } from "react-router-dom"; // , Redirect
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import Courses from "./Courses";
import SecureRoute from "./SecureRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <SecureRoute path="/profile" component={Profile} auth={this.auth} />
          <Route path="/public" component={Public} />
          <SecureRoute path="/private" componenet={Private} auth={this.auth} />
          <SecureRoute
            path="/courses"
            component={Courses}
            auth={this.auth}
            scopes={["read:courses"]}
          />
        </div>
      </>
    );
  }
}
export default App;
