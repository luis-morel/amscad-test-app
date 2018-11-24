import React from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";

class AddNewUser extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,

    name: "",
    title: "",
    userImageUrl: "",
    email: "",
    password: ""

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

  handleNewUser = event => {
    event.preventDefault();
    const newName = event.target.name.value;
    const newTitle = event.target.title.value;
    const newUserImageUrl = event.target.userImageUrl.value;
    const newEmail = event.target.email.value;
    const newPassword = event.target.password.value;

    // Input validation
    if (newName && newTitle && newUserImageUrl && newEmail && newPassword) {
      API.addNewUser({
        name: newName,
        title: newTitle,
        userImageUrl: newUserImageUrl,
        email: newEmail,
        password: newPassword
      })
        .then(() => {
          alert("New user added successfully!");
          this.setState({
            name: "",
            title: "",
            userImageUrl: "",
            email: "",
            password: ""
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
              <h3>User Administration - Add New User</h3>
              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md" span="4">
            <div className="genFormSettings">
              <form onSubmit={this.handleNewUser}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input name="name" className="form-control" placeholder="Name..." onChange={this.handleInputChange} value={this.state.name} type="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input name="title" className="form-control" placeholder="Title..." onChange={this.handleInputChange} value={this.state.title} type="title" required />
                </div>
                <div className="form-group">
                  <label htmlFor="userImageUrl">Profile Image Url</label>
                  <input name="userImageUrl" className="form-control" placeholder="Profile Image Url..." onChange={this.handleInputChange} value={this.state.userImageUrl} type="userImageUrl" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input name="email" className="form-control" placeholder="Email..." onChange={this.handleInputChange} value={this.state.email} type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input name="password" className="form-control" placeholder="Password..." onChange={this.handleInputChange} value={this.state.password} type="password" required />
                </div>
                <div>
                  <button className="genAppBtn" type="submit">ADD NEW USER</button>
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

export default AddNewUser;