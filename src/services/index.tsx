import axios from "axios";

const token = localStorage.getItem("@motors:token");

export const ApiRequests = axios.create({
  baseURL: "https://motors-shop-pfrl.onrender.com",
  timeout: 150000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
