import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import { Container } from "../../Styles/Table";
import auth from "./auth";

class AnimalPoliticoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      fetchInfo: {
        dataTotalSize: 10
      }
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handlePaginator = (page, sizePerPage) => {
    this.setState({ page }, this.loadData);
  };

  handleSearch = (searchText, colInfos, multiColumnSearch) => {
    this.setState({ searchText }, this.loadData);
  };

  loadData = () => {
    // TODO: Improve searchCondition adding date and type fields
    // TODO: dataTotalSize must be equal to the returned data size
    const { page, searchText } = this.state,
      offset = (page - 1) * 10,
      searchCondition = !!searchText
        ? `\\"where\\": {\\"$or\\":[ {\\"id\\":{ \\"$iLike\\": \\"%${searchText}%\\"}}, {\\"name\\":{ \\"$iLike\\": \\"%${searchText}%\\"}} ]},`
        : ``,
      query = `{ hub(id: ${auth.getHubId()}) {numberOfEntities entities (selector: "{ ${searchCondition} \\"limit\\": 10, \\"offset\\": ${offset}}"){ id name date type }}}`;

    auth.getData(query).then(res => {
      this.setState({
        items: res.data.hub.entities,
        fetchInfo: {
          dataTotalSize: res.data.hub.numberOfEntities
        }
      });
    });
  };

  render() {
    const { items, fetchInfo, page } = this.state,
      options = {
        page,
        sizePerPage: 10,
        onPageChange: this.handlePaginator,
        onSearchChange: this.handleSearch
      };

    return (
      <Container responsive>
        <BootstrapTable
          class="table table-hover"
          data={items}
          version="4"
          hover
          pagination
          remote={true}
          fetchInfo={fetchInfo}
          options={options}
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
          <TableHeaderColumn
            width="280px"
            dataFormat={(cell, row) => moment(cell).format("YYYY-MM-DD")}
            dataField="date"
          >
            Fecha
          </TableHeaderColumn>
          <TableHeaderColumn width="280px" dataField="type">
            Tipo
          </TableHeaderColumn>
          <TableHeaderColumn width="280px">Graf</TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
}

export default AnimalPoliticoTable;
