import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./PostForm.css"; // Post Form CSS

const PostForm = ({ addPost, handleInputChange, postBody, postCategory }) => (

    <div id="postFormPanel">
        <div className="panel">
            <div id="postFormHeader" className="panel-heading">Share your story...</div>
            <div id="postFormBody" className="panel-body">
                <form id="postForm" onSubmit={addPost}>
                    <div className="form-group">
                        <textarea name="postBody" value={postBody} onChange={handleInputChange} id="postFormBody" placeholder="Write your story here..." className="form-control" rows="10" required/>
                    </div>
                    <div className="form-group">
                        <select name="postCategory" value={postCategory} onChange={handleInputChange} className="custom-select" id="postCategory">

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
                            <option value="Sports">Sports</option>
                            <option value="Technology">Technology</option>
                            <option value="TV">TV</option>
                            <option value="Weather">Weather</option>

                        </select>
                    </div>
                    <div id="postFormBtnWrapper">
                        <button id="postFormBtn" type="submit">Share</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

);

export default PostForm;