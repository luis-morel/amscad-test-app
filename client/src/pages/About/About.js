import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import DevCard from "../../components/DevCard";
import Team from "./Team.json"; // Developer Team Info
import { facebook, github, instagram, twitter } from "../../components/Twitter";
import "./About.css"; // About Page CSS

const About = () => {

    return (

        <Wrapper>

            <Row>
                <Col size="md" span="7">
                    <div className="aboutHeader">Meet the Team</div>
                </Col>
                <Col size="md" span="1"></Col>
                <Col size="md" span="4">
                    <div className="aboutHeader">Follow Us</div>
                </Col>
            </Row>

            <Row>
                {/* Developer Card Column */}
                <Col size="md" span="7">
                    <div className="devCardContainer">
                        {Team.map(team => (
                            <DevCard
                                key={team.id}
                                id={team.id}
                                name={team.name}
                                image={team.image}
                                email={team.email}
                                gitHub={team.gitHubUrl}
                                linkedIn={team.linkedInUrl}
                                class={team.class}
                            />
                        ))}
                    </div>
                </Col>

                {/* Empty Column */}
                <Col size="md" span="1"> </Col>

                {/* Follow us Column */}
                <Col size="md" span="4">
                    <div className="socialStyle">
                        <ul className="socialLinksList">
                            <li className="socialLink">
                                <Link to="https://twitter.com/hate_and_date" target="_blank"
                                    className="twitter-timeline" data-width="270" data-height="470">
                                    <img className="socialLogo" alt="Twitter" src={twitter} />
                                </Link>
                            </li>
                            <li className="socialLink">
                                <Link to="https://www.instagram.com" target="_blank"
                                    className="twitter-timeline" data-width="270" data-height="470">
                                    <img className="socialLogo" alt="Instagram" src={instagram} />
                                </Link>
                            </li>
                            <li className="socialLink">
                                <Link to="https://www.facebook.com" target="_blank"
                                    className="twitter-timeline" data-width="270" data-height="470">
                                    <img className="socialLogo" alt="Facebook" src={facebook} />
                                </Link>
                            </li>
                            <li className="socialLink">
                                <Link to="https://github.com" target="_blank"
                                    className="twitter-timeline" data-width="270" data-height="470">
                                    <img className="socialLogo" alt="Github" src={github} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

        </Wrapper>

    ); // End of return()

}; // End of About.js functional component

export default About;