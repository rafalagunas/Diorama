import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//var Data = require("../Data/Firmes.js");
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

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {};
  }

  render() {
    return (
      <div class="table-responsive">
        <BootstrapTable
          class="table table-hover"
          data={items}
          version="4"
          pagination
          options={this.options}
        >
          <TableHeaderColumn isKey dataField="id">
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="rfc">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="razon_social">razon</TableHeaderColumn>
          <TableHeaderColumn dataField="tipo_persona">tipo</TableHeaderColumn>
          <TableHeaderColumn dataField="supuesto">supuesto</TableHeaderColumn>
          <TableHeaderColumn dataField="Fecha_pp">Fecha</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default DataTable;
