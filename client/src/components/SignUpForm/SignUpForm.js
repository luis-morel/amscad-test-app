import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./SignUpForm.css"; // Sign-Up Form CSS

const SignUpForm = ({

  handleInputChange,
  handleSignUp,
  name,
  email,
  password,
  occupation,
  relationshipType,
  location,
  photoUrl,
  bio

}) => {

  return (

    <div className="signUpForm">

      <form onSubmit={handleSignUp}>
        <h1 className="signUpFormHeader">Sign Up Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" className="form-control" placeholder="Enter your name..." onChange={handleInputChange} value={name} type="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input name="email" className="form-control" placeholder="Enter your e-mail..." onChange={handleInputChange} value={email} type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" className="form-control" placeholder="Enter a password..." onChange={handleInputChange} value={password} type="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input name="occupation" className="form-control" placeholder="Enter your occupation..." onChange={handleInputChange} value={occupation} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="relationshipType">Relationship Type</label>
          <input name="relationshipType" className="form-control" placeholder="What kind of relationship are you looking for?" onChange={handleInputChange} value={relationshipType} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select name="location" id="location-input" required className="form-control selectpicker" onChange={handleInputChange} value={location}>
            <option value="null" disabled="">Location (US State)...</option>
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
        <div className="form-group">
          <label htmlFor="photoUrl">Profile Picture</label>
          <input name="photoUrl" className="form-control" placeholder="Photo Url..." onChange={handleInputChange} value={photoUrl} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="bio">About You</label>
          <textarea name="bio" id="signUpFormTextBox" className="form-control" placeholder="Say something about yourself..." onChange={handleInputChange} value={bio} type="text" required />
        </div>
        <div className="signUpFormBtnWrapper">
          <button className="signUpBtn" type="submit">Submit</button>
        </div>
      </form>

    </div>

  );

};

export default SignUpForm;