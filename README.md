# Hacebuche Project

A continuación se explicarán los pasos a seguir para poder instalar y desplegar este proyecto en una máquina local

## Instalación

Para poder descargar o clonar este proyecto se puede hacer mediante descarga en ZIP con el botón habilitado en el repositorio o bien instalando [Git](https://git-scm.com/downloads).

Suponiendo que hemos instalado Git deberemos abrir nuestra consola y trasladarnos al lugar de trabajo donde deseemos clonar el proyecto con el siguiente comando:

`cd YourWorkSpace`

Luego clonaremos el proyecto con el siguiente comando:

`git clone https://github.com/GuiJiAg/hacebuche-project`

Para finalizar nos trasladaremos a la raiz del proyecto:

`cd hacebuche-project`

## Node.js y NPM

Para que la aplicación funcione necesitaremos tener instalado [Node.js](https://nodejs.org/es/)

Cuando Node.js se termine de instalar se descargará con él su gestor de paquetes (NPM). Se puede comprobar si ambos se han instalado correctamente con los siguientes comandos (mostrando sus respectivas versiones en caso de que se hayan instalado correctamente):

`node -v`

`npm -v`

El proyecto posee un archivo JSON llamado `package.json` en el que se incluye todas las dependencias de Node.js que necesita la aplicación para que funcione correctamente. Dado que en los repositorios no se suben estos módulos de Node.js se deberán instalar después de haber clonado el proyecto. Estando situados en la raíz del proyecto deberemos introducir el siguiente comando:

`npm install`

Este comando leerá el archivo `package.json` para reconocer las dependencias que vienen recogidas en él y las instalará en un directorio llamado `node_modules`

## Angular CLI

Una vez que la descarga del proyecto esté concluida necesitaremos instalar [Angular CLI](https://angular.io/cli) para poder desplegar nuestra aplicación en un servidor local. Para ello ejecutaremos el siguiente comando:

`npm install -g @angular/cli`

El flag `-g` indica que el cli se instalará de forma global en el equipo, por lo que no es necesario estar en una ruta específica

Una vez terminada la instalación deberemos volver a la ruta de nuestro proyecto mediante comandos si nos hemos desplazado de ahí y ejecutar el siguiente comando:

`ng serve --open`

Este comando desplegará la aplicación en `http://localhost:4200/`. La aplicación se recargará automáticamente si se produce cualquier cambio en los archivos del proyecto

## Hacebuche API

La aplicación recoge datos directamente de la API desarrollada para ella. Como la API aún no está en producción se necesitará instalarla. Para ello se debe leer los pasos indicados en el README del repositorio de [Hacebuche-API](https://github.com/GuiJiAg/hacebuche-api)
