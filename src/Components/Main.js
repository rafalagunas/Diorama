import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import FirmesTable from "./FirmesTable";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />

        <FirmesTable />
        <Footer />
      </div>
    );
  }
}

export default App;
