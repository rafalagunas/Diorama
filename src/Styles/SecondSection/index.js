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
  font-size: 25px;

  color: grey;
`;

export const MainContainer = styled.div`
  padding-top: 15%;
  margin: 0 auto;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
`;

export const SearchBoxContainer = styled.div`
  margin: 0 auto !important;
  justify-content: center;
  width: 200px;
`;

export const ButtonDiv = styled.div`
  margin: 0 auto !important;
  display: inline-block;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 5%;
  width: 40%;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  padding-left: 45px;
  width: 180px;
  margin: 0 auto;
  padding-bottom: 15%;
`;

export const RedButton = styled(Button)`
  margin: 0 auto;
  width: 100px;
  height: 40px !important;
`;
