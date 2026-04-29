
let result = "";

for (let row = 1; row <= 3; row++) {
    // each row starts here
    for (let col = 1; col <= 3; col++) {
        result += col;   // adding numbers 1 2 3
    }

    result += "\n"; // move to next line after one row is done
}

console.log(result);