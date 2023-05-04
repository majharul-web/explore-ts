"use strict";
let emni;
/*
 *** casting/assertion:<type> || as
 */
let myVar;
myVar = "Next level web development";
myVar.length;
myVar.length;
// function example
function kgToGram(param) {
    if (typeof param === "string") {
        return parseFloat(param) * 1000;
    }
    if (typeof param === "number") {
        return param * 1000;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
const resultToBeStrings = kgToGram("1000");
try {
}
catch (error) {
    console.log(error.message);
}
