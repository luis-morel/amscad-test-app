import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import { NavBar } from "./components";
import { About, Feed, Home, Login, Profile } from "./pages"

class App extends React.Component {

  state = {
    loading: "initial",
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    this.setState({ loading: "true" });
    API.getLoggedOnUser()
      .then(res => {
        if (res.data.user) {
          this.setState({
            loading: "false",
            loggedIn: true,
            user: res.data.user
          });
        }
        else {
          this.setState({
            loading: "false",
            loggedIn: false,
            user: null
          });
        };
      });
  }

  handleLogout = () => {
    API.logout()
      .then(() => {
        this.setState({
          user: null,
          loggedIn: false
        });
      });
  };


  setUser = (user) => {
    this.setState({
      user,
      loggedIn: true
    });
  };

  render() {

    // Forgo return() until loading === 'false'
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }

    // Forgo return() until loading === 'false'
    if (this.state.loading === 'true') {
      return <h2>Loading...</h2>;
    }

    return (

      <Router>
        <div>
          <NavBar loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route path='/feed' render={() => <Feed loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/about" render={() => <About loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/home" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/profile" render={() => <Profile loggedIn={this.state.loggedIn} user={this.state.user} />} />
        </div>
      </Router>

    ); // End of return()

  }; // End of render()

}; // End of App.js class component

export default App;