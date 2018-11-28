import React from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./AddNewRoom.css" // Styling

class AddNewRoom extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    buildingId: this.props.params.bldgId,
    floor: {},
    floorId: this.props.params.floorId,
    floorName: "",
    building: {},
    buildingName: "",
    roomList: [],
    roomName: ""

  }

  // Authentication redirect temporarily disabled
  componentDidMount = () => {
    //   if (!this.state.loggedIn) {
    //     // Redirect to "/" if user not logged in
    //     return <Redirect to="/" />
    this.getActiveBuilding(this.state.buildingId);
    this.getActiveFloor(this.state.floorId);
    this.getRoomList(this.state.floorId);
    console.log(`\nAddNewRooms props = ${JSON.stringify(this.props)}`);
  };

  duplicateCheck = (newRoomName) => {
    let list = this.state.roomList;
    for (let i = 0; i < list.length; i++) {
      if (newRoomName === list[i].name) return true;
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

  getActiveFloor = (floorId) => {
    API.getOneFloor(floorId)
      .then((results) => {
        console.log(`\ngetActiveFloor() 'results' = ${JSON.stringify(results)}\n`);
        this.setState({
          floor: results.data,
          floorName: results.data.name
        });
      });
  };

  getRoomList = (floorId) => {
    API.getRoomsInFloor(floorId)
      .then((results) => {
        console.log(`getRoomsInFloor() results: ${JSON.stringify(results)}`);
        this.setState({ roomList: results.data });
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNewRoom = event => {
    event.preventDefault();
    let newRoomName = event.target.roomName.value;
    // Input validation and submission
    if (newRoomName) {
      newRoomName = this.props.titleCase(newRoomName);
      let result = this.duplicateCheck(newRoomName);
      if (!result) {
        API.addNewRoom({
          FloorId: this.state.floorId,
          name: newRoomName,
        })
          .then(() => {
            this.getRoomList(this.state.floorId);
            alert("New room added successfully!");
            this.setState({ roomName: "" });
          });
      }
      else alert("Floor name already exists! Please use a different name!");
    }
    else alert("Room name required! Please enter a room name.")
  };

  render() {

    // Authentication redirect temporarily disabled
    // if (!this.state.loggedIn) return <Redirect to="/" />

    return (

      <Wrapper>
        <Row>

          <Col size="md" span="12">
            <div>
              <h3>Building Administration - Add New Room</h3>
              <hr />
            </div>
          </Col>

        </Row>

        <Row>

          <Col size="md" span="4">
            <div className="genFormSettings">
              <form onSubmit={this.handleNewRoom}>

                <div className="form-group">
                  <label htmlFor="buildingName">Building Name</label>
                  <input name="buildingName" className="form-control" value={this.state.buildingName} type="buildingName" readOnly></input>
                </div>

                <div className="form-group">
                  <label htmlFor="floorName">Floor Name</label>
                  <input name="floorName" className="form-control" value={this.state.floorName} type="floorName" readOnly></input>
                </div>

                <div className="form-group">
                  <label htmlFor="roomName">Room Name</label>
                  <input name="roomName" className="form-control" placeholder="Room Name..." onChange={this.handleInputChange} value={this.state.roomName} type="roomName" />
                </div>

                <div>
                  <button className="genAppBtn" type="submit">ADD NEW ROOM</button>
                </div>

              </form>
            </div>
          </Col>

          <Col size="md" span="8">
            <div id="roomDisplay">

              <div id="roomDisplayHeader">
                {this.state.buildingName} > Floor: {this.state.floorName} > Rooms
              </div>

              <hr id="roomDisplayHr" />

              <div id="roomData">
                {
                  this.state.roomList.length === 0 ?
                    "* No Rooms Have Been Added"
                    :
                    this.state.roomList.map((room) => (
                      <button key={room.id} className="roomDisplayBtn">{room.name}</button>
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

export default AddNewRoom;