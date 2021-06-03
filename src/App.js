import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Register from "./components/Register";
import decoder from "jwt-decode";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const user = decoder(token);
        this.setState({ ...this.state, user, isAuthenticated: true });
      } else {
        this.setState({ ...this.state, user: null, isAuthenticated: false });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Landing {...props} state={this.state} />}
            />
            <Route
              exact
              path="/home"
              render={(props) => <Home {...props} state={this.state} />}
            />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
