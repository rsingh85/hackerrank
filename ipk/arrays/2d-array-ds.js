"use strict";

function hourglassSum(arr) {
    const hourGlassSums = [];

    for (let row = 0; row < arr.length - 2; row++) {
        for (let col = 0; col < arr[row].length - 2; col++) {
            const currentHourGlassSum = 
                arr[row][col] + arr[row][col + 1] + arr[row][col + 2] +
                arr[row + 1][col + 1] +
                arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];

            hourGlassSums.push(currentHourGlassSum);
        }
    }

    return hourGlassSums.sort(function(a,b) { return a - b; })[hourGlassSums.length - 1];
}

const arr = [
 [1, 1, 1, 0, 0, 0],
 [0, 1, 0, 0, 0, 0],
 [1, 1, 1, 0, 0, 0],
 [0, 0, 2, 4, 4, 0],
 [0, 0, 0, 2, 0, 0],
 [0, 0, 1, 2, 4, 0]
];
const result = hourglassSum(arr);

console.log(result);