const path = require('path');
const fs = require('fs');

///<summary>
/// returns the names of all the files in the given the directory 
/// (path relative to lib)
/// \param[in] path to directory as string
/// \param[out] files in directory as array of string, or null 
async function listFilesInDirectory(dir) {
    try {
        let directoryPath = path.join(__dirname, '../lib', dir);
        return fs.readdirSync(directoryPath);
    } catch (e) {
        console.log(e);
        return;
    }
}

///<summary>
/// returns the contents of a file in a given directory,
/// or emtpy string. (path relative to lib)
/// \param[in] a string for the directory name, a string for the file name
/// \param[out] a string with the contents of the file, or null
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