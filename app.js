var readline = require('readline');
var fse = require('fs-extra');
var mergeFiles = require('merge-files');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the path to the files directory (c:\\files):", (path) => {
    if (path == "") {
        path = "c:\\files"
    }
    rl.close();
    return mergeAllFiles(path);
});

function mergeAllFiles(path) {
    new Promise((resolve, reject) => {resolve(path)})
    .then((path) => {
        return fse.readdir(path);
    })
    .then((files) => {
        return files.map((element) => {
            return path + "\\" + element;
        })
    })
    .then((files) => {
        let outputPath = path + "\\output.txt";
        mergeFiles(files,outputPath).then((status) => {
            if(status){
                console.log("File is merge. Output file: " + outputPath);
            } else {
                console.log("Error in merge file");
            }
        });
    })
}