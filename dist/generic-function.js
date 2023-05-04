"use strict";
const getStringArr = (param) => {
    return [param];
};
const result1 = getStringArr("rahim");
// general function
function getStringArr2(param) {
    return [param];
}
const result = getStringArr("rahim");
const spreadIn = (par) => {
    const test = "test";
    return Object.assign(Object.assign({}, par), { test });
};
const myInfo = {
    name: "rahim",
    age: 10,
};
spreadIn(myInfo);
