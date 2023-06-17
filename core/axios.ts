import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();
console.log(cookies?.token, "axios");
const Axios = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies?.token}`,
  },
});

export { Axios };
