"use strict";

function sockMerchant(n, ar) {
    const sockColourToNumberMap = new Map();

    ar.forEach(c => {
        if (!sockColourToNumberMap.has(c)) {
            sockColourToNumberMap.set(c, 1);
        }
        else {
            const currentNumberOfSocksForThisColour = sockColourToNumberMap.get(c);
            sockColourToNumberMap.set(c, currentNumberOfSocksForThisColour + 1);
        }
    });

    console.log(sockColourToNumberMap);
    
    let numberOfPairs = 0;

    for (const colourKey of sockColourToNumberMap.keys()) {
        const colourOccurence = sockColourToNumberMap.get(colourKey);

        if (colourOccurence % 2 !== 0) {
            numberOfPairs += (colourOccurence - 1) / 2;
        }
        else {
            numberOfPairs += colourOccurence / 2;
        }
    }

    return numberOfPairs;
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(n, ar);

console.log(result);