import React from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./AddNewFloor.css" // Styling

class AddNewFloor extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,
    activeBuilding: {},
    activeBuildingFloorsList: [],
    buildingId: "",
    buildingList: [],
    name: "",
    showFields: { display: "none" }

  }

  // Re-enable redirect once all pages/components are completed
  // componentDidMount = () => {
  //   if (!this.state.loggedIn) {
  //     // Redirect to "/" if user not logged in
  //     return <Redirect to="/" />
  // }

  componentDidMount = () => {
    this.getAllBldgs();
  };

  // duplicateCheck = (value) => {

  // }

  getAllBldgs = () => {
    API.getAllBldgs()
      .then((results) => {
        console.log("getAllBldgs() results: " + JSON.stringify(results));
        this.setState({
          buildingList: results.data
        });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === "buildingId") {
      this.setActiveBuilding(value);
      this.toggleShowFields(value);
    };
  };

  handleNewFloor = event => {
    event.preventDefault();
    const newFloor = event.target.name.value;

    // Input validation
    if (newFloor) {
      API.addNewFloor({
        BuildingId: this.state.activeBuilding.id,
        name: newFloor,
      })
        .then(() => {
          alert("New floor added successfully!");
          this.setState({
            buildingId: "",
            name: ""
          });
          this.toggleShowFields(null);
        });
    }
    else alert("Building and floor name required!");
  };

  setActiveBuilding = (value) => {
    let bldgId = parseInt(value);
    for (let i = 0; i < this.state.buildingList.length; i++) {
      if (bldgId === this.state.buildingList[i].id) {
        this.setState({ activeBuilding: this.state.buildingList[i] });
        API.getFloorsInBldg(bldgId)
          .then((results) => {
            console.log("getFloorsInBldg() results: " + JSON.stringify(results));
            this.setState({
              activeBuildingFloorsList: results.data
            });
          });
        i = this.state.buildingList.length;
      };
    };
  };

  toggleShowFields = (value) => {
    if (value) {
      this.setState({ showFields: { display: "block" } });
    }
    else {
      this.setState({ showFields: { display: "none" } });
    };
  }

  render() {

    // Re-enable redirect once all components/pages are completed
    // if (!this.state.loggedIn) return <Redirect to="/" />

    // this.getAllBldgs();
    // console.log(`AddNewFloor this.state.buildings: \n${this.state.buildings}`);

    return (

      <Wrapper>
        <Row>
          <Col size="md" span="12">
            <div>
              <h3>Building Administration - Add New Floor</h3>
              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md" span="4">
            <div className="genFormSettings">
              <form onSubmit={this.handleNewFloor}>
                <div className="form-group">
                  <label htmlFor="buildingId">Building Name</label>
                  <select name="buildingId" id="buildingNameInput" className="form-control selectStyling" onChange={this.handleInputChange} value={this.state.buildingId} type="buildingId" >
                    <option value="" disabled="">Select a building...</option>
                    {this.state.buildingList.map((building) => (
                      <option key={building.id} data-id={building.id} value={building.id}>{building.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group" style={this.state.showFields}>
                  <label htmlFor="name">Floor Name</label>
                  <input name="name" className="form-control" placeholder="Floor Name..." onChange={this.handleInputChange} value={this.state.name} type="name" required />
                </div>
                <div>
                  <button className="genAppBtn" type="submit">ADD NEW FLOOR</button>
                </div>
              </form>
            </div>
          </Col>
          <Col size="md" span="8">
            <div id="floorDisplay" style={this.state.showFields}>
              <div id="floorDisplayHeader">
                {this.state.activeBuilding.name} > Floors
              </div>
              <hr id="floorDisplayHr"></hr>
              <div id="floorData">
                {this.state.activeBuildingFloorsList.length === 0  ?
                  "* No Floors Have Been Added"
                  :
                  this.state.activeBuildingFloorsList.map((floor) => (
                    // Embed buttons in anchor/link once Add New Rooms page is ready
                    <button key={floor.id} data-id={floor.id} className="floorDisplayBtn">{floor.name}</button>
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

export default AddNewFloor;