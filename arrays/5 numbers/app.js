let numbers = [2,5,5,7,9];

function returnSum(array) {
    
    let result = 0;
    for (let i = 0; i < array.length; i++) {
    result += array[i];
    }
    
    return result;
}

function validateNumber(array) {
    
    let number = 0;
    
    for (let i = 0; i < array.length; i++) {
        
        number = array[i];
        
        if (isNaN(number)) {
        console.log(`Error invalid number`)
        } else {
            console.log(number)
        }
    }
}


console.log(returnSum(numbers));
console.log(validateNumber(numbers));
