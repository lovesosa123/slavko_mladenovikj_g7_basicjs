let numbers = [20,50,23,40,25];

function maxMinSum(array) {

    array.sort(function(a, b){return a-b});
    
    let minimumValue=array[0];
    let maximumValue=array[array.length - 1];
    let sum = minimumValue + maximumValue;
    
    console.log(`Your minimumum value is ${minimumValue}, your maximum value is ${maximumValue} and the sum of them is ${sum}`)

}

maxMinSum(numbers)

