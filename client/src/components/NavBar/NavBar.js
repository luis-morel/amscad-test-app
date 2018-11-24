import React from 'react';
// import { Link } from 'react-router-dom';
import "./NavBar.css"; // NavBar CSS
import Logo from "./Logo.json"; // Hate&Date Logo

const NavBar = ({ loggedIn, logout }) => {

  return (

    <nav className="navbar navbar-expand-lg" >

      {/* NavBar Headers */}
      < div className="navBarCoHeader" >
        <img id="navBarLogoText" src={Logo[0].imageUrl} alt={Logo[0].name} />
      </div >
      <div className="navBarAppHeader">
        <h3 id="navBarAppText">Facilities Management System</h3>
      </div>

      {/* NavBar Buttons */}
      {/* < div className="navBarBtnWrapper" >
        <ul className="navBarBtnList">
          {loggedIn ?
            [
              <li key="about"><Link to="/about"><button className="navBarBtn">About</button></Link></li>,
              <li key="feed"><Link to="/feed"><button className="navBarBtn">Feed</button></Link></li>,
              <li key="profile"><Link to="/profile"> <button className="navBarBtn">Profile</button></Link></li>,
              <li key="logout"><a href="/"><button className="navBarBtn" onClick={logout}>Logout</button></a></li>
            ]
            :
            ['']
            // [
            //   <li key="home"><Link to="/"><button className="navBarBtn">Home</button></Link></li>,
            //   <li key="about"><Link to="/about"><button className="navBarBtn">About</button></Link></li>,
            //   <li key="login"><Link to="/login"> <button className="navBarBtn">Login</button></Link></li>
            // ]
          }
        </ul>
      </div > */}

    </nav >

  ); // End of return()

}; // End of NavBar()

export default NavBar;