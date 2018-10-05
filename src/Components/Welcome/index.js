import React from "react";
import {
  Title,
  Text,
  Container,
  ButtonRow,
  RedButton,
  ButtonContainer
} from "../../Styles/Welcome";
import { Col } from "reactstrap";
import "../styles.css";

const Welcome = props => {
  return (
    <Container>
      <Container fluid>
        <Title className="md">Diorama</Title>
        <Text className="lead">Ver en un mismo sitio cosas distintas</Text>
      </Container>
      <ButtonRow>
        <ButtonContainer>
          <RedButton>Buscar</RedButton>
        </ButtonContainer>
        <ButtonContainer>
          <RedButton>Generar</RedButton>
        </ButtonContainer>
      </ButtonRow>
    </Container>
  );
};

export default Welcome;
