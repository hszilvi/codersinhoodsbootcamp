const fs = require('fs');
const path = require('path');
/**
 * Exercise 1
 *
 * create a function {createJsonFileWithContent} that will take
 * {data} and {fileName} as arguments, stringify {data}
 * and store it in the json file {./data/[fileName].json}
 * synchronously.
 *
 * NOTES:
 * 1. if {filename} not provided, log an error "File name is missing"
 * 2. if path is incorrect, log an error "No such file or directory"
 */
const createJsonFileWithContent = (data, fileName) => {
    if (fileName) {
        let fullName = `./data/${fileName}.json`;
        let parentdir = path.dirname(fullName);
        if (!fs.existsSync(parentdir)) {
            fs.mkdirSync(parentdir)
        }
        const result = JSON.stringify(data);
        fs.writeFileSync(fullName, result);
        return;
    }
   console.log('File name is missing');
};

/**
 * Exercise 2
 *
 * create a function {readJsonFile} that will take a {fileName} that
 * exist in {./data/} as an argument,
 * read, parse it and return file content as an object synchronously.
 * If file does not exist, return
 *
 * NOTES:
 * 1. if path is incorrect, log an error "No such file or directory"
 */
const readJsonFile = (fileName) => {
    if (fileName) {
        let fullName = `./data/${fileName}.json`;
        if (fs.existsSync(fullName)) {
            const data = fs.readFileSync(fullName);
            return JSON.parse(data);
        }
    }
    return null;
};
/**
 * Exercise 3
 *
 * create a function {updateFileWithContent} that will take
 * {data} that need to be added/modified and {fileName} as arguments,
 * and add it the file {./data/[fileName].json} synchronously.
 */
const updateFileWithContent = (data, fileName) => {
    const result = readJsonFile(fileName);
    const addData = JSON.stringify({...result, ...data});
    fs.writeFileSync(`./data/${fileName}.json`, addData);
};
/**
 * Exercise 4
 *
 * create a function {getFileSize} that will take {fileName} as argument and return
 * file size in bytes.
 */
const getFileSize = (fileName) => {
    const fileSize = fs.statSync(`./data/${fileName}.json`);
    return fileSize.size;
};
/**
 * Exercise 5
 *
 * create a function {cloneJsonFile} which will take a {src} and {destination}
 * as arguments and create a clone file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */
const cloneJsonFile = (src, destination) => {
    let srcData = JSON.parse(fs.readFileSync(src));
    if (srcData && destination) {
        let destinationData = JSON.stringify(srcData);
        fs.writeFileSync(destination, destinationData);
    }
    console.log('Error');
}
/**
 * Exercise 6
 *
 * create a function {deleteFile} which will take a {src}
 * as an argument and delete a file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */
const deleteFile = (src) => {
    if (src) {
        fs.unlinkSync(src);
    }
    console.log('Src does not exists.');
};

