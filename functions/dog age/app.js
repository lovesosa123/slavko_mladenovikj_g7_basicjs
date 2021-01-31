function dogAgeCalculated(humanAge, dogAge) {
    if (isNaN(humanAge) && isNaN(dogAge)) {
        console.log(`Please enter a valid number`)
    } else {
        return `${humanAge} in dog years is ${humanAge*7}, and ${dogAge} in human years is ${dogAge/7}`
    }
}

console.log(dogAgeCalculated(12,15))
