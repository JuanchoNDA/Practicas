
let Texto = document.getElementById("txt");
const boton = document.getElementById("btn");
const botonDel = document.getElementById("btnDel");
const botonMult = document.getElementById("btnMult");
const botonDiv = document.getElementById("btnDiv");
const botonRes = document.getElementById("btnRes");
let respuesta = document.getElementById("res");


let Suma = 0;


boton.addEventListener('click', function(){
    TextoAINT = parseInt(Texto.value);
    Suma += TextoAINT;
    INTATexto = Suma.toString();
    respuesta.textContent = "Resultado: " + INTATexto;
});


botonMult.addEventListener('click', function(){
    TextoAINT = parseInt(Texto.value);
    Suma *= TextoAINT;
    INTATexto = Suma.toString();
    respuesta.textContent = "Resultado: " + INTATexto;
});


botonDiv.addEventListener('click', function(){
    TextoAINT = parseInt(Texto.value);
    Suma /= TextoAINT;
    INTATexto = Suma.toString();
    respuesta.textContent = "Resultado: " + INTATexto;
});

botonRes.addEventListener('click', function(){
    TextoAINT = parseInt(Texto.value);
    Suma -= TextoAINT;
    INTATexto = Suma.toString();
    respuesta.textContent = "Resultado: " + INTATexto;
});

botonDel.addEventListener('click', function(){
    Suma = 0;
    INTATexto = Suma.toString();
    respuesta.textContent = "Resultado: " + INTATexto;
});