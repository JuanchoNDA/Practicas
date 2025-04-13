const btnPapel = document.getElementById("papel");
const btnPiedra = document.getElementById("piedra");
const btnTijera = document.getElementById("tijera");

let pts = document.getElementById('puntos');
let res = document.getElementById('resultado');

let total = 0;

btnPapel.addEventListener('click', function(){
let maquinaP = Math.floor(Math.random() * 3) + 1;

if(maquinaP == 1){
total += 1;
let resultado = total.toString();
pts.textContent = "Puntos: " + resultado;
res.textContent = "Piedra, ganaste.";
}

else if(maquinaP == 2){
    total -= 1;
    let resultado = total.toString();
    pts.textContent = "Puntos: " + resultado;
    res.textContent = "Tijera, Perdiste";
}

else{
    let resultado = total.toString();
    pts.textContent = "Puntos: " + resultado;
    res.textContent = "Papel, Empate";
}

});

btnTijera.addEventListener('click', function(){
let maquinaT = Math.floor(Math.random() * 3) + 1;

if(maquinaT == 2){
    total += 1;
    let resultado = total.toString();
    pts.textContent = "Puntos: " + resultado;
    res.textContent = "Papel, ganaste";
    }
    else if(maquinaT == 2){
        total -= 1;
        let resultado = total.toString();
        pts.textContent = "Puntos: " + resultado;
        res.textContent = "Piedra, Perdiste";
    }
    
    else{
        let resultado = total.toString();
        pts.textContent = "Puntos: " + resultado;
        res.textContent = "Tijera, Empate";
    }
});
btnPiedra.addEventListener('click', function(){
    let maquinaP = Math.floor(Math.random() * 3) + 1;
    
    if(maquinaP == 2){
        total += 1;
        let resultado = total.toString();
        pts.textContent = "Puntos: " + resultado;
        res.textContent = "Tijera, ganaste";
        }
        else if(maquinaP == 2){
            total -= 1;
            let resultado = total.toString();
            pts.textContent = "Puntos: " + resultado;
            res.textContent = "Papel, Perdiste";
        }
        
        else{
            let resultado = total.toString();
            pts.textContent = "Puntos: " + resultado;
            res.textContent = "Piedra, Empate";
        }
    });