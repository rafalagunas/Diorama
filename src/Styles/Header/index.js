import styled from "styled-components";
import {
  NavItem,
  Navbar,
  NavbarBrand,
  NavLink,
  Collapse,
  Nav
} from "reactstrap";

export const Icon = styled.i`
  font-size: 25px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const NavContainer = styled(Navbar)`
  color: #252525;
  background-color: #ffffff;
  height: 90px;
  padding-right: 5%;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

export const NavTitle = styled(NavbarBrand)`
  color: black;
  padding-left: 5%;
  font-size: 30px;
  &:hover {
    color: black !important;
  }
`;

export const BurgerIcon = styled(NavbarBrand)`
  color: black;
  padding-left: 3%;
  font-size: 30px;
  &:hover {
    color: black !important;
  }
`;

export const NavDiv = styled(Nav)`
  color: black;
  font-weight: bold;
`;

export const Item = styled(NavItem)`
  font-weight: bold;
  color: black;
`;
export const DropDiv = styled.div`
  font-weight: bold;
  color: black;
`;
export const IconDiv = styled(NavItem)`
  font-weight: bold;
  color: black;
  padding-top: 10px;
`;
export const BlackBoldCollapse = styled(Collapse)`
  font-weight: bold;
  font-size: 14px;
  color: black;
  a:hover {
    color: #000000;
  }
`;
export const BlackBoldLink = styled(NavLink)`
  font-weight: bold;
  color: black;
  a:hover {
    color: #000000;
  }
`;
