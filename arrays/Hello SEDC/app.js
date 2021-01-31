let greetings = [`Hello`, `there`, `students`, `of`, `SEDC`];
let pokemon = [`Pikachu`, `Bulbasaur`, `Charmander`, `Squirtle`];

function bigStringConverter(array) {
    for(let i = 0; i < array.length; i++) 
    {
     let word = array[i];
     console.log(word);
    }
}

console.log(bigStringConverter(greetings));
console.log(bigStringConverter(pokemon));