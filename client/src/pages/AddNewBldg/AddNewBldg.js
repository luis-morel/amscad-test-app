import React from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";

class AddNewBldg extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    name: "",
    location: ""

  }

  // Re-enable once all pages/components are completed
  // componentDidMount = () => {
  //   if (!this.state.loggedIn) {
  //     // Redirect to "/" if user not logged in
  //     return <Redirect to="/" />
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleNewBldg = event => {
    event.preventDefault();
    const newName = event.target.name.value;
    const newLocation = event.target.location.value;

    // Input validation
    if (newName && newLocation) {
      API.addNewBldg({
        name: newName,
        location: newLocation
      })
        .then(() => {
          alert("New building added successfully!");
          this.setState({
            name: "",
            location: ""
          });
        });
    }
    else alert("All fields required!");
  };

  render() {

    // Re-enable once all components/pages are completed
    // if (!this.state.loggedIn) return <Redirect to="/" />

    return (

      <Wrapper>
        <Row>
          <Col size="md" span="12">
            <div>
              <h3>Building Administration - Add New Building</h3>
              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md" span="4">
            <div className="genFormSettings">
              <form onSubmit={this.handleNewBldg}>
                <div className="form-group">
                  <label htmlFor="name">Building Name</label>
                  <input name="name" className="form-control" placeholder="Building Name..." onChange={this.handleInputChange} value={this.state.name} type="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input name="location" className="form-control" placeholder="Location..." onChange={this.handleInputChange} value={this.state.location} type="location" required />
                </div>
                <div>
                  <button className="genAppBtn" type="submit">ADD NEW BLDG</button>
                </div>
              </form>
            </div>
          </Col>
          <Col size="md" span="4"></Col>
          <Col size="md" span="2"></Col>
        </Row>
      </Wrapper>

    ); // End of return()

  }; // End of render()

}; // End of UserAdmin class component

export default AddNewBldg;