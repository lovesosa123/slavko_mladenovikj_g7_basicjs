let userInput = prompt("Please enter the year");
let yearInChineseZodiac = ((userInput - 4) % 12);
let parsedYearInChineseZodiac = parseInt(yearInChineseZodiac)

switch (parsedYearInChineseZodiac) {
    case 1: 
          alert("The Chinese zodiac for this year is a Rat.")
          break;
    case 2: 
          alert ("The Chinese zodiac for this year is an Ox.")
          break;
    case 3: 
          alert("The Chinese zodiac for this year is a Tiger.")
          break;     
    case 4: 
          alert("The Chinese zodiac for this year is a Rabbit.")
          break;
    case 5: 
          alert("The Chinese zodiac for this year is a Snake.")
          break;
    case 6: 
          alert("The Chinese zodiac for this year is a Horse.")
          break;
    case 7: 
          alert("The Chinese zodiac for this year is a Goat.")
          break;
    case 8: 
          alert("The Chinese zodiac for this year is a Monkey.")
          break;
    case 9: 
          alert("The Chinese zodiac for this year is a Rooster.")
          break;
    case 10: 
          alert("The Chinese zodiac for this year is a Dog.")
          break;
    case 11: 
          alert("The Chinese zodiac for this year is a Pig.")
          break;
    default: 
          alert("Somehow this year isnt in the Chinese zodiac.")
}