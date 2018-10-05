import React from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import animal from "../../Images/animal.png";
import tec from "../../Images/tecmty.jpeg";
import {
  LeftDiv,
  RightDiv,
  RedBoldText,
  GreyText,
  MainDiv,
  GreyBoldText
} from "../../Styles/Footer";
import logo from "../../Images/logo.png";
export default class Footer extends React.Component {
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
      <MainDiv>
        <LeftDiv>
          <RedBoldText>Diorama </RedBoldText>
          <GreyText>
            es una herramienta para contar historias de <br />{" "}
            <b> MCCI Mexicanos Contra la Corrupción y la Impunidad</b>
            <br />
            <img src={logo} height="15" width="60" alt="sss" />
          </GreyText>
          <div>
            <GreyText>
              <br />
              Con el apoyo financiero de
            </GreyText>
          </div>

          <div>
            <GreyBoldText>
              <br />
              <br />
              Créditos
              <br />
            </GreyBoldText>
            <GreyText>
              Coordinación estratégica: Sofía Ramírez Aguilar @Sofia_RamirezA
              <br />
              Lider del proyecto: Manuel Toral @jmtoral
            </GreyText>
          </div>
          <div>
            <br />
            <GreyText>
              Hacedores de Mecate 2018: <br />
              Rafael Lagunas <br />
              Claudio Horvilleur <br />
              Osvaldo Rodríguez <br />
              Faustino Neri <br />
              Alma Rangel, Codeando México <br />
              Yosune Chamizo, Animal Político <br />
              Sandra Barrón, Fundación Idea <br />
              Juan Manuel Ruiz <br />
              Jonathan Arriaga <br />
              Oscar Díaz <br />
              Rodolfo Ferro, León.Lab
              <br />
              Gabriel
              <br />
              Paulina Bustos, Cívica Digital <br />
              Jesús Espinal <br />
              Katherine Wikrent, Open Contracting Partnership <br />
              Ramón Olivas, Open Contracting Partnership <br />
              Maria Caro Cívica Digital <br />
              Edgar Barroso, LET Tec de Monterrey
              <br />Y a todo el equipo de LET y de la Escuela de Gobierno y
              Transformación Pública ¡Gracias!
            </GreyText>
          </div>
        </LeftDiv>

        <RightDiv>
          <GreyBoldText>
            En alianza con: <br />
          </GreyBoldText>
          <img src={animal} height="50" width="120" alt="sss" />
          <br /> <br />
          <img src={tec} height="50" width="120" alt="sss" />
        </RightDiv>
      </MainDiv>
    );
  }
}
