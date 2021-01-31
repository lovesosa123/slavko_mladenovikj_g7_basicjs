
function typeOfVariable(variable)  {
    if (typeof variable === `boolean`) {
    console.log (`Variable is a bolean`);
    console.log (variable)
}   if (typeof variable === `string`) {
    console.log (`Variable is a string`);
    console.log (variable)
}   if (typeof variable === `number`) {
    console.log (`Variable is a number`);
    console.log (variable)
}   if (typeof variable === `object`) {
    console.log (`Variable is an object`);
    console.log (variable)
}   if (typeof variable === `undefined`) {
    console.log (`Variable is undefined`);
    console.log (variable)
}
}

typeOfVariable(12)