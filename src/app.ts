
console.log("----------- merge-files -----------");

import readline from 'readline';
import fse from 'fs-extra';
import Promise from "bluebird";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let files:string[] = new Array();
// rl.question("Please enter the path to the file directory (c:\\files): ", (path: string) => {
//     if (path == "") {
//         path = "C:\\files"
//     }
//     rl.close();
//     let files:string[] = fse.readdirSync(path);
//     console.log("1");
//     console.log(files);

//     let ret:string[] = new Array();
//     fse.readdir(path, (err,files) => {
//         if (err) return console.error(err);
//         console.log("2");
//         console.log(files);
//     })
// });



async function askQuestion(question:string) {
    const questionAsync = Promise.promisify<string, string>((question: string, callback: Function) => {
        rl.question(question,callback.bind(null, null));
    });
	return await questionAsync(question);
}

async function readDir(path:string) {
    return fse.readdir(path);
}

askQuestion("Please enter the path to the file directory (c:\\files): ")
//.then(path => {console.log(path)})
.then(path => {readDir(path)})
.then(dirs => {console.log(dirs)})
.then(() => rl.close());