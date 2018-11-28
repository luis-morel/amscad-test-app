import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./AddNewFloor.css" // Styling

class AddNewFloor extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    building: {},
    buildingId: this.props.params.bldgId,
    buildingName: "",
    floorList: [],
    floorName: ""

  }

  // Authentication redirect temporarily disabled
  componentDidMount = () => {
    //   if (!this.state.loggedIn) {
    //     // Redirect to "/" if user not logged in
    //     return <Redirect to="/" />
    this.getActiveBuilding(this.state.buildingId);
    this.getFloorList(this.state.buildingId);
  }

  duplicateCheck = (newFloorName) => {
    let list = this.state.floorList;
    for (let i = 0; i < list.length; i++) {
      if (newFloorName === list[i].name) return true;
    };
    return false;
  }

  getActiveBuilding = (bldgId) => {
    API.getOneBldg(bldgId)
      .then((results) => {
        console.log(`\ngetActiveBuilding() results = ${JSON.stringify(results)}\n`);
        this.setState({
          building: results.data,
          buildingName: results.data.name
        });
      });
  };

  getFloorList = (bldgId) => {
    API.getFloorsInBldg(bldgId)
      .then((results) => {
        console.log(`\ngetFloorList() results = ${JSON.stringify(results)}\n`);
        this.setState({ floorList: results.data });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNewFloor = event => {
    event.preventDefault();
    let newFloorName = event.target.floorName.value;
    // Input validation and submission
    if (newFloorName) {
      newFloorName = this.props.titleCase(newFloorName);
      let result = this.duplicateCheck(newFloorName);
      if (!result) {
        API.addNewFloor({
          BuildingId: this.state.buildingId,
          name: newFloorName,
        })
          .then(() => {
            this.getFloorList(this.state.buildingId);
            alert("New floor added successfully!");
            this.setState({ floorName: "" });
          });
      }
      else alert("Floor name already exists! Please use a different name!");
    }
    else alert("Floor name required! Please enter a floor name.");
  };

  render() {

    // Authentication redirect temporarily disabled
    // if (!this.state.loggedIn) return <Redirect to="/" />

    return (

      <Wrapper>
        <Row>

          <Col size="md" span="12">
            <div>
              <h3>Building Administration - Add New Floor</h3>
              <hr />
            </div>
          </Col>

        </Row>

        <Row>

          <Col size="md" span="4">
            <div className="genFormSettings">
              <form onSubmit={this.handleNewFloor}>

                <div className="form-group">
                  <label htmlFor="buildingName">Building Name</label>
                  <input name="buildingName" className="form-control" value={this.state.buildingName} type="buildingName" readOnly></input>
                </div>

                <div className="form-group" style={this.state.showFields}>
                  <label htmlFor="floorName">Floor Name</label>
                  <input name="floorName" className="form-control" placeholder="Floor Name..." onChange={this.handleInputChange} value={this.state.floorName} type="floorName" />
                </div>

                <div>
                  <button className="genAppBtn" type="submit">ADD NEW FLOOR</button>
                </div>

              </form>
            </div>
          </Col>

          <Col size="md" span="8">
            <div id="floorDisplay">

              <div id="floorDisplayHeader">
                {this.state.buildingName} > Floors
              </div>

              <hr id="floorDisplayHr"/>

              <div id="floorData">
                {
                  this.state.floorList.length === 0 ?
                    "* No Floors Have Been Added"
                    :
                    this.state.floorList.map((floor) => (
                      <Link
                      key={floor.id}
                      to={{ pathname: `/buildings/floors/rooms/addnewroom/${this.state.buildingId}/${floor.id}` }}
                      target="_blank"
                      >
                      <button className="floorDisplayBtn">{floor.name}</button>
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

export default AddNewFloor;