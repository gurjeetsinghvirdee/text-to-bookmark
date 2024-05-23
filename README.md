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

Usage
After installing the package, you can use the text-to-bookmark command in your terminal to convert a text file to HTML format. Here's the basic syntax:

```bash
text-to-bookmark <input-file> <output-file> [--title=<title>] [--style=<style>] [--author=<author>] [--date=<creationDate>]
```

Replace **`<input-file>`** with the path to your text file containing URLs, and **`<output-file>`** with the desired filename for the HTML bookmark file.

You can customize the output HTML file by specifying options such as title, style, author, and creation date.

## Examples

### Basic Conversion

Suppose you have a text file named links.txt with the following content:

```html
https://example.com/page1
https://example.com/page2
https://example.com/page3
https://example.com/page4
https://example.com/page5
https://example.com/page6
```

Convert a text file to HTML bookmarks without any customization:

```bash
text-to-bookmark links.txt bookmarks.html
```

## Customizing Title and Styling

Customize the title and style of the HTML bookmarks:

```bash
text-to-bookmark links.txt bookmarks.html --title="My Bookmarks" --style="minimal"
```

## Supported Styles

The following table lists the supported styles for customizing the appearance of the HTML bookmarks:

| Style   | Description                                           |
|---------|-------------------------------------------------------|
| default | Default style with standard font and colors           |
| minimal | Minimalistic style with clean layout                  |
| modern  | Modern style with sleek design                        |
| classic | Classic style reminiscent of traditional bookmarks    |
| dark    | Dark theme with high contrast                         |
| elegant | Elegant style with sophisticated typography           |
| neon    | Neon-inspired theme with vibrant colors               |
| pastel  | Soft pastel colors for a gentle look                  |
| retro   | Retro style with nostalgic vibes                      |

## Sample Nested Bookmarks

Here's a sample nested bookmarks structure:

```txt
My categories:
  Technology:
    - [TechCrunch](https://www.techcrunch.com)
    - [Wired](https://www.wired.com)
    Programming:
      - [Stack Overflow](https://stackoverflow.com)
      - [GitHub](https://github.com)
  News:
    - [BBC](https://www.bbc.com)
    - [CNN](https://www.cnn.com)
  Education:
    - [Khan Academy](https://www.khanacademy.org)
    - [Coursera](https://www.coursera.org)
  Entertainment:
    - [Netflix](https://www.netflix.com)
    - [Spotify](https://www.spotify.com)
```

These sample nested bookmarks demonstrate how you can organize your bookmarks into hierarchical categories and subcategories for better organization and navigation. When converted using the text-to-bookmark utility, they will generate nested folders in the HTML bookmark file.

## Adding Metadata

Add author and creation date metadata to the HTML bookmarks:

```bash
text-to-bookmark links.txt bookmarks.html --author="John Doe" --date="2024-05-31"
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

**Note:** While customization options like style, author, and date may not reflect in web browsers as they override the default styles, feel free to use them to create bookmarks that look good and function as intended. Future updates may address this limitation.
