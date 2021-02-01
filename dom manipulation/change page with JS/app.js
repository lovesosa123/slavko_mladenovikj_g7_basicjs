let headers = document.querySelectorAll (`h1`);

function printHeaders (array) {
    
    for (let i = 0; i < array.length; i++) {
    
        array[i].innerText = 'very cool';
    }
}

printHeaders(headers);

let paragraphs = document.querySelectorAll (`p`);

function printParagraphs (array) {
    
    for (let i = 0; i < array.length; i++) {
    
        array[i].innerText = 'even cooler';
    }
}

printParagraphs(paragraphs);


let header3 = document.querySelector(`h3`);

header3.innerText = 'the coolest';