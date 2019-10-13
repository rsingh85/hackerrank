"use strict";

function repeatedString(s, n) {
    const matchesInS = s.match(/[a]/g);

    if (!matchesInS) {
        return 0;
    }

    let occurrencesInFullString = matchesInS.length * Math.floor(n / s.length);
    let occurrencesInPartialString = 0;
    const partialStringLength = n % s.length;

    if (partialStringLength > 0) {
        const matchesInPartialString =
            s.substring(0, partialStringLength).match(/[a]/g);

        if (matchesInPartialString) {
            occurrencesInPartialString = matchesInPartialString.length;
        }
    }

    return occurrencesInFullString + occurrencesInPartialString;
}

const s = "aba";
const n = 10;
const result = repeatedString(s, n);

console.log(result);