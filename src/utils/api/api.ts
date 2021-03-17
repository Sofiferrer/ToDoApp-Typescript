import axios from "axios";

const api = axios.create({
    baseURL: "https://admin-98bbd-default-rtdb.firebaseio.com",
});

export { api };