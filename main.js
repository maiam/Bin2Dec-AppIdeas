
const inputBinarios = document.getElementById('input-binario');
const inputDecimais = document.getElementById('input-decimal');
const btnConvert = document.getElementById('btn-convert');
const btnReset = document.getElementById('btn-reset');

const btnZero = document.getElementById('btn-zero');
const btnOne = document.getElementById('btn-one');
// const testeKey = document.getElementById('input-binario');
const bin = document.querySelector('.bin');
const dec = document.querySelector('.dec');

btnZero.addEventListener("click", function(){
    if(inputDecimais.value==0){
        inputBinarios.value += 0;
    } else { 
        inputBinarios.value = 0;
        inputDecimais.value = "";
    }

});

btnOne.addEventListener("click", function(){
    if(inputDecimais.value==0){
        inputBinarios.value += 1;
    } else { 
        inputBinarios.value = 1;
        inputDecimais.value = "";
    }
});


function verificaBinarios() {

    let binario = inputBinarios.value;
    let tamanhoBinarios = binario.split('').filter(x=>x==0 || x==1).length;
    return tamanhoBinarios == binario.length;
}

function converteBinario() {
    
    let divideString = inputBinarios.value.split('');
    let potenciaString = divideString.reverse();
    let somaString = 0;
    for(i=0;i<divideString.length;i++){
        potenciaString[i]=potenciaString[i]*Math.pow(2,i);
        somaString = potenciaString[i] + somaString;
    }
    return somaString;
}

btnConvert.addEventListener('click', function() {
    if (verificaBinarios()){
        // mensagem.classList.remove('on');
        
        inputDecimais.value = converteBinario();
    } else {
        // mensagem.classList.add('on');
        inputDecimais.value = "";
    }
    
});

btnReset.addEventListener('click', function(){
    inputBinarios.value = "";
    inputDecimais.value = "";
    bin.classList.remove('on');
});

// IMPEDE QUE O USUARIO DIGITE QUALQUER NÚMERO DIFERENTE DE 0 OU 1
// testeKey.addEventListener("keydown", function(event)
// {       if (event.key!=0 && event.key!=1){
//         event.preventDefault()
              
// });

// Caso o usuário digite um número diferente de 0 ou 1 adiciona classe ON
// testeKey.addEventListener("keydown", function(event)
// {       if (event.key!=0 && event.key!=1){
//         bin.classList.add('on');       
// });

inputBinarios.addEventListener('input', function(){
    let binario = inputBinarios.value;
    let tamanhoBinarios = binario.split('').filter(x=>x==0 || x==1 ).length;

    if(!verificaBinarios()){
        bin.classList.add('on');
    } else {
        bin.classList.remove('on');
    }

});

