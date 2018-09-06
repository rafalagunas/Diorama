import React, { Component } from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Container } from "../Styles/Table";
//var Data = require("../Data/Firmes.js");

var items = [
  {
    id: 0,
    rfc: "&BC040317UN0",
    razon_social: "E & B CONSTRUCTORES Y SUPERVISORES SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/12/2017"
  },
  {
    id: 1,
    rfc: "&CA060106UG6",
    razon_social: "A & C AUDITORIA Y CONTROL SC",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/4/2017"
  },
  {
    id: 2,
    rfc: "&CT031008591",
    razon_social: "A & C TRANSPORTE DE MAQUINARIA SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/9/2017"
  },
  {
    id: 3,
    rfc: "&FP030911BI3",
    razon_social: "E. & F. PROVEEDORA DE INSUMOS Y SERVICIOS SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/5/2016"
  },
  {
    id: 4,
    rfc: "&GP020128G89",
    razon_social: "E & G PUBLIVISION SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/1/2016"
  },
  {
    id: 5,
    rfc: "&HI0102165P2",
    razon_social: "A & H INCENTIVE GROUP SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/11/2014"
  },
  {
    id: 6,
    rfc: "&IN051111Q96",
    razon_social: "A & E INGENIERIA SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/2/2016"
  },
  {
    id: 7,
    rfc: "&ML040319NR4",
    razon_social: "E & M LOGISTIC SERVICE  SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/9/2017"
  },
  {
    id: 8,
    rfc: "&RC030324PJ5",
    razon_social: "A & R CONSTRUCCIONES SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/2/2016"
  },
  {
    id: 9,
    rfc: "&RD021121TV4",
    razon_social: "A & R DOORS & WINDOWS SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/11/2015"
  },
  {
    id: 10,
    rfc: "&VE9904268V2",
    razon_social: "E & A VIDEO EXCURSIONES SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/12/2015"
  },
  {
    id: 11,
    rfc: "&VS040628LW0",
    razon_social: "A & V SOLUCIONES SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/12/2017"
  },
  {
    id: 12,
    rfc: "A&A020110E86",
    razon_social: "ALDEN & ASSOCIATES SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "16/2/2015"
  },
  {
    id: 13,
    rfc: "A&A0401096P2",
    razon_social: "AF & ASSOCIATES THE DUBBING HOUSE SC",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/4/2017"
  },
  {
    id: 14,
    rfc: "A&B050105G27",
    razon_social: "AF & B MERCHANTS MEXICO SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/11/2016"
  },
  {
    id: 15,
    rfc: "A&C050211RF6",
    razon_social: "AUTOMATION & CONTROL ENGINEERING SYSTEMS SA DE CV",
    tipo_persona: "M",
    supuesto: "FIRMES",
    Fecha_pp: "1/1/2016"
  }
];

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.options = {};
  }
  componentDidMount() {
    fetch("https://test.contralacorrupcion.mx/ia/js/Firmes.js", {
      method: "GET",
      mode: "no-cors",
      cache: "default"
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
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
          searchPlaceholder="Haz una búsqueda..."
        >
          <TableHeaderColumn isKey dataField="id" width="40px">
            Id
          </TableHeaderColumn>
          <TableHeaderColumn width="130px" dataAlign="center" dataField="rfc">
            RFC
          </TableHeaderColumn>
          <TableHeaderColumn width="280px" dataField="razon_social">
            Razón Social
          </TableHeaderColumn>
          <TableHeaderColumn
            width="50px"
            dataAlign="center"
            dataField="tipo_persona"
          >
            Tipo
          </TableHeaderColumn>
          <TableHeaderColumn
            width="80px"
            dataAlign="center"
            dataField="supuesto"
          >
            Supuesto
          </TableHeaderColumn>
          <TableHeaderColumn
            width="100px"
            dataAlign="center"
            dataField="Fecha_pp"
          >
            Fecha
          </TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
}

export default DataTable;
