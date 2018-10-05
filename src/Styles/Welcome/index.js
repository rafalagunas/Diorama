import styled from "styled-components";
import { Row } from "reactstrap";
import { Button } from "antd";
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #931e2f;
  text-align: center;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: #931e2f;
`;

export const Container = styled.div`
  padding-top: 5%;
  margin: 0 auto;
  justify-content: center;
`;

export const ButtonRow = styled(Row)`
  margin: 0 auto !important;
  display: inline-block;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 5%;
  width: 40%;
  padding-left: 5%;
`;

export const ButtonContainer = styled.div`
  width: 180px;
`;

export const RedButton = styled(Button)`
  margin: 0 auto;
  width: 100px;
  height: 40px !important;
`;
