import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./DevCard.css"; // Developer Card CSS

const DevCard = ({ id, name, image, email, gitHub, linkedIn }) => {

    return (
        <div>
            {id === 4 ? <div className="devCard" style={{ marginLeft: "17%" }}>

                <div className="img-container">
                    <img alt={name} src={image} id="devCardImg" />
                </div>

                <div className="devContent">
                    <ul>
                        <li className="devList">
                            <strong>{name}</strong>
                        </li>
                        <a href={linkedIn} target="blank" id="devTag">
                            <i style={{ fontSize: "30px" }} className="fab fa-linkedin"></i>
                        </a>
                        <a href={gitHub} target="blank">
                            <i style={{ fontSize: "30px" }} className="fab fa-github"></i>
                        </a>
                        <li className="devList">
                            {email}
                        </li>
                    </ul>

                </div>

            </div> : <div className="devCard">

                    <div className="img-container">
                        <img alt={name} src={image} id="devCardImg" />
                    </div>

                    <div className="devContent">
                        <ul>
                            <li className="devList">
                                <strong>{name}</strong>
                            </li>
                            <a href={linkedIn} target="blank" id="devTag">
                                <i style={{ fontSize: "30px" }} className="fab fa-linkedin"></i>
                            </a>
                            <a href={gitHub} target="blank">
                                <i style={{ fontSize: "30px" }} className="fab fa-github"></i>
                            </a>
                            <li className="devList">
                                {email}
                            </li>
                        </ul>

                    </div>

                </div>}
        </div>


    ); // End of return()

}; // End of DevCard class


export default DevCard;

// No need for a class component
// class DevCard extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     // }
//     render() {
//         return (
            // <div>
            //     {this.props.id == 4 ? <div className="devCard" style={{ marginLeft: "17%" }}>

            //         <div className="img-container">
            //             <img alt={this.props.name} src={this.props.image} id="devCardImg" />
            //         </div>

            //         <div className="devContent">
            //             <ul>
            //                 <li className="devList">
            //                     <strong>{this.props.name}</strong>
            //                 </li>
            //                 <a href={this.props.linkedIn} target="blank" id="devTag">
            //                     <i style={{ fontSize: "30px" }} className="fab fa-linkedin"></i>
            //                 </a>
            //                 <a href={this.props.gitHub} target="blank">
            //                     <i style={{ fontSize: "30px" }} className="fab fa-github"></i>
            //                 </a>
            //                 <li className="devList">
            //                     {this.props.email}
            //                 </li>
            //             </ul>

            //         </div>

            //     </div> : <div className="devCard">

            //             <div className="img-container">
            //                 <img alt={this.props.name} src={this.props.image} id="devCardImg" />
            //             </div>

            //             <div className="devContent">
            //                 <ul>
            //                     <li className="devList">
            //                         <strong>{this.props.name}</strong>
            //                     </li>
            //                     <a href={this.props.linkedIn} target="blank" id="devTag">
            //                         <i style={{ fontSize: "30px" }} className="fab fa-linkedin"></i>
            //                     </a>
            //                     <a href={this.props.gitHub} target="blank">
            //                         <i style={{ fontSize: "30px" }} className="fab fa-github"></i>
            //                     </a>
            //                     <li className="devList">
            //                         {this.props.email}
            //                     </li>
            //                 </ul>

            //             </div>

            //         </div>}
            // </div>
//         ); // End of return()
//     }; // End of render()
// }; // End of DevCard class