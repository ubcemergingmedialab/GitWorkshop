const path = require('path');
const fs = require('fs');

/*
 returns the names of all the files in the given the directory 
 (path relative to lib)
 @param path to directory as string
 @returns files in directory as array of string, or null
*/ 
async function listFilesInDirectory(dir) {
    try {
        let directoryPath = path.join(__dirname, '../lib', dir);
        return fs.readdirSync(directoryPath);
    } catch (e) {
        console.log(e);
        return;
    }
}

/*
 returns the contents of a file in a given directory,
 or emtpy string. (path relative to lib)
 @param dir a string for the directory name, a 
 @param string for the filename
 @returns filename a string with the contents of the file, or null
*/
async function fileContents(dir, filename) {
    let result = [];
    try {
        var data = fs.readFileSync(path.join(__dirname, '../lib', dir, filename));
        return data;
    } catch (e) {
        console.log(e);
        return;
    }
}

module.exports = { listFilesInDirectory, fileContents };
