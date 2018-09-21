# Diorama

## ¿Qué es?

**Diorama es una aplicación que permite a los usuarios:**

1. Identificar
   nombres propios de
   personas y empresas
   dentro de los textos
   de auditorías y
   noticias
   para poder cruzar
   información de
   distintas fuentes.

2. Clasificamos
   62 mil
   reportajes y
   noticias
   por medio del
   análisis de
   lenguaje natural
   para quedarnos
   con 6,700 notas
   relacionadas con
   hechos de
   corrupción.

3. Procesamos texto
   de auditorías en
   PDF,
   lo pasamos a una
   base (no relacional) , y
   lo combinamos con
   otros datos.

## ¿Con qué contamos actualmente?

**Una página que permite visualizar toda la base de datos de FIRMES de SAT, a través**
**de una tabla con un buscador para buscar por Nombre, Razón Social o incluso RFC**

## ¿Qué buscamos?

1. Identificar y graficar indicadores a través de la relación que haya en las distintas fuentes.
2. Desarrollar un módulo que permita a los periodistas, académicos e investigadores en general, obtener información y generarla a través de nuevos formatos estándares a nivel internacional.
3. Mejorar y pulir el procesamiento de datos y realizar un analizador de lenguaje natural cada vez más efectivo.

#Información Técnica

## Deployment

- https://lacorrupciondesmedida.herokuapp.com/

## Dependencies

- react.js.
- styled-components.
- reactstrap (Bootstrap 4 integration for react.js).
- Ant Design
- React-router
- Rechart.js

## Testing

- This project has been integrated to codeship, each time it deploys on heroku it runs all the tests.

## Project structure

- src/Routing.js:

  - Contains all the paths of the web.

- src/Components:

  - Contains the components that will render on each view as Components/Header by example.

- src/Styles:

  - Contains the styles used on each component.

- src/index.js:
  - Contains the main file that renders the first view.
