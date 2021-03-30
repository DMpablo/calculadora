const botonNumbers = document.getElementsByName("data-number");
const botonFunciones = document.getElementsByName("funcion");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonC = document.getElementsByName("data-delete")[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;


botonNumbers.forEach(function (boton) {
    boton.addEventListener('click', function () {
       agregarNumero(boton.innerText);
    })
})

botonFunciones.forEach(function(boton){
    boton.addEventListener('click',function(){
       selectOperacion(boton.innerText);
      
    })
})

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonC.addEventListener('click', function(){
    console.log();
    clear();
    actualizarDisplay();
})

function selectOperacion(op) {
    if (opeActual === '') return;
    if (opeAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';   
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior + actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;    
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function clear() {
     opeActual = '';
     opeAnterior = '';
     operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();
