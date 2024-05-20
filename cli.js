#!/usr/bin/env node

const createBookmarksHtml = require('./index');
const [,, inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
    console.error('Usage: txt-to-bookmark <inputFile> <outputFile>');
    process.exit(1);
}

createBookmarksHtml(inputFile, outputFile);
console.log(`Bookmarks have been generated and saved to ${outputFile}`);