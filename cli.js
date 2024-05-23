#!/usr/bin/env node

const createBookmarksHtml = require('./index');
const { version } = require('./package.json');
const { format } = require('date-fns');
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
        date: format(new Date(), 'yyyy-MM-dd') // Correctly format the date
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
        const providedDate = arg.split('=')[1];
        // Validate and format the provided date
        const parsedDate = new Date(providedDate);
        if (!isNaN(parsedDate)) {
            options.metadata.date = format(parsedDate, 'yyyy-MM-dd');
        } else {
            console.error(`Invalid date format: ${providedDate}`);
            process.exit(1);
        }
    }
});

createBookmarksHtml(inputFile, outputFile, options)
    .then(() => console.log(`Bookmarks have been generated and saved to ${outputFile}`))
    .catch(err => {
        console.error(`Error generating bookmarks: ${err.message}`);
        process.exit(1);
    });
