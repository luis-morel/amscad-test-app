import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import CatButtons from "../../components/CatButtons";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import "./Feed.css"; // Feed Page CSS

class Feed extends React.Component {

    state = {
        loggedIn: this.props.loggedIn,
        user: this.props.user,
        postBody: "",
        postCategory: "",
        posts: [],
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
                    this.getAllPosts();
                });
        }
        else alert("Category field required!");
    };

    componentDidMount = () => {
        if (!this.state.loggedIn) {
            // Redirect to "/" if user not logged in
            return <Redirect to="/" />
        }
        this.getAllPosts();
    };

    getAllPosts = () => {
        API.getAllPosts()
            .then((res) => {
                this.setState({
                    posts: res.data
                })
            });
    }

    getPostsByCategory = (category) => {
        if (category !== "All") {
            API.getPostsByCat(category)
                .then((res) => {
                    if (res.data.length > 0) this.setState({ posts: res.data });
                    else this.setState({ posts: [] });
                });
        } else {
            this.getAllPosts();
        }
    }

    handleDelete = (event) => {
        event.preventDefault();
        API.deletePost(event.target.id)
            .then((res) => {
                this.getAllPosts();
            });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        // Redirect to "/" if not logged in
        if (!this.state.loggedIn) {
            return <Redirect to="/" />
        }

        // let user_id = this.props.user? this.props.user.id:"";
        let loggedOnUserId = this.state.user.id;

        return (

            <div className="feedContainer">
                <CatButtons getPosts={this.getPostsByCategory} />
                <Wrapper>
                    <Row>
                        {/* Feed header */}
                        <Col size="md">
                            {!this.state.posts.length ?
                                <p className="feedHeader">No Stories...</p>
                                :
                                <p key="feedHeader" className="feedHeader">Stories...</p>
                            }
                        </Col>
                    </Row>
                    <Row>
                        {/* Feed column */}
                        <Col size="md" span="8">
                            {!this.state.posts.length ?
                                ""
                                :
                                (
                                    this.state.posts.map((post) => {
                                        return (
                                            <Post
                                                key={post.id}
                                                id={post.id}
                                                category={post.category}
                                                comment={post.body}
                                                image={post.User.imageUrl}
                                                name={post.User.name}
                                                timeStamp={post.updatedAt}
                                                handleDelete={this.handleDelete}
                                                userId={post.UserId}
                                                user_id={loggedOnUserId}
                                            />
                                        );
                                    }, this)
                                )
                            };

                        </Col>
                        {/* Post form column */}
                        <Col size="md" span="4">
                            <PostForm
                                addPost={this.addPost}
                                handleInputChange={this.handleInputChange}
                                postBody={this.state.postBody}
                                postCategory={this.state.postCategory}
                            />
                        </Col>
                    </Row>
                </Wrapper>
            </div>

        ); // End of return()

    }; // End of render()

}; // End of Feed()

export default Feed;