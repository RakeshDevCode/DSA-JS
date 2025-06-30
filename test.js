let rows = 3;

for (let i = 1; i <= rows; i++) {
    let line = "";

    // Add spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    // Add stars
    for (let k = 1; k <= i; k++) {
        line += "*";
    }

    console.log(line);
}
