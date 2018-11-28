import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./AddNewBldg.css" // Styling

class AddNewBldg extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    buildingList: [],
    name: "",
    location: "",
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
      'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
      'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  }

  // Authentication redirect temporarily disabled
  componentDidMount = () => {
    //   if (!this.state.loggedIn) {
    //     // Redirect to "/" if user not logged in
    //     return <Redirect to="/" />
    this.getBuildingList();
  }

  duplicateCheck = (name, location) => {
    let list = this.state.buildingList;
    for (let i = 0; i < list.length; i++) {
      if (name === list[i].name && location === list[i].location) {
        return true;
      };
    };
    return false;
  }

  getBuildingList = () => {
    API.getAllBldgs()
      .then((results) => {
        console.log(`\ngetBuildingList() results = ${JSON.stringify(results)}\n`);
        this.setState({ buildingList: results.data });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNewBldg = event => {
    event.preventDefault();
    let newName = event.target.name.value;
    const newLocation = event.target.location.value;
    // Input validation and submission
    if (newName && newLocation) {
      newName = this.props.titleCase(newName);
      let result = this.duplicateCheck(newName, newLocation);
      if (!result) {
        API.addNewBldg({
          name: newName,
          location: newLocation
        })
          .then(() => {
            this.getBuildingList();
            alert("New building added successfully!");
            this.setState({
              name: "",
              location: ""
            });
          });
      }
      else alert("Building already exists! Please use a different name and/or location.");
    }
    else alert("All fields required!");
  };

  render() {

    // Authentication redirect temporarily disabled
    // if (!this.state.loggedIn) return <Redirect to="/" />

    return (

      <Wrapper>
        <Row>

          <Col size="md" span="12">
            <div>
              <h3>Building Administration - Add New Building</h3>
              <hr />
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
                    {
                      this.state.states.map((stateName) => (
                        <option key={stateName} value={stateName}>{stateName}</option>
                      ))
                    }
                  </select>
                </div>

                <div>
                  <button className="genAppBtn" type="submit">ADD NEW BLDG</button>
                </div>

              </form>
            </div>
          </Col>

          <Col size="md" span="8">
            <div id="buildingDisplayContainer">

              <div id="buildingDisplayHeader">Buildings</div>
              <hr id="buildingDisplayHr" />

              <div id="buildingDisplay">
                {
                  this.state.buildingList.length === 0 ?
                    "* No Buildings Have Been Added"
                    :
                    this.state.buildingList.map((building) => (
                      <Link
                        key={building.id}
                        to={{ pathname: `/buildings/floors/addnewfloor/${building.id}` }}
                        target="_blank"
                      >
                        <button className="buildingDisplayBtn">
                          {building.name}, {building.location}
                        </button>
                      </Link>
                    ))
                }
              </div>

            </div>
          </Col>

        </Row>
      </Wrapper >

    ); // End of return()

  }; // End of render()

}; // End of UserAdmin class component

export default AddNewBldg;