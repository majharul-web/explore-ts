"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Error");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield res.json();
});
const fetchTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("data", fetchData());
});
fetchTodo();
