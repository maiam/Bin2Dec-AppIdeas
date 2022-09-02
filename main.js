const inputBinarios = document.getElementById('input-binario');
const inputDecimais = document.getElementById('input-decimal');
const btn = document.getElementById('btn-converter');
const btnZero = document.getElementById('btn-zero');
const btnOne = document.getElementById('btn-one');


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

btn.addEventListener('click', function() {

    if (verificaBinarios()){
        // mensagem.classList.remove('on');
        
        inputDecimais.value = converteBinario();
    } else {
        mensagem.classList.add('on');
        inputDecimais.value = "";
    }
    

});

