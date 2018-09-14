import React from "react";
import { Title, Text, Container, ButtonContainer } from "../Styles/Welcome";
import { Button } from "reactstrap";
import "./styles.css";

/*
      <ButtonContainer>
        {" "}
        <Button>Buscar</Button> <Button>Buscar</Button>{" "}
      </ButtonContainer>*/
const Welcome = props => {
  return (
    <Container>
      <Container fluid>
        <Title className="md">Diorama</Title>
        <Text className="lead">Ver en un mismo sitio cosas distintas</Text>
      </Container>{" "}
    </Container>
  );
};

export default Welcome;
