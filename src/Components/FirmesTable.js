import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import { Container, Sub, ChartModal } from "../Styles/Table";
import auth from "./auth";
import icon from "../Images/bchart.png";
import Modal from "react-responsive-modal";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar
} from "recharts";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      open: false,
      fetchInfo: {
        dataTotalSize: 10
      },
      data: [
        { name: "Page A", uv: 590, pv: 800, amt: 1400 },
        { name: "Page B", uv: 868, pv: 967, amt: 1506 },
        { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
        { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
        { name: "Page E", uv: 1520, pv: 1108, amt: 1100 },
        { name: "Page F", uv: 1400, pv: 680, amt: 1700 }
      ]
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

  onToggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  ChartFormatter(item) {
    return (
      <button onClick={this.onOpenModal}>
        <img src={icon} />
        <Modal open={this.state.open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </button>
    );
  }

  render() {
    const { items, fetchInfo, page, open } = this.state,
      options = {
        page,
        sizePerPage: 10,
        onPageChange: this.handlePaginator,
        onSearchChange: this.handleSearch
      };

    return (
      <Container responsive>
        <button onClick={this.onToggleModal}>
          Open modal <img src={icon} />
        </button>

        <ChartModal open={open} onClose={this.onToggleModal}>
          <LineChart
            width={800}
            height={300}
            data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </ChartModal>
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
          <TableHeaderColumn
            width="280px"
            dataField={"id"}
            dataFormat={this.ChartFormatter}
          >
            Gráfico
          </TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
}
