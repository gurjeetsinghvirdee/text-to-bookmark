# Text to Bookmark HTML Converter

**text-to-bookmark** is a straightforward utility that converts plain text files containing URLs into bookmark HTML files. These HTML files are compatible with most web browsers, making it easy to import and manage bookmarks.

## Features

- **Easy Conversion**: Convert plain text files with URLs into properly formatted bookmark HTML files.
- **No Bullets**: The generated HTML file follows the standard bookmark format without any bullet points or list items.
- **Customization Options**: Customize the output HTML format by specifying options such as the title of the bookmark file, styling bookmarks, and adding metadata like creation date and author information.
- **Command-Line Interface**: Simple CLI for quick and easy use.
- **Automation-Friendly**: Integrate the tool into scripts or automated workflows for seamless bookmark management.

## Installation

To use this package, you need to have Node.js installed on your system. Then, you can install the package globally using npm:

```bash
npm install -g text-to-bookmark
```

## Usage

After installing the package, you can use the text-to-bookmark command in your terminal to convert a text file to HTML format. Here's the basic syntax:

```bash
text-to-bookmark <input-file> <output-file> [--title=<title>] [--style=<style>] [--author=<author>] [--date=<creationDate>]
```

- Replace `<input-file>` with the path to your text file containing URLs, and `<output-file>` with the desired filename for the HTML bookmark file.
- You can customize the output HTML file by specifying options such as title, style, author, and creation date.

## Examples

## Basic Conversion

Suppose you have a text file named links.text with the following content:

```html
https://example.com/page1
https://example.com/page2
https://example.com/page3
https://example.com/page4
https://example.com/page5
https://example.com/page6
https://example.com/page7
https://example.com/page8
https://example.com/page9

```

Convert a text file to HTML bookmarks without any customization:

```bash
text-to-bookmark links.txt bookmarks.html
```

![Basic Conversion](https://github.com/gurjeetsinghvirdee/text-to-bookmark/blob/master/assests/examples/Basic%20Conversion.png)

## Customizing Title and Styling

Customize the title and style of the HTML bookmarks:

```bash
text-to-bookmark links.txt bookmarks.html --title="My Bookmarks" --style="minimal"
```


![Title & Styling](https://github.com/gurjeetsinghvirdee/text-to-bookmark/blob/master/assests/examples/Title%20%26%20Styling.png)

## Adding Metadata

Add author and creation date metadata to the HTML bookmarks:

```bash
text-to-bookmark links.txt bookmarks.html --author="John Doe" --date="2024-05-31"
```

![Adding Metadata](https://github.com/gurjeetsinghvirdee/text-to-bookmark/blob/master/assests/examples/Adding%20Metadat.png)

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## Maintainer

This project is maintained by [Gurjeet Singh Virdee](mailto:gurjeetsinghvirdee@gmail.com). Feel free to reach out if you have any questions or feedback.

⭐ If you find this tool useful, don't forget to star the repository! ⭐
