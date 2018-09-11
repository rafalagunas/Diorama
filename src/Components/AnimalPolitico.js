import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { APContainer } from "../Styles/Table";
import { datazerozero } from "../Data/dataset00";
import { datazeroone } from "../Data/dataset01";
import { datazerotwo } from "../Data/dataset02";
import { datazerothree } from "../Data/dataset03";
import { datazerofour } from "../Data/dataset04";
import { datazerofive } from "../Data/dataset05";
import { datazerosix } from "../Data/dataset06";
import { datazeroseven } from "../Data/dataset07";

var items1 = datazeroone.concat(datazerozero);
var items2 = datazerotwo.concat(items1);
var items3 = datazerothree.concat(items2);
var items4 = datazerofour.concat(items3);
var items5 = datazerofive.concat(items4);
var items6 = datazerosix.concat(items5);
var items = datazeroseven.concat(items6);

console.log(items)
class AnimalPoliticoTable extends React.Component {
  constructor(props) {

    super(props);
    this.options = {};

  }

  render() {
    return (
      <APContainer responsive>
        <BootstrapTable
          class="table table-hover"
          data={items}
          version="4"
          hover
          pagination
          options={this.options}
          headerStyle={{ background: "#f2f2f2" }}
          bodyStyle={{ fontSize: 12 }}
          search
          exportCSV
          csvFileName="animal-politico"
          searchPlaceholder="Haz una búsqueda..."
        >
          <TableHeaderColumn isKey dataField="id" width="30px">
            Id
          </TableHeaderColumn>
          <TableHeaderColumn
            width="80px"
            dataAlign="center"
            dataField="titulo"
          >
            Título
          </TableHeaderColumn>
          <TableHeaderColumn width="150px" dataField="balazo">
            Descripción
          </TableHeaderColumn>
          <TableHeaderColumn width="50px" dataAlign="center" dataField="fecha">
            Fecha
          </TableHeaderColumn>
          <TableHeaderColumn
            width="270px"
            dataAlign="center"
            dataField="contenido"
          >
            Contenido
          </TableHeaderColumn>
        </BootstrapTable>
      </APContainer>
    );
  }
}

export default AnimalPoliticoTable;
