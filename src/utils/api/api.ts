import axios from "axios";

const api = axios.create({
  baseURL: "https://todoapp-e3064-default-rtdb.firebaseio.com",
});

export { api };
