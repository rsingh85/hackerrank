"use strict";

function countingValleys(n, s) {
    let currentLevel = 0;
    let valleyCount = 0;

    for (let i = 0; i < n; i++) {
        const currentStep = s.charAt(i).toLowerCase();

        if (currentStep === "u"){
            currentLevel++;
        }
        else {
            if (currentLevel === 0) {
                valleyCount++;
            }
            currentLevel--;
        }
    }

    return valleyCount;
}

const n = 8;
const s = "UDDDUDUU";
const result = countingValleys(n, s);

console.log(result);