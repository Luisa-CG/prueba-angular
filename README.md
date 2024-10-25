# PruebaAngular

Este proyecto es una aplicación simple desarrollada en Angular 11 o superior, utilizando PrimeNG para el diseño de la interfaz. La aplicación permite registrar y consultar clientes, además de incluir pruebas unitarias con Jasmine y Karma.

## Tabla de Contenidos

1. [Características del Proyecto](#características-del-proyecto)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Ejecutar el Proyecto](#ejecutar-el-proyecto)
5. [Uso de la Aplicación](#uso-de-la-aplicación)

## Características del Proyecto

- Registro de clientes con los siguientes datos:
  - Identificación
  - Nombre
  - Apellidos
  - Email
  - Celular
- Consulta de clientes con paginación (10 registros por página) y ordenamiento por nombre y apellidos.
- Manejo de excepciones para garantizar la robustez de la aplicación.
- Pruebas unitarias con cobertura del 90% utilizando Jasmine y Karma.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Angular CLI](https://angular.io/cli) (versión 11 o superior)

## Instalación
1. Clona el repositorio en tu máquina local: https://github.com/Luisa-CG/prueba-angular.git
2. Instala las dependencias del proyecto: npm install

## Ejecutar el proyecto
Para ejecutar el proyecto ejecuta el comando ng serve.
La aplicación estará disponible en http://localhost:4200

## Uso de la Aplicación
Registrar Clientes:
1. Navega a la sección de registro e ingresa la información del cliente.
2. Haz clic en "Registrar" para guardar los datos.

Consultar Clientes:
1. Ve a la sección de consulta.
2. Puedes buscar por nombre o apellido. Los resultados se mostrarán en una tabla
