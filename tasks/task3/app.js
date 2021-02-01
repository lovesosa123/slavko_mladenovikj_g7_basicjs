let change = parseInt(prompt(`Please enter the value of your change`));
let coinNumber =  [];
let coins = [ 50, 20, 10, 5, 1];

// couldnt really find out how the logic works behind this exercise :(



function changeCalculator(array) {
  let changeCoinValue = [];

      
     for(let i = 0; i < coins.length ; i++) {
      
       if (change % coins[i] === 0){
       
        changeCoinValue += ` ` + coins[i]
        console.log (changeCoinValue)
       
        

      }  else {

      }
    }
  }

changeCalculator(coinNumber)