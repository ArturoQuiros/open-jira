import axios from "axios";

const entriesAPI = axios.create({
  baseURL: "/api",
});

export default entriesAPI;
