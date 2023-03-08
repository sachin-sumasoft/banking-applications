import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import { setUser } from "./redux/reducers/authSlice";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL = "https://banking-webapp.herokuapp.com/api/v1";

// const logoutUser = () => {
//   delete axios.defaults.headers.common["Authorization"];
//   localStorage.clear();
//   store.dispatch(setUser({}));
// };

// For POST requests
// axios.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) logoutUser();
//     return Promise.reject(err);
//   }
// );

if (localStorage.accessToken) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.accessToken;

  try {
    const user = jwtDecode(localStorage.accessToken);
    store.dispatch(setUser(user));
  } catch (error) {
    console.log("bfjhdb nscjkdn bdjkb jdnjkdn ndjnv");
  }
} else {
  console.log("dvnjknv csdncknsdkc");
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
