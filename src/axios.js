import axios from "axios";

const instance = axios.create({
  baseURL: "https://facebook-clone-mern.herokuapp.com",
});

export default instance;

/* axios.post('/upload/image') */
