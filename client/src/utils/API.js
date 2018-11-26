import axios from "axios"; // Promise-based HTTP client

export default {

  // API Methods (/api)
  addNewBldg: (newBldg) => { return axios.post("/api/buildings/createnewbldg", newBldg); },
  addNewFloor: (newFloor) => { return axios.post("/api/buildings/createnewfloor", newFloor); },
  addNewUser: (newUser) => { return axios.post("/api/users/createnewuser", newUser); },
  getAllBldgs: () => { return axios.get("/api/buildings/listall"); },
  getFloorsInBldg: (bldgId) => { return axios.get(`/api/buildings/listfloors/${bldgId}`); },

  // User Authentication Methods (/auth)
  getLoggedOnUser: () => { return axios.get("/auth/getuser"); },
  login: (user) => { return axios.post("/auth/login", user) },
  logout: () => { return axios.get("/auth/logout"); }

};