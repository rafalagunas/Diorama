import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import FirmesTable from "./FirmesTable";
import { Title, TitleDiv } from "../Styles/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <TitleDiv>
          <Title> FIRMES SAT</Title>
        </TitleDiv>{" "}
        <FirmesTable />
      </div>
    );
  }
}

export default App;
