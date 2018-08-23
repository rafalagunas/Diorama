import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";

const Main = () => <App />;

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();