import React, { Component } from "react";
import { relativeTimeThreshold } from "moment";
const JsonTable = require("ts-react-json-table");
var items = [
  {
    id: 75950,
    name: "Louella Wallace",
    age: 24,
    phone: "+44 (0)203 437 7302",
    color: "green"
  },
  {
    id: 80616,
    name: "Hanson Perry",
    age: 36,
    phone: "+44 (0)203 279 3708",
    color: "brown"
  },
  {
    id: 77621,
    name: "Brandi Long",
    age: 20,
    phone: "+44 (0)203 319 4880",
    color: "gray"
  },
  {
    id: 81299,
    name: "Tonia Sykes",
    age: 38,
    phone: "+44 (0)208 328 3671",
    color: "blue"
  },
  {
    id: 14225,
    name: "Leach Durham",
    age: 23,
    phone: "+44 (0)208 280 9572",
    color: "green"
  }
];

class TableDemo extends Component {
  fill() {
    var count = Object.keys(items).length;
    console.log(count);

    var i;
    for (i = 0; i < count; i++) {
      <tr>
        <th scope="row">items[i].id</th>
        <td>items[i].name</td>
        <td>items[i].age</td>
        <td>items[i].phone</td>
        <td>items[i].color</td>
      </tr>;
    }
  }

  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableDemo;
