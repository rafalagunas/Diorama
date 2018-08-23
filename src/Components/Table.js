import React, { Component } from "react";
import { relativeTimeThreshold } from "moment";
const JsonTable = require("ts-react-json-table");
var items = [
  {
    id: 75950,
    rfc: "Louella Wallace",
    razon_social: 24,
    tipo_persona: "+44 (0)203 437 7302",
    supuesto: "green"
  },
  {
    id: 80616,
    rfc: "Hanson Perry",
    razon_social: 36,
    tipo_persona: "+44 (0)203 279 3708",
    supuesto: "brown"
  },
  {
    id: 77621,
    rfc: "Brandi Long",
    razon_social: 20,
    tipo_persona: "+44 (0)203 319 4880",
    supuesto: "gray"
  },
  {
    id: 81299,
    rfc: "Tonia Sykes",
    razon_social: 38,
    tipo_persona: "+44 (0)208 328 3671",
    supuesto: "blue"
  },
  {
    id: 14225,
    rfc: "Leach Durham",
    razon_social: 23,
    tipo_persona: "+44 (0)208 280 9572",
    supuesto: "green"
  }
];

class TableDemo extends Component {
  printRow = item => {
    return (
      <tr>
        <th data-field="items" scope="row">
          {item.id}
        </th>
        <th scope="row">{item.rfc}</th>

        <td>{item.razon_social}</td>
        <td>{item.tipo_persona}</td>
        <td>{item.supuesto}</td>
      </tr>
    );
  };

  render() {
    return (
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">RFC</th>
              <th scope="col">RAZÓN SOCIAL</th>
              <th scope="col">TIPO PERSONA</th>
              <th scope="col">SUPUESTO</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return this.printRow(item);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableDemo;
