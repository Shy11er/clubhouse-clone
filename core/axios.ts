import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const Axios = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { Axios };
