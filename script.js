let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//FUNCION QUE APLICA A LAS ANIMACIONES DE LAS HABILIDADES

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>= 300){
        let habilidades = document.getElementById("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("cnet");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("angular");
        habilidades[5].classList.add("typescript");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("proyect");
        habilidades[9].classList.add("resolucion");
        habilidades[10].classList.add("adaptacion");
        habilidades[11].classList.add("trabajo");
    }
}


//DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll=function(){
    efectoHabilidades();
}
function irAlRepositorio() {
    window.open('https://github.com/alvarolealg/CRUD', '_blank');
}
