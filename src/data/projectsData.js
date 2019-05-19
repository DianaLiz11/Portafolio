import cipher from '../images/cipher.png';
import pokemon from '../images/pokemon.png';
import mdlinks from '../images/mdlinks.png';
export const ProjectsList = [
  {
    id:1,
    name:'InfoCipher',
    urlGit:'https://github.com/DianaLiz11/cdmx-2019-01-bc-core-am-cipher',
    urlDeploy:'https://dianaliz11.github.io/cdmx-2019-01-bc-core-am-cipher/src/',
    urlImage:cipher,
    description:'Es una página Web que permite realizar el cifrado y descifrado de un texto, esta enfocada al mundo laboral donde se requiere transmitir información, la cual en muchas ocasiones es informacón sensible, derivado de ello, InfoCipher te permite codificar dicha información sensible para poder enviarla a su destinatario sin temor de que ésta pueda ser robada y hacer mal uso de la misma. Esta página esta desarrollada con HTML, CSS y Javascript Vanilla'
  },
  {
    id:2,
    name:'Enciclopedia Pokemon',
    urlGit:'https://github.com/DianaLiz11/cdmx-2019-01-bc-core-data-lovers',
    urlDeploy:'https://dianaliz11.github.io/cdmx-2019-01-bc-core-data-lovers/src/',
    urlImage:pokemon,
    description:'Es una página Web que nos proporciona información básica de los Pokemones que aparecen en el famoso juego de Pokémon Go, esta página Web te permite conocer que pokemones existen y clasificarlos por su tipo, así como verlos ordenados dependiendo de algunos criterios que el usuario seleccione. Esta pagina se desarrollo con HTML, CSS y Javascript, en esta página tambien se hace el consumo de una API.'
  },
  {
    id:3,
    name:'mdLinks-dlmp',
    urlGit:'https://github.com/DianaLiz11/CDMX007-fe-md-links',
    urlDeploy:'https://www.npmjs.com/package/mdlinks-dlmp',
    urlImage:mdlinks,
    description:'Es una libreria de npm que te permite leer los archivos Markdown e identificar los links que contiene dicho archivo, mediante comandos el usuario puede solicitar ver el listado de links o bien estadísticas del número de links existentes en el archivo o el número de links rotos. Para su desarrollo se utilizó Javascript, Node.js, y la libreria Markdown-it.'
  }
];
