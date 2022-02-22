window.onload= function(){
    const body = document.querySelector("body");
    const pdf = document.querySelector("embed");

    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    pdf.attributes["width"].value = w;
    pdf.attributes["height"].value = h;
}