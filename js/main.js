
const inputEl = document.querySelector('#input')
const outputEl = document.querySelector('#output')
const selectEl = document.querySelector('#formControlSelect')
const btnEl = document.querySelector('#btn-submit')

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
        if(!isBinary(num))return
        outputEl.value = convertBinaryToDecimal(num)

    }
}

btnEl.addEventListener('click', (e) => {
    e.preventDefault()
    convertTo(selectEl.value, inputEl.value)
})
