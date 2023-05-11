import React from "react";
import ReactDOM from "react-dom/client";
import Searchinput from "./searchinput.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Searchinput />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
