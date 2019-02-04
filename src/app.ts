
console.log("----------- merge-files -----------");

import readline from 'readline-promise';
import fse from 'fs-extra';
import { reject } from 'bluebird';

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rlp.questionAsync("Please enter the path to the file directory (c:\\files): ")
.then((result:any) => {
    if(result == ""){
        return "c:\\files";
    } else {
        return result;
    }
})
.then((path:any) => {
    return fse.readdir(path);
})
.then((files:any) => {
    console.log(files);
})
