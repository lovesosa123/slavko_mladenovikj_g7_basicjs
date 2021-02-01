let numResult = [];
let numMin = parseInt(prompt(`please enter minimum number`));
let numMax = parseInt(prompt(`please enter maximum number`));





function divideSevenAndThree(array){
  let list = [];
  
  for (let i = numMin ; i <= numMax; i++) {

  if ((i % 3 === 0) && (i % 7 === 0)) {
        
     list.push(i);
     
    }  
    console.log(list)
  }
 } 
 



divideSevenAndThree(numResult)



