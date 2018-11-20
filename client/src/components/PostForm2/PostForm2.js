import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./PostForm2.css"; // Post Form CSS

const PostForm2 = ({ addPost, handleInputChange, postBody, postCategory }) => (

    <div id="postForm2Panel">
        <div className="panel">
            <div id="postForm2Header" className="panel-heading">Share your story...</div>
            <div id="postForm2Body" className="panel-body">
                <form id="postForm2" onSubmit={addPost}>
                    <div className="form-group">
                        <textarea name="postBody" value={postBody} onChange={handleInputChange} id="postForm2Body" placeholder="Write your story here..." className="form-control" rows="3" required/>
                    </div>
                    <div id="postForm2CatSelect" className="form-group">
                        <select name="postCategory" value={postCategory} onChange={handleInputChange} className="custom-select">

                            <option value="null" disabled="" defaultValue="">Category...</option>
                            <option value="Coding">Coding</option>
                            <option value="Education">Education</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                            <option value="Love">Love</option>
                            <option value="Money">Money</option>
                            <option value="Music">Music</option>
                            <option value="People">People</option>
                            <option value="Politics">Politics</option>
                            <option value="Science">Science</option>
                            <option value="Sportst">Sports</option>
                            <option value="Technology">Technology</option>
                            <option value="TV">TV</option>
                            <option value="Weather">Weather</option>

                        </select>
                    </div>
                    <div id="postForm2BtnWrapper">
                        <button id="postForm2Btn" type="submit">Share</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

);

export default PostForm2;