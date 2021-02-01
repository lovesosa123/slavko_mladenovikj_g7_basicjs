const array = [0, 2, 5, 4, 6, 8];


function printNumbers(array) {
    const numbers = [0];
     for (let i = 1; i <array.length; i++) {

        if ((array[i-1]%2 === 0)&&(array[i]%2 ===0)) {

            numbers.push ('-' + array[i]);
        
    }   else {

            numbers.push(` ` + array[i]);
         
     }
       console.log(numbers)
  }  
}

printNumbers(array)
