#!/usr/bin/env node

const createBookmarksHtml = require('./index');
const { version } = require('./package.json');
const [,, ...args] = process.argv;

const usage = 'Usage: text-to-bookmark <inputFile> <outputFile> [--title=<title>] [--style=<style>] [--author=<author>] [--date=<creationDate>]';

if (args.includes('--version')) {
    console.log(`text-to-bookmark version ${version}`);
    process.exit(0);
}

const inputFile = args[0];
const outputFile = args[1];

if (!inputFile || !outputFile) {
    console.error(usage);
    process.exit(1);
}

const options = {
    title: 'Bookmarks',
    style: 'default',
    metadata: {
        author: '',
        date: new Date().toISOString()
    }
};

// Parse options
args.slice(2).forEach(arg => {
    if (arg.startsWith('--title=')) {
        options.title = arg.split('=')[1];
    } else if (arg.startsWith('--style=')) {
        options.style = arg.split('=')[1];
    } else if (arg.startsWith('--author=')) {
        options.metadata.author = arg.split('=')[1];
    } else if (arg.startsWith('--date=')) {
        // Parse the date string into a Date object
        options.metadata.date = new Date(arg.split('=')[1]);
    }
});

createBookmarksHtml(inputFile, outputFile, options);
console.log(`Bookmarks have been generated and saved to ${outputFile}`);