import React from "react";
import { Jumbotron, Container } from "reactstrap";
const Welcome = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="md">La corrupción (des)medida</h1>
          <p className="lead">
            Esta es una herramienta que hará cosas chilas con una base de datos
            bien chila. CORRUPTOS TEMBLAD. Para poder empezar a usar la
            aplicación sólo da clik en la pestaña Búsqueda o da clik en
            Descargas para ver las opciones de descarga de datos en formato
            .csv.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
