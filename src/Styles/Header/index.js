import styled from "styled-components";
import { Navbar } from "reactstrap";

export const NavContainer = styled(Navbar)`
  .nav-link:hover {
    font-weight: bold;
    color: #000;
  }
  .nav-link:focus {
    font-weight: bold;
    color: #000;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #000;
`;
export const TitleDiv = styled.div`
  text-align: center;
`;
