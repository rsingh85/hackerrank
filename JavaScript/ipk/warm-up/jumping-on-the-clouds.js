"use strict";

function jumpingOnClouds(c) {
    let jumps = 0;
    
    for (let i = 0; i < c.length; i++) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            jumps++;
            i += 1;
        }
        else if (i + 1 < c.length) {
            jumps++;
        }
    }

    return jumps;
}

const c = [0, 0, 1, 0, 0, 1, 0];
const result = jumpingOnClouds(c);

console.log(result);