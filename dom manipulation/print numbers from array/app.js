let numbersArray = [1,5,6,7,9];

let listEl = document.getElementById(`numbers`);

function printNumbers (array) {

    listEl.innerhtml = '';
    numbersPrinted ='';

    for (let i = 0; i <array.length; i++) {
      numbersPrinted += `${number}`;

    }
    listEl.innerhtml += `${numbersPrinted}`
}

printNumbers(numbers)