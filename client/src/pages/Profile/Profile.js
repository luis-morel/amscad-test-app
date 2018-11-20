import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import CatButtons from "../../components/CatButtons";
import Post from "../../components/Post";
import PostForm2 from "../../components/PostForm2"
import UserInfo from "../../components/UserInfo";
import "./Profile.css"; // Profile Page CSS

class Profile extends React.Component {

    state = {
        loggedIn: this.props.loggedIn,
        user: this.props.user,
        postBody: "",
        postCategory: "",
        posts: []
    };

    addPost = (event) => {
        event.preventDefault();
        // Post Form Validation
        const categoryInput = event.target.postCategory.value;
        if (categoryInput !== "null") {
            API.createPost({
                body: event.target.postBody.value,
                category: event.target.postCategory.value
            })
                .then((res) => {
                    // Clear post form values
                    this.setState({
                        postBody: "",
                        postCategory: ""
                    });
                    this.getUserPosts();
                });
        }
        else alert("Category field required!");
    };

    componentDidMount = () => {
        if (!this.state.loggedIn) {
            // Redirect to "/" if user NOT logged in
            return <Redirect to="/" />
        }
        this.getUserPosts();
    };

    getUserPostsByCategory = (category) => {
        const userId = this.state.user.id;
        if (category !== "All") {
            API.getPostsByCat(category, userId)
                .then((res) => {
                    if (res.data.length > 0) this.setState({ posts: res.data });
                    else this.setState({ posts: [] });
                });
        }
        else this.getUserPosts();
    };

    getUserPosts = () => {
        const userId = this.state.user.id;
        API.getPostsByUser(userId)
            .then((res) => {
                if (res.data.length > 0) this.setState({ posts: res.data });
                else this.setState({ posts: [] });
            });
    };

    handleDelete = (event) => {
        event.preventDefault();
        API.deletePost(event.target.id)
            .then((res) => {
                this.getUserPosts();
            });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        // Redirect to "/" if user NOT logged in
        if (!this.state.loggedIn) {
            return <Redirect to="/" />
        }

        // Destructuring logged on user
        let { bio, email, id, imageUrl, location, name, occupation, relationshipType } = this.state.user;

        return (

            <div className="profileContainer">
                <CatButtons getPosts={this.getUserPostsByCategory} />
                <Wrapper>
                    <Row>

                        {/* User Profile Column */}
                        <Col size="md" span="4">
                            <div className="userInfoContainer">
                                <UserInfo
                                    bio={bio}
                                    email={email}
                                    image={imageUrl}
                                    location={location}
                                    name={name}
                                    occupation={occupation}
                                    relationshipType={relationshipType}
                                />
                            </div>
                        </Col>

                        {/* User Feed/Post Form Column */}
                        <Col size="md" span="8">
                            {!this.state.posts.length ?
                                <p className="feedHeader">No Stories...</p>
                                :
                                <p key="feedHeader" className="feedHeader">Your Stories...</p>
                            }
                            <div className="userPostForm">
                                <PostForm2
                                    addPost={this.addPost}
                                    handleInputChange={this.handleInputChange}
                                    postBody={this.state.postBody}
                                    postCategory={this.state.postCategory}
                                />
                            </div>
                            <div className="userFeedContainer">
                                {!this.state.posts.length ?
                                    ""
                                    :
                                    (
                                        this.state.posts.map(function (post) {
                                            return (
                                                <Post
                                                    key={post.id}
                                                    id={post.id}
                                                    category={post.category}
                                                    comment={post.body}
                                                    handleDelete={this.handleDelete}
                                                    image={imageUrl}
                                                    name={name}
                                                    timeStamp={post.updatedAt}
                                                    userId={post.UserId}
                                                    user_id={id}
                                                />
                                            );
                                        }, this)
                                    )
                                };
                            </div>
                        </Col>

                    </Row>
                </Wrapper>
            </div>

        ); // End of return()

    }; // End of render()

}; // End of class Profile

export default Profile;