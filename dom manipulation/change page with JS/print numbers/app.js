let numbers=[2,5,9,12,18];
let list = document.querySelector(`li`);




function printSumNumbers (array) {

    result = 0;
    let listItems = [];
    
    for (let i = 0; i < array.length; i++) {
    
        
    listItems +=  array[i]  +  `,`;

    result += array[i];
    

    }

    list.innerHTML = `${listItems} and the sum is ${result}`;

}



printSumNumbers(numbers)




