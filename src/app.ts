
console.log("----------- merge-files -----------");

import readline from 'readline';
import fse from 'fs-extra';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let files:string[] = new Array();
rl.question("Please enter the path to the file directory (c:\\files): ", (path: string) => {
    if (path == "") {
        path = "C:\\files"
    }
    rl.close();
    let files:string[] = fse.readdirSync(path);
    console.log("1");
    console.log(files);
    
    let ret:string[] = new Array();
    fse.readdir(path, (err,files) => {
        if (err) return console.error(err);
        console.log("2");
        console.log(files);
    })
    
    
});