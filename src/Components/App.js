import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import TableDemo from "./Table";
import DataTable from './DataTable'
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
var data = [
  { name: "Workout", data: { "2017-01-01": 3, "2017-01-02": 4 } },
  {
    name: "Call parents",
    data: { "2017-01-01": 5, "2017-3-02": 8 },
    name: "Call parents",
    data: { "237-01-01": 15, "2017-01-02": 3 }
  }
];

// and
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <DataTable />

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
