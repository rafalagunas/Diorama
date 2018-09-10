import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import TableDemo from "./Table";
import FirmesTable from "./FirmesTable";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
import AnimalPoliticoTable from "./AnimalPolitico";
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
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <h1> FIRMES SAT</h1>
        <FirmesTable />
        <h1> Animal Político</h1>
        <LineChart
          data={{
            "2017-05-13": 2,
            "2017-05-20 ": 5,
            "2017-05-15": 6,
            "2017-05-30": 7,
            "2017-05-17": 8
          }}
        />
      </div>
    );
  }
}

export default App;
