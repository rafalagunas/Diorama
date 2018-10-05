import React, { Component } from "react";
import { Upload, Icon, message, Card } from "antd";
import {
  CardContainer,
  MainContainer,
  ButtonContainer,
  RedButton,
  Text,
  GreyText
} from "../../Styles/FourthSection";
import "../styles.css";

class FourthSection extends Component {
  render() {
    return (
      <MainContainer>
        <Text className="lead">Ejemplos</Text>
        <CardContainer>
          <Card style={{ justifyContent: "center" }}>
            <GreyText>
              1. La empresa San Juan del Río S.A. de C.V. es una empresa que
              entre 2014 y 2018 ha tenido cuatro contratos con el gobierno
              federal (con la SFP, PGR, SEP y SEDATU); el último incluso después
              de haber sido boletinada por el SAT como empresa fantasma (CFF
              art.69-b). Ésta y otras historias aquí.
            </GreyText>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card style={{ justifyContent: "center" }}>
            <GreyText>
              1. La empresa San Juan del Río S.A. de C.V. es una empresa que
              entre 2014 y 2018 ha tenido cuatro contratos con el gobierno
              federal (con la SFP, PGR, SEP y SEDATU); el último incluso después
              de haber sido boletinada por el SAT como empresa fantasma (CFF
              art.69-b). Ésta y otras historias aquí.
            </GreyText>
          </Card>
        </CardContainer>
      </MainContainer>
    );
  }
}

export default FourthSection;
