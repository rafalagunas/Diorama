import styled from "styled-components";
import { Row } from "reactstrap";
export const MainDiv = styled(Row)`
  padding-top: 150px;
  padding-bottom: 150px;
  overflow-x: hidden;
  max-width: 100%;
`;
export const LeftDiv = styled.div`
  width: 62%;
  padding-left: 5%;
`;

export const RightDiv = styled.div`
  width: 38%;
`;

export const GreyText = styled.span`
  font-size: 12px;
`;

export const GreyBoldText = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const RedBoldText = styled.span`
  font-size: 12px;
  color: #931e2f !important;
  font-weight: bold;
`;
