# 🕷️ SPIDERVERSO 🕷️

## 🕸️ Hablemos un poco sobre el proyecto🕸️

El sitio web SPIDERVERSO es un proyecto inspirado en mi superhéroe de Marvel favorito y es una idea que surge por el BOOM 🤯 de la llegada del Spiderverse a los cines, sin duda esto nos ha cautivado a todos los que conocemos de Spiderman ¿y por qué no?, a las nuevas generaciones y personas que no conocían mucho sobre el tema.

Recopilamos para nuestros usuarios, información de la mayoría de los Spidermans que conforman este multiverso y seguimos trabajando para algún día poder contar con todos ellos.

## Características

- Conocer más detalles de los Spidermans que forman parte del Spiderverso.
- Leer y conocer más sobre los comics de los diferentes Spideys.
- Compartir algunos videos que hablan sobre este increible multiverso.
- Seguir creciendo y mejorando con ayuda de nuestros usuarios, mediante un formulario de contacto.

## Tecnologías

### Wireframes 🖼️

![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### Estructura 🛠️

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### Estilos 🎨

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### Funcionalidad 👩‍💻

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JQUERY](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### Control de versiones y Respositorio ⌛

![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### Plataforma de despliegue

![VERCEL](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- NOTA --- Adicional a lo anterior, también se hizo uso del plugin de [Slick Slider](https://kenwheeler.github.io/slick/) para la creación de sliders dentro de la página.

## Un poco sobre el proceso y desarrollo

Antes de dar comienzo con el desarrollo se llevó a cabo un proceso de inspiración e ideación, para poder definir unos wireframes de la idea de cómo sería nuestro sitio web.

- [Wireframes](https://drive.google.com/file/d/18MTMNnHzP0d9k8Qq89j6mSY9FkZBiBy9/view?usp=drive_link) - 👈 Acá puedes conocerlos.

En nuestra primera iteración del proyecto, trabajamos en una primera versión de nuestro sitio, de manera local, creando nuestra primer estructura utilizando el lenguaje de marcado HTML y dimos nuestros primeros estilos básicos con CSS, utilizando propiedades básicas para ordenar nuestros elementos, aunque a estas alturas, nuestro sitio aún no era responsivo.

En nuestra segunda iteración recibimos con alegría el framework de diseño de Bootstrap en su versión 5 🎉, el cual nos abre la puerta a muchos componentes, estilos, utilidades y su increíble Grid System, que sin duda facilitaron nuestro trabajo y nos ayudó a hacer responsivo nuestro sitio 📲. Además tuvimos la llegada de 2 grandes del CSS, flexbox y Grid 🥳 los cuales nos aligeran la carga para ordenar nuestros layouts y elementos dentro del sitio y por último conocimos y utilizamos git (controlador de versiones) y github para subir nuestro primer repo y poder tener nuestra primer versión del sitio publico.

- [Spiderverso 2 iteración](https://osvalam86.github.io/preEntregaDosOcampoOsvaldo/) - 👈 Acá puedes darle un vistazo.

En nuestra tercera iteración llegó SASS (preprocesador), que llena de súper poder a nuestro CSS, lo cual nos permitió utilizar MIXINS, EXTENDS, BUCLES, MAPS, entre muchas cosas más 😁. Como parte de nuestro proceso, pasamos nuestro CSS a códgio SASS, para ver las bondades de utilizar un preprocesador en nuestro proceso, además de darle unos retoques y mejoras a nuestro sitio, actualizando información y estilos en nuestro sitio.

- [Spiderverso 3 iteración](https://osvalam86.github.io/preEntraga3OcampoOsvaldo/) - 👈 Acá puedes darle un vistazo.

Una vez realizada esta tercera iteración, realizamos los últimos cambios y ajustes en nuestro proyecto para poder realizar nuestro deploy a producción mediante la plataforma de VERCEL.

## Instalación ⚙️

### Requisitos previos

Antes de dar comienzo con la instalación del proyecto, debes asegurarte de tener instalado en tu equipo de trabajo lo siguiente:

- [Node.js](https://nodejs.org/es) - Puedes validar si tienes una versión instalada en tu PC, mediante una terminal escribiendo 👇

```
node --version
```

o también

```
node --v
```

- npm (comunmente se instala, al instalar Node.js) - Puedes validar si tienes una versión instalada en tu PC, mediante una terminal escribiendo 👇

```
npm --version
```

o también

```
npm --v
```

Una vez validado lo anterior, ahora si podemos pasar a lo bueno 😁

## Paso 1: Clonar el repositorio 📦

Debes clonar el repositorio en tu equipo, solo debes capturar lo siguiente dentro de una carpeta donde desees guardar el proyecto.

```
git clone https://github.com/Osvalam86/PFOsvaldoOcampo.git
```

## Paso 2: Instalar dependencias 🧩

Una vez clonado el repositorio, deberás ejecutar el siguiente comando dentro de una terminal que sea abierta desde la carpeta de tu proyecto.

```
npm install
```

o también puede ser

```
npm i
```

## Paso 3: Opcional - Iniciar sass 🧩

En caso de que se desee modificar los estilos CSS del proyecto es importante mencionar que dentro del proyecto contamos con SASS, por lo que **NO SE DEBE EDITAR** el archivo main.css que se encuentra dentro de la carpeta css, para ello se deberán editar los archivos sass, que se encuentran dentro de la carpeta scss del proyecto.

Dentro del package.json puedes encontrar la configuración actual de las rutas del archivo main.scss que será observado y el archivo de salida main.css

```
"sass:watch": "sass --watch scss/main.scss  css/main.css"
```

Para poder preprocesar nuestro código sass se debe ejecutar el siguiente comando dentro de la terminal de nuestro proyecto.

```
npm run sass:watch
```

## Paso 4: Vamo' a darle 🧠

Es hora de echar a volar la imaginación, practicar, trabajar o mejorar el proyecto.

Solo me gustaría darte a conocer un poco más de la estructura con la que trabajamos los estilos dentro del proyecto, como lo he mencionado antes, contamos con una carpeta scss dentro del proyecto, y dentro, encontrarás 8 carpetas diferentes que contienen nuestros parcials y 1 archivo principal que engloba a todos ellos.

### Carpetas

- 01-settings - Variables globales, interruptores de configuración.
- 02-tools - MIXINS y Funciones.
- 03-generic - Estilos generales, en este proyecto solo contamos con iconos, ya que utilizamos el reboot de bootstrap.
- 04-elements - Elementos HTML no clasificados (selectores de tipo).
- 05-keyframes - Animaciones utilizadas en el proyecto
- 06-objects - Patrones de diseño sin cosméticos (clases de estructura de página, diseños, objetos multimedia).
- 07-components - Componentes diseñados, trozos de interfaz de usuario.
- 08-trumps - Anulaciones (importants) y utilidades

### Archivo principal

- main.scss

Dentro del proyecto trabajamos siguiendo BEMIT, que es la combinación entre la metología BEM CSS y la arquitectura ITCSS, con la finalidad de tener un mayor control y orden dentro de nuestros estilos del proyecto.

💻 **!LISTO! el proyecto es tuyo, manos a la obra** 💻

## Comentarios adicionales 🔍

Es importante saber que el proyecto por ahora no es del todo dinámico, por lo que si pruebas y elijes cualquiera de los personajes del sitio, te abrirá la página del detalle de un solo personaje "Miles Morales", al igual que si seleccionas cualquier cómic del sitio, te abrirá la página del mismo cómic "All New Spider-Man" y en caso de visitar alguna de las redes sociales encontradas en el footer del sitio, te abrirá la página de error 404 ya que no contamos con ellas aún, así como al querer enviar el formulario de contacto.

Pero no te preocupes, planeamos continuar iterando el proyecto ahora con ayuda de JS y poder hacerlo completamente dinámico, para poder visualizar la información correspondiente a cada personaje y cómic, así como las funcionalidades correspondientes.

## Links de Spiderverso 🕷️

- [Repositorio](https://github.com/Osvalam86/PFOsvaldoOcampo.git)
- [GITHUB Pages](https://osvalam86.github.io/PFOsvaldoOcampo/)
- [SPIDERVERSO - Deploy](https://spiderverso.vercel.app/)

## Para finalizar 🤓

Quiero agradecer a mi tutora Ornella Irigo y a mi profesora Laura Avalle, quienes me acompañaron en este proceso y me brindaron de su valioso tiempo, para poder seguir aprendiendo y crecer profesionalmente.

Sin duda, el curso de Desarrollo Web ha sido una grata experiencia y agradezco a todo aquel que lea este README y se dé el tiempo de mirar un poco de mi trabajo.

Éxito para todos 😁😁😁😁😁
