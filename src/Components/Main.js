import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";

import { Title, TitleDiv } from "../Styles/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <TitleDiv>
          <Title> FIRMES SAT</Title>
        </TitleDiv>
        <TitleDiv>
          <Title> Animal Político</Title>
        </TitleDiv>
        <TitleDiv>
          <Title> FIRMES SAT y Animal Político</Title>
        </TitleDiv>
      </div>
    );
  }
}

export default App;
