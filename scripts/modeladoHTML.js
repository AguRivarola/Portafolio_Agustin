
const modeladoHTML= {
    body: function(header,h1,h2,proyectos){`
    <header>
        ${header}
    </header>
    <h1>${h1}</h1>
    <section class="terminados">
        ${proyectos}
    </section>
    <h2>${h2}</h2>    
    <section class="no-terminados">
    ${proyectos}
    </section>
    `;
    
    },
    valor: 200,



}

module.exports(modeladoHTML);