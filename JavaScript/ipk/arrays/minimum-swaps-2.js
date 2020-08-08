"use strict";

function minimumSwaps(arr) {
    let minSwaps = 0;
    let complete = false;

    while (!complete) {
        let swappedInPass = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != (i + 1)) {
                minSwaps++;
                swap(i, arr[i] - 1, arr);
                swappedInPass = true;
            }
        }

        if (!swappedInPass) {
            complete = true;
        }
    }

    return minSwaps;
}

function swap(fromIndex, toIndex, arr) {
    const toVal = arr[toIndex];
    arr[toIndex] = arr[fromIndex];
    arr[fromIndex] = toVal;
}

const arr = [4, 3, 1, 2];
const result = minimumSwaps(arr);

console.log(result);