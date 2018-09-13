import React from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import { Container, Text, ChartModal } from "../Styles/Table";
import auth from "./auth";
import icon from "../Images/bchart.png";
import Biglogo from "../Images/Biglogo.png";
import Modal from "react-responsive-modal";
import LoadingScreen from "react-loading-screen";
import {
  ComposedChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from "recharts";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      loading: true,
      open: false,
      fetchInfo: {
        dataTotalSize: 10
      },
      data: [
        { date: "2014-04-13(SFP)", CompraNet: 550, amt: 1400 },
        { date: "2015", CompraNet: 550, amt: 1400 },

        { date: "2016", CompraNet: 1098, amt: 989 },
        { date: "2017", SAT69B: 308 },
        { date: "2017", TIME: -308 },
        { date: "2018", CompraNet: 1200, amt: 1228 }
      ]
    };
  }

  stateChange = () => {
    const { loading, items } = this.state;

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  };

  componentDidMount() {
    this.loadData();
    this.stateChange();
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
        <img src={icon} alt="icon" />
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
          Open modal <img src={icon} alt="icon" />
        </button>
        <ChartModal open={open} onClose={this.onToggleModal}>
          <span style={{ fontWeight: "bold" }}>Miles de pesos corrientes</span>
          <ComposedChart width={600} height={400} data={this.state.data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" domain={[0, 5000]} />

            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" />
            <Bar dataKey="CompraNet" barSize={5} fill="#ff3d4e" />
            <Line dataKey="SAT69B" stroke="#000" />
            <Line dataKey="TIME" stroke="#000" />
          </ComposedChart>

          <Text> San Juán del Rio SA de CV</Text>
        </ChartModal>{" "}
        <LoadingScreen
          loading={this.state.loading}
          bgColor="#f1f1f1"
          spinnerColor="#a91818"
          textColor="#000"
          logoSrc={Biglogo}
          text="La Corrupción (Des)Medida"
        >
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
        </LoadingScreen>
      </Container>
    );
  }
}
