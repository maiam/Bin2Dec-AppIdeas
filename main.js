const inputBinarios = document.getElementById('inputBinarios');
const inputDecimais = document.getElementById('inputDecimais');
const btn = document.getElementById('btnConvert');
const mensagem = document.getElementById('mensagem-erro');

// function converteNumero {

// }

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

btn.addEventListener('click', function() {

    if (verificaBinarios()){
        mensagem.classList.remove('on');
        // inputBinarios.classList.remove('error');
        inputDecimais.value = converteBinario();
    } else {
        mensagem.classList.add('on');
        // inputBinarios.classList.add('error');
        inputDecimais.value = "";
    }
    

});

