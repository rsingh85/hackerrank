"use strict";

function rotateLeft(a, d) {
    const newArray = [];

    for (var i = 0; i < a.length; i++) {
        let newPos = (i + (a.length - d)) % a.length;
        newArray[newPos] = a[i];
    }
    return newArray;
}

const a = [1, 2, 3, 4, 5];
const d = 4;
const result = rotateLeft(a, d);

console.log(result);