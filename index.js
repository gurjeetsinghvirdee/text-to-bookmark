const fs = require('fs');
const { format } = require('date-fns');

function createBookmarksHtml(inputFile, outputFile, options) {
    return new Promise((resolve, reject) => {
        const links = fs.readFileSync(inputFile, 'utf8').split('\n');

        let htmlContent = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
        <!-- This is an automatically generated file.
        It will be read and overwritten.
        Do Not Edit! -->
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
        <TITLE>${options.title || "Bookmarks"}</TITLE>
        <H1>${options.title || "Bookmarks"}</H1>
        `;

        htmlContent += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">`

        if (options.style) {
            const customStyles = getCustomStyles(options.style);
            htmlContent += `<style>${customStyles}</style>`;
        }

        if (options.metadata) {
            htmlContent += generateMetadata(options.metadata);
        }

        const bookmarks = parseBookmarks(links);
        htmlContent += `<DL><p>\n`;
        htmlContent += generateBookmarkHtml(bookmarks);
        htmlContent += `</DL><p>`;

        fs.writeFile(outputFile, htmlContent, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function generateBookmarkHtml(bookmark, indent = '') {
    let html = '';

    if (bookmark.type === 'folder') {
        html += `${indent}<DT><H3>${bookmark.title}</H3>\n`;
        html += `${indent}<DL><p>\n`;
        bookmark.children.forEach(child => {
            html += generateBookmarkHtml(child, indent + '    ');
        });
        html += `${indent}</DL><p>\n`;
    } else if (bookmark.type === 'link') {
        html += `${indent}<DT><A HREF="${bookmark.url}">${bookmark.title}</A>\n`;
    }

    return html;
}

function generateMetadata(metadata) {
    let metadataHtml = '';
    if (metadata) {
        if (metadata.date) {
            metadataHtml += `<p>Creation Date: ${metadata.date}</p>`;
        }
        if (metadata.author) {
            metadataHtml += `<p>Author: ${metadata.author}</p>`;
        }
    }
    return metadataHtml;
}

function parseBookmarks(lines) {
    const stack = [];
    let root = { type: 'folder', title: 'Bookmarks', children: [] };
    let current = root;

    lines.forEach(line => {
        const trimmedLine = line.trim();

        // If the line ends with ":" it's a folder
        if (trimmedLine.endsWith(':')) {
            const folder = { type: 'folder', title: trimmedLine.slice(0, -1), children: [] };
            if (stack.length === 0) {
                root.children.push(folder);
            } else {
                stack[stack.length - 1].children.push(folder);
            }
            stack.push(folder);
            current = folder;
        } else if (trimmedLine) {
            // Otherwise, it's a simple link
            const link = { type: 'link', title: trimmedLine, url: trimmedLine };
            if (stack.length === 0) {
                root.children.push(link);
            } else {
                stack[stack.length - 1].children.push(link);
            }
        }
    });

    return root;
}

function getCustomStyles(style) {
    switch (style) {
        case 'default':
            return `
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                }
                h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                dl {
                    margin-left: 0;
                    padding-left: 0;
                }
                dt {
                    margin-bottom: 10px;
                }
            `;
        case 'minimal':
            return `
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #f8f9fa;
                    color: #333333;
                }
                h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #007bff;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `;
        case 'modern':
            return `
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #f8f9fa;
                    color: #333333;
                }
                h1 {
                    font-size: 28px;
                    margin-bottom: 20px;
                    color: #007bff;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `;
        case 'classic':
            return `
                body {
                    font-family: Georgia, 'Times New Roman', Times, serif;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #ffffff;
                    color: #333333;
                }
                h1 {
                    font-size: 32px;
                    margin-bottom: 20px;
                    color: #333333;
                }
                a {
                    color: #333333;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `;
        case 'dark':
            return `
                body {
                    font-family: 'Roboto, sans-serif';
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #333333;
                    color: #ffffff;
                }
                h1 {
                    font-size: 28px;
                    margin-bottom: 20px;
                    color: #ffffff;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `;
        case 'elegant':
            return `
                body {
                    font-family: 'Merriweather', serif;
                    line-height: 1.8;
                    padding: 20px;
                    background-color: #fdfdfd;
                    color: #333333;
                }
                h1 {
                    font-size: 36px;
                    margin-bottom: 20px;
                    color: #444444;
                }
                a {
                    color: #444444;
                    text-decoration: none;
                    border-bottom: 1px solid #444444;
                }
                a:hover {
                    color: #222222;
                    border-bottom: 1px solid #222222;
                }
            `;
        case 'neon':
            return `
                body {
                    font-family: 'Courier New', Courier, monospace;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #000000;
                    color: #39ff14;
                }
                h1 {
                    font-size: 32px;
                    margin-bottom: 20px;
                    color: #39ff14;
                }
                a {
                    color: #39ff14;
                    text-decoration: none;
                }
                a:hover {
                    color: #ffffff;
                }
            `;
        case 'pastel':
            return `
                body {
                    font-family: 'Comic Sans MS', cursive, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #fce4ec;
                    color: #880e4f;
                }
                h1 {
                    font-size: 32px;
                    margin-bottom: 20px;
                    color: #880e4f;
                }
                a {
                    color: #d81b60;
                    text-decoration: none;
                }
                a:hover {
                    color: #ad1457;
                }
            `;
        case 'retro':
            return `
                body {
                    font-family: 'Lucida Console', Monaco, monospace;
                    line-height: 1.6;
                    padding: 20px;
                    background-color: #fff8e1;
                    color: #5d4037;
                }
                h1 {
                    font-size: 32px;
                    margin-bottom: 20px;
                    color: #5d4037;
                }
                a {
                    color: #8d6e63;
                    text-decoration: none;
                }
                a:hover {
                    color: #3e2723;
                }
            `;
        default:
            return '';
    }
}

module.exports = createBookmarksHtml;
module.exports.getCustomStyles = getCustomStyles;
module.exports.generateMetadata = generateMetadata;
module.exports.parseBookmarks = parseBookmarks;
module.exports.generateBookmarkHtml = generateBookmarkHtml;