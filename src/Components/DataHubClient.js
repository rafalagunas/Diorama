import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Container } from "../Styles/Table";
import { datazero } from "../Data/dataset0";
import { dataone } from "../Data/dataset1";
import { datatwo } from "../Data/dataset2";
import { datathree } from "../Data/dataset3";
import { datafour } from "../Data/dataset4";
import { datafive } from "../Data/dataset5";
import { datazerozero } from "../Data/dataset00";

import auth from '../Data/auth';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.options = {};
  }

  componentDidMount(){
      this.loadData();
  }

  loadData = () => {
      const query = `{ hub(id: ${auth.getHubId()}) { entities (selector: "{\\"limit\\":10, \\"offset\\":10}"){ id name }}}`;
      auth.getData(query).then(res => {
        this.setState({ items: res.data.hub.entities }, () => res.data.hub.entities );
      });
  }

  render() {
    const {items} = this.state;

    return (
      <Container responsive>
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
          csvFileName="firmes-sat"
          searchPlaceholder="Haz una búsqueda..."
        >
          <TableHeaderColumn isKey dataField="id" width="40px">
            RFC
          </TableHeaderColumn>
          <TableHeaderColumn width="280px" dataField="name">
            Razón Social
          </TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
};