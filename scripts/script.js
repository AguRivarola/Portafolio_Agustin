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
    lenguajesListados.forEach((lenguaje, i) => lenguaje.addEventListener('click', function (e) {
        lenguajesListados[i].classList.toggle('oculto')
        barrasProgreso[i].classList.toggle('oculto')
    }))
    barrasProgreso.forEach((barra, i) => barra.addEventListener('click', function (e) {
        lenguajesListados[i].classList.toggle('oculto')
        barrasProgreso[i].classList.toggle('oculto')
    }))

    /* -------------------------------------------------------------------------- */
    /*                                    matrix canva                            */
    /* -------------------------------------------------------------------------- */


    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    const w = canvas.width = document.body.clientWidth;
    const h = canvas.height //= document.body.clientHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';


        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0; else
                ypos[ind] = y + 20;
        });
    }

    setInterval(matrix, 50);

});

/* -------------------------------------------------------------------------- */
/*                                    Mi CV                                   */
/* -------------------------------------------------------------------------- */
const btnCv = document.querySelector("#About_Me .boton")
btnCv.addEventListener('click',function (e) {
    window.open('/files/AgusRivarola_CV.pdf', '_blank');

})

const onClickExportar = function (evento) {
    // html2canvas(document.querySelector('.meme')).then(canvas => {
    //     var img = canvas.toDataURL('image/png');

    //     var link = document.createElement('a');
    //     link.download = 'meme.png';
    //     link.href = img
    //     link.click();
    // })
    alert("Hola")
}
