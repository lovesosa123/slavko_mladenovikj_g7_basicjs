let firstNames = [`Bob`, `Jenny`, `Christian`, `Miguel`];
let lastNames = [`Johnson`, `Jackson`, `Bale`, `Hernandez`];

function fullNames (array1, array2) {
    
    let fullNames = [];
    
    for ( let i = 0; i < array1.length && i < array2.length; i++) {
    
        let numericValue = array1.indexOf(array1[i]);
        let full = [numericValue + `. `] + array1[i] + [` ` + array2[i]] ;
        fullNames.push(full)


    }
    
    return fullNames;
}


console.log(fullNames(firstNames, lastNames))