import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import TableDemo from "./Table";
import FirmesTable from "./FirmesTable";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
import { Title, TitleDiv } from "../Styles/Header";
import AnimalPoliticoTable from "./AnimalPolitico";
import Both from "./Both";
var items = [
  "1/12/2017",
  "1/4/2017",
  "1/9/2017",
  "1/5/2016",
  "1/1/2016",
  "16/11/2014",
  "16/2/2016",
  "16/9/2017",
  "16/2/2016",
  "16/11/2015",
  "16/12/2015",
  "1/12/2017",
  "16/2/2015",
  "1/4/2017",
  "1/11/2016",
  "1/1/2016"
];

/*      <LineChart
          data={{
            "2017-05-13": 2,
            "2017-05-20 ": 5,
            "2017-05-15": 6,
            "2017-05-30": 7,
            "2017-05-17": 8
          }}
        />*/
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
