import React from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../Images/logo.png";
import { NavContainer } from "../Styles/Header";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <NavContainer color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <img src={logo} height="20" width="70" alt="sss" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Últimos datos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Animal Político</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Compranet</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavContainer>
      </div>
    );
  }
}
