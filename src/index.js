import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import registerServiceWorker from "./registerServiceWorker";

const App = () => <Main />;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
