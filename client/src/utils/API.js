import axios from "axios";

export default {

  // API Methods (/api)
  createPost: (post) => { return axios.post("/api/posts/new", post) },
  deletePost: (postId) => { return axios.delete(`/api/posts/delete/${postId}`); },
  getAllPosts: () => { return axios.get("/api/posts/all"); },
  getPostsByCat: (category, userId) => {
    var queryUrl = "/api/posts/category/" + category;
    if (userId) {
      queryUrl += "/" + userId;
      return axios.get(queryUrl);
    }
    else return axios.get(queryUrl);
    
  },
  getPostsByUser: (userId) => { return axios.get("/api/posts/user/" + userId); },

  // User Authentication Methods (/auth)
  getLoggedOnUser: () => { return axios.get("/auth/getUser"); },
  login: (user) => { return axios.post("/auth/login", user) },
  logout: () => { return axios.get("/auth/logout"); },
  signUp: (newUser) => { return axios.post("/auth/signup", newUser) }

}