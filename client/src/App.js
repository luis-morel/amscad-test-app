import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import { NavBar } from "./components";
import { AddNewBldg, AddNewFloor, AddNewRoom, AddNewUser, Login } from "./pages"
import "./App.css"; // Styling

class App extends React.Component {

  state = {

    loading: "initial",
    loggedIn: false,
    user: null,

  }

  componentDidMount() {

    // Authentication temporarily disabled
    this.setState({ loading: "false" });

    // Authentication Temporarily disabled
    // this.setState({ loading: "true" });
    // API.getLoggedOnUser()
    //   .then(res => {
    //     if (res.data.user) {
    //       this.setState({
    //         loading: "false",
    //         loggedIn: true,
    //         user: res.data.user
    //       });
    //     }
    //     else {
    //       this.setState({
    //         loading: "false",
    //         loggedIn: false,
    //         user: null
    //       });
    //     };
    //   });

  }

  handleLogout = () => {
    API.logout()
      .then(() => {
        // Move setState outside callback?
        this.setState({
          user: null,
          loggedIn: false
        });
        // Add a redirect to login page here
      });
  };

  setUser = (user) => {
    this.setState({
      user,
      loggedIn: true
    });
  };

  titleCase = (str) => {
    return str.toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  }

  render() {

    // Prevents rendering until component mounts && loading === false
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }

    // Prevents rendering until component mounts && loading === false
    if (this.state.loading === 'true') {
      return <h2>Loading...</h2>;
    }

    return (

      <Router>

        <div>
          <NavBar/>
          <Route exact path="/"
            render={() =>
              <Login
                loggedIn={this.state.loggedIn}
                user={this.state.user}
                setUser={this.setUser}
              />}
          />
          <Route exact path="/buildings/addnewbldg"
            render={() =>
              <AddNewBldg
                loggedIn={this.state.loggedIn}
                user={this.state.user}
                titleCase={this.titleCase}
              />}
          />
          <Route exact path="/buildings/floors/addnewfloor/:bldgId"
            render={({ match }) =>
              <AddNewFloor
                loggedIn={this.state.loggedIn}
                user={this.state.user}
                params={match.params}
                titleCase={this.titleCase}
              />}
          />
          <Route exact path="/buildings/floors/rooms/addnewroom/:bldgId/:floorId"
            render={({ match }) =>
              <AddNewRoom
                loggedIn={this.state.loggedIn}
                user={this.state.user}
                params={match.params}
                titleCase={this.titleCase}
              />}
          />
          <Route exact path="/users/addnewuser"
            render={() =>
              <AddNewUser
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />}
          />
          <Route exact path="/login"
            render={() =>
              <Login
                setUser={this.setUser}
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />}
          />
          {/* NEED TO ADD A CATCH-ALL ROUTE FOR PAGES NOT FOUND */}
        </div>

      </Router>

    ); // End of return()

  }; // End of render()

}; // End of App.js class component

export default App;