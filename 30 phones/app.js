let numberOfPhones = 30;
let phonePrice = 119.95;
let taxRatePercent =5;

let priceOfPhonesBeforeTax= numberOfPhones*phonePrice;
let priceOfPhonesAfterTax= (1-taxRatePercent/100)*priceOfPhonesBeforeTax;

console.log("Heres your price", priceOfPhonesAfterTax);





