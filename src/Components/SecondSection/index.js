import React from "react";
import {
  Title,
  Text,
  MainContainer,
  Container,
  ButtonRow,
  RedButton,
  ButtonContainer,
  SearchBoxContainer,
  ButtonDiv
} from "../../Styles/SecondSection";
import { Col } from "reactstrap";
import { Input } from "antd";
import "../styles.css";

const Search = Input.Search;

const SecondSection = props => {
  return (
    <MainContainer>
      <Container fluid>
        <Text className="lead">Busca líneas de tiempo,redes y reportes</Text>
        <SearchBoxContainer>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200, height: 50 }}
          />
        </SearchBoxContainer>
        <ButtonDiv>
          <ButtonContainer>
            <RedButton>Generar</RedButton>
          </ButtonContainer>
        </ButtonDiv>
      </Container>
    </MainContainer>
  );
};

export default SecondSection;
