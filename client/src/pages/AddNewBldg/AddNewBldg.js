import React from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
// import "./AddNewBldg.css" // Styling

class AddNewBldg extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    name: "",
    location: ""

  }

  // Re-enable redirect once all pages/components are completed
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

    // Re-enable redirect once all components/pages are completed
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
                  <select name="location" id="locationInput" className="form-control selectStyling" onChange={this.handleInputChange} value={this.state.location} type="location" >
                    <option value="" disabled>Location (US State)...</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Lousisana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hamsphire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconson">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                </div>
                <div>
                  <button className="genAppBtn" type="submit">ADD NEW BLDG</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Wrapper >

    ); // End of return()

  }; // End of render()

}; // End of UserAdmin class component

export default AddNewBldg;