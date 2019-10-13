"use strict";

function minimumBribes(q) {
    let minBribes = 0;
    
    // first check for the chaotic scenario
    for (let i = 0; i < q.length; i++) {
        const currentPersonNumber = q[i];
        const differenceFromOriginalPosition = currentPersonNumber - (i + 1);
        if (differenceFromOriginalPosition > 2) {
            console.log("Too chaotic");
            return;
        }
    }

    // use bubble sort to reverse the swaps, each swap is a bribe
    let sortComplete = false;

    while (!sortComplete) {
        let swapped = false;

        for (let i = 0; i < q.length - 1; i++) {
            if (q[i] > q[i + 1]) {
                swap(q, i, i + 1);
                swapped = true;
                minBribes++;
            }
        }

        if (!swapped) {
            sortComplete = true;
        }
    }

    console.log(minBribes);
}

function swap(numbers, fromIndex, toIndex) {
    const fromValue = numbers[fromIndex];
    numbers[fromIndex] = numbers[toIndex];
    numbers[toIndex] = fromValue;
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);