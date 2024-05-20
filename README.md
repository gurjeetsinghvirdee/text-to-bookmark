# Text to Bookmark HTML Converter

**text-to-bookmark** is a straightforward utility that converts plain text files containing URLs into bookmark HTML files. These HTML files are compatible with most web browsers, making it easy to import and manage bookmarks.

## Features

- **Easy Conversion**: Convert plain text files with URLs into properly formatted bookmark HTML files.
- **No Bullets**: The generated HTML file follows the standard bookmark format without any bullet points or list items.
- **Command-Line Interface**: Simple CLI for quick and easy use.
- **Automation-Friendly**: Integrate the tool into scripts or automated workflows for seamless bookmark management.

## Installation

To use this package, you need to have Node.js installed on your system. Then, you can install the package globally using npm:

```bash
npm install -g txt-to-bookmark
```

## Usage

After installing the package, you can use the txt-to-bookmark command in your terminal to convert a text file to HTML format. Here's the basic syntax:

```bash
txt-to-bookmark <input-file> <output-file>
```

- Replace `<input-file>` with the path to your text file containing URLs, and `<output-file>` with the desired filename for the HTML bookmark file.

## Example

Suppose you have a text file named links.txt with the following content:

```html
https://example.com/page1
https://example.com/page2
https://example.com/page3
```

To convert this text file to HTML bookmarks, you can run the following command:

```bash
txt-to-bookmark links.txt bookmarks.html
```

This will generate an HTML file named bookmarks.html containing bookmarks for each URL.

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## Maintainer

This project is maintained by [Gurjeet Singh Virdee](mailto:gurjeetsinghvirdee@gmail.com). Feel free to reach out if you have any questions or feedback.
