import React, {Component} from "react";
// with es6
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import moment from "moment";
import {Container} from "../Styles/Table";

import auth from "./auth";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            page: 1,
            totalSize: 10,
            searchText: '',
            fetchInfo: {
                dataTotalSize: 10
            }
        };

        this.options = {
            onPageChange: this.handlePaginator,
            onSearchChange: this.handleSearch,
            sizePerPage: 10
        };
    }

    componentDidMount() {
        this.loadData();
    }

    handlePaginator = (page, sizePerPage) => {
        this.setState({page}, this.loadData);
    };

    handleSearch = (searchText, colInfos, multiColumnSearch) => {
        this.setState({searchText}, this.loadData);
    };

    loadData = () => {
        const {page, searchText} = this.state,
            offset = (page - 1) * 10,
            // TODO: Improve searchCondition adding date and type fields
            searchCondition = !!searchText? `\\"where\\": {\\"$or\\":[ {\\"id\\":{ \\"$iLike\\": \\"%${searchText}%\\"}}, {\\"name\\":{ \\"$iLike\\": \\"%${searchText}%\\"}} ]},`: ``,
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
        const {items, fetchInfo} = this.state;

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
                    options={this.options}
                    headerStyle={{background: "#f2f2f2"}}
                    bodyStyle={{fontSize: 12}}
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
                </BootstrapTable>
            </Container>
        );
    }
}
