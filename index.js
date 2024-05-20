const fs = require('fs');
const { format } = require('date-fns');

function createBookmarksHtml(inputFile, outputFile, options) {
    const links = fs.readFileSync(inputFile, 'utf8').split('\n');

    let htmlContent = `<!DOCTYPE html>
    <html>
    <head>
        <title>${options.title || "Bookmarks"}</title>
        <style>
            /* Custom Styles */
            ${getCustomStyles(options.style || "default")}
        </style>
    </head>
    <body>
        <h1>${options.title || "Bookmarks"}</h1>
        <!-- Add metadata if provided -->
        ${generateMetadata(options.metadata)}
        <DL><p>
    `;

    links.forEach(link => {
        if (link.trim() !== '') {
            htmlContent += `<DT><A HREF="${link.trim()}">${link.trim()}</A>\n`;
        }
    });

    htmlContent += `</DL><p>`;

    fs.writeFileSync(outputFile, htmlContent, 'utf8');
}

// Function to generate custom styles 

function getCustomStyles(style) {
    switch (style) {
        case 'default':
            return `
                /* Default Styles */
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
                /* Minimal Styles */
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
                /* Modern Styles */
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
                /* Classic Styles */
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
                /* Dark Styles */
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
        default:
            return '';
    }
}

// Function to generate metadata HTML based on metadata option

function generateMetadata(metadata) {
    if (!metadata) return '';
    let metaContent = '<div class="metadata">\n';
    if (metadata.author) metaContent += `<p><strong>Author:</strong> ${metadata.author}</p>\n`;
    if (metadata.date) metaContent += `<p><strong>Creation Date:</strong> ${metadata.date}</p>\n`;
    metaContent += '</div>\n';
    
    return metaContent;
}

module.exports = createBookmarksHtml;