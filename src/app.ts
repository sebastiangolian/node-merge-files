
console.log("----------- merge-files -----------");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the path to the file directory (c:\\files): ", (path:string) => {
    if(path == ""){
        path = "C:\\files"
    }
    console.log(path);
    rl.close();
});