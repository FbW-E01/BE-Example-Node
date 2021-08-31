import process from 'process';

// Print ALL arguments used in starting the program
// console.log(process.argv);

// Loop throught arguments and print them
process.argv.forEach(arg => {
    console.log("ARGUMENT: " + arg);
    if (arg === "potato") {
        // This immediately stops our Node program 
        // Nothing else will be printed after this
        process.exit();
    }
});

console.log("After the forEach loop!!!!!!");