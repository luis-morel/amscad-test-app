import axios from "axios"; // Promise-based HTTP client

export default {

  // API Methods (/api)
  addNewBldg: (newBldg) => { return axios.post("/api/buildings/createnew", newBldg)},
  addNewUser: (newUser) => { return axios.post("/api/users/createnew", newUser) },
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

}