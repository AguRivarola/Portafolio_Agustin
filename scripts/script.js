const json = require("./jsonHelper").default;
const proyectos = json.leerJson("proyectos");
const modeladoHTML = require("./modeladoHTML");

console.table(proyectos);

document.body.querySelector(".contenedor").innerHTML = "<h1>Hola</h1>" //modeladoHTML.body("Portafoio","Proyectos Terminados", "Proyectos en proceso", proyectos)