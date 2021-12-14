// const json = require("./jsonHelper").default;
// const proyectos = json.leerJson("proyectos");
// const modeladoHTML = require("./modeladoHTML");

// console.table(proyectos);

// document.body.querySelector(".contenedor").innerHTML = "<h1>Hola</h1>" //modeladoHTML.body("Portafoio","Proyectos Terminados", "Proyectos en proceso", proyectos)
window.addEventListener('load', function () {

const barrasProgreso = document.querySelectorAll(".progreso");
const lenguajesListados = document.querySelectorAll(".lenguaje");
const ulLenguajes = document.querySelector('#lenguajes ul');


/* ----------------------- Modifico tamaño "ul:hover" ----------------------- */
// lenguajesListados.forEach((lenguaje,i) =>lenguaje.addEventListener('mouseover',function(e){
//     lenguaje.style.width = "100%";
//     ulLenguajes.style.width="50%";
//     lenguajesListados.forEach((lenguaje,j)=>{
//         if(j != i){
//             lenguaje.style.width = '50%';
//         }
//     })
// }))
// lenguajesListados.forEach((lenguaje,i) =>lenguaje.addEventListener('mouseleave',function(e){
//     lenguaje.style.width = "100%"
//     ulLenguajes.style.width="25%";
// }))



// En cada lenguaje al hacer click se oculta y muestra su barra de progreso
lenguajesListados.forEach((lenguaje,i) =>lenguaje.addEventListener('click',function(e){
        lenguajesListados[i].classList.toggle('oculto')
        barrasProgreso[i].classList.toggle('oculto')
}))
barrasProgreso.forEach((barra,i) =>barra.addEventListener('click',function(e){
    lenguajesListados[i].classList.toggle('oculto')
    barrasProgreso[i].classList.toggle('oculto')
}))


});