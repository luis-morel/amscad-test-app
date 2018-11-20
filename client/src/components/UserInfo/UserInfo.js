import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

const UserInfo = ({ image, name, email, occupation, relationshipType, location, bio }) => (

    <div className="userDiv">
        <div className="userTitle">About Me</div>
        <br />
        <div className="imgContainer">
            <img className="userImg" src={image} alt="userprofilephoto" />
        </div>
        <br />
        <p className="userInfo" > Name: </p> <p className="userData"> {name} </p>
        <br />
        <p className="userInfo" > Email: </p> <p className="userData"> {email} </p>
        <br />
        <p className="userInfo" > Occupation: </p> <p className="userData">{occupation} </p>
        <br />
        <p className="userInfo" > Relationship Type: </p> <p className="userData">{relationshipType}</p>
        <br />
        <p className="userInfo" > Location: </p> <p className="userData">{location}</p>
        <br />
        <p className="userInfo" > Bio: </p> <p className="userData">{bio}</p>

    </div>

); // End of UserInfo()

export default UserInfo;