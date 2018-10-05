import React, { Component } from "react";
import Header from "./Header/index";
import Welcome from "./Welcome/index";
import FirmesTable from "./FirmesTable";
import Footer from "./Footer/index";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <SecondSection />
        <ThirdSection />
        <FirmesTable />
        <Footer />
      </div>
    );
  }
}

export default App;
