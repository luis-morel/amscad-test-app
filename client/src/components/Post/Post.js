import React from "react";
import { Col, Row } from "../BootstrapGrid";
import "./Post.css"; // User Post CSS

const formatTimeStamp = (timeStamp) => {

    const dateObj = new Date(timeStamp); // Creates new date object
    var weekDay = dateObj.getDay(); // Returns day of the week (from 0-6)  
    var month = dateObj.getMonth(); // Returns month (from 0-11)
    const day = dateObj.getDate(); // Returns day of the month (from 1-31)
    const year = dateObj.getFullYear(); // Returns year
    var hour = dateObj.getHours(); // Returns hour (from 0-23)
    const minutes = dateObj.getMinutes(); // Returns minutes (from 0-59)
    var meridian = "AM";

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Converting numbers to string values
    weekDay = weekDays[weekDay];
    month = months[month];

    // Converting from 24 to 12 hour
    if (hour >= 12) { hour -= 12; meridian = "PM"; }
    if (hour === 0) hour = 12;    
    
    const newTimeStamp = `${weekDay} ${day} ${month} ${year} ${hour}:${minutes} ${meridian}`;
    
    return newTimeStamp;

}

const Post = ({ image, name, category, timeStamp, comment, handleDelete, id, userId, user_id }) => {

    const time = formatTimeStamp(timeStamp);

    return (

        <div className="postContainer">
            <form id={id} onSubmit={handleDelete}>
                <Row>
                    {/* Post User Image Column */}
                    <Col size="md" span="2">
                        <div className="postImgWrapper">
                            <img src={image} alt={name} />
                        </div>
                    </Col>
                    {/* Post User Name and Timestamp Column */}
                    <Col size="md" span="6">
                        <div className="postUserAndTime">
                            <div className="postUser">{name}</div>
                            <div className="postTime">{time}</div>
                        </div>
                    </Col>
                    {/* Post Category\Delete Button Column */}
                    <Col size="md" span="4">
                        <div className="postDelBtn">
                            {userId === user_id ?
                                [
                                    <button key="postDelBtn" id="postDelBtn">✗</button>,
                                    <div key="postCategoryDelBtn" className="postCategoryDelBtn">{category}</div>
                                ]
                                :
                                <div className="postCategory">{category}</div>
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* Post Comment Column */}
                    <Col size="md">

                        <div className="postComment">{comment}</div>
                    </Col>

                </Row>

            </form>
        </div>

    ); // End of return()

}; // End of Post()

export default Post;