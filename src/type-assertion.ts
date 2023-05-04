let emni: any;

/*
 *** casting/assertion:<type> || as
 */
let myVar: any;
myVar = "Next level web development";
(myVar as string).length;
(<string>myVar).length;

// function example
function kgToGram(param: string | number): number | string | undefined {
  if (typeof param === "string") {
    return parseFloat(param) * 1000;
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram("1000") as string;
const resultToBeStrings = <string>kgToGram("1000");

type customErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as customErrorType).message);
}
