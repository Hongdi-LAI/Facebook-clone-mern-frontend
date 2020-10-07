import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-facebook-app.herokuapp.com/",
});

export default instance;

/* axios.post('/upload/image') */
