// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
});

// const Api = () => {
//   const instance = axios.create({
//     baseURL: "http://localhost:8000/api",
//     withCredentials: true,
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   return instance;
// };
// export default Api;
