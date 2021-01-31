let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function numberPrinting (array) {
    for (let i = 0; i <array.length; i++){
        number = array[i];
        
        if (number % 2 === 0) {
            console.log(number)
            console.log(`\n`)

        } else {
            console.log(number)
            console.log(` `)
        }

    }
}
numberPrinting(numbers)