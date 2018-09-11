import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import FirmesTable from "./FirmesTable";
import { Title, TitleDiv } from "../Styles/Header";
import AnimalPoliticoTable from "./AnimalPolitico";
import Both from "./Both";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <TitleDiv>
          <Title> FIRMES SAT</Title>
        </TitleDiv>
        <FirmesTable />
        <TitleDiv>
          <Title> Animal Político</Title>
        </TitleDiv>
        <AnimalPoliticoTable />
        <TitleDiv>
          <Title> FIRMES SAT y Animal Político</Title>
        </TitleDiv>
        <Both />
      </div>
    );
  }
}

export default App;
