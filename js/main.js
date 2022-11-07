
const inputEl = document.querySelector('#input')
const outputEl = document.querySelector('#output')
const selectEl = document.querySelector('#formControlSelectInput')
const switchEl = document.querySelector('[data-verified]')
const btnEl = document.querySelector('#btn-submit')
const trashBtnEl = document.querySelector('.fa-trash')

function isBinary(bin) {
    let binary = bin;
    let binLength = bin
      .split("")
      .filter((x) => x == 0 || x == 1).length;
    return binLength == binary.length;
  }

function isDecimal(dec) { 
    const decimal = dec
    const decLength = dec
    .split("")
    .filter((x) => x < 10).length;
    return decLength == decimal.length
}

function convertBinaryToDecimal(bin) {
  let splitBin = bin.split("");
  let reverseBin = splitBin.reverse();
  let sum = 0;
  for (i = 0; i < splitBin.length; i++) {
    reverseBin[i] = reverseBin[i] * Math.pow(2, i);
    sum = reverseBin[i] + sum;
  }
  return sum;
}

function convertTo(opt, num) {
    if(opt == 'Binary') {
        console.log(isDecimal(num))
    }
    if(opt == 'Decimal') {
        if(!isBinary(num)){
          inputEl.classList.remove('is-valid')
          inputEl.classList.add('is-invalid')
          return
        }
        inputEl.classList.remove('is-invalid')
        inputEl.classList.add('is-valid')
        outputEl.value = convertBinaryToDecimal(num)

    }
}

function switchInputs () {

  //FUNCIONALIDADE EM CONSTRUÇÃO
  // const labelInput = document.querySelector('[data-label-input]')
  // const labelOutput = document.querySelector('[data-label-output]')
  // const divCardHeaderText = document.querySelector('.card-header')
  // const smallInput = document.querySelector('#passwordHelpBlockInput')
  // const smallOutput = document.querySelector('#passwordHelpBlockOutput')
  
  // if(switchEl.getAttribute('data-verified') == '0'){
  //   divCardHeaderText.innerText = 'Converte Decimal para Binário'
  //   switchEl.setAttribute('data-verified', '1')
  //   labelInput.innerText = "Decimal:"
  //   labelOutput.innerText = "Binário:"
  //   inputEl.setAttribute('data-input', inputEl.value)
  //   outputEl.setAttribute('data-output', outputEl.value)
  //   inputEl.value = outputEl.getAttribute('data-output')
  //   outputEl.value = inputEl.getAttribute('data-input')
  //   smallInput.innerText = 'São aceitos apenas os números inteiros entre 0 e 9.'
  //   smallOutput.innerText = 'São aceitos apenas os números 0 e 1.'

    
  // } else {
  //   divCardHeaderText.innerText = 'Converte Binário para Decimal'
  //   switchEl.setAttribute('data-verified', '0')
  //   labelInput.innerText = "Binário:"
  //   labelOutput.innerText = "Decimal:"  
  //   inputEl.setAttribute('data-input', inputEl.value)
  //   outputEl.setAttribute('data-output', outputEl.value)
  //   inputEl.value = outputEl.getAttribute('data-output')
  //   outputEl.value = inputEl.getAttribute('data-input')
  //   smallInput.innerText = 'São aceitos apenas os números 0 e 1.'
  //   smallOutput.innerText = 'São aceitos apenas os números inteiros entre 0 e 9.'

  // }

}

function clearAll() {
    inputEl.setAttribute('data-input', '')
    outputEl.setAttribute('data-output','')

    inputEl.value = ''
    outputEl.value = ''
    inputEl.classList.remove('is-invalid')
    inputEl.classList.remove('is-valid')
}

inputEl.addEventListener('input', (e) => {
    e.preventDefault()
    convertTo("Decimal", inputEl.value)
})

switchEl.addEventListener('click', switchInputs)
trashBtnEl.addEventListener('click', clearAll)

$(document).ready(function() {
  $('[data-toggle="popover"').popover({
    container: 'body'
  });
});