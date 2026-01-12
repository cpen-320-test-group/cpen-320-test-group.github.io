# CPEN 320 Test Group - GitHub Pages

This repository hosts JavaScript files for the CPEN 320 project using GitHub Pages.

## Hosted Files

### Obfuscated Test Files
- `obfuscated/test-a1.js` - Assignment 1 test file
- `obfuscated/test-a2.js` - Assignment 2 test file
- `obfuscated/test-a3.js` - Assignment 3 test file
- `obfuscated/test-a3-server.js` - Assignment 3 server test file
- `obfuscated/test-a4.js` - Assignment 4 test file
- `obfuscated/test-a4-server.js` - Assignment 4 server test file
- `obfuscated/test-a5.js` - Assignment 5 test file
- `obfuscated/test-a5-server.js` - Assignment 5 server test file

## Usage

To use these files in your project, include them via a script tag:

```html
<script src="https://cpen-320-test-group.github.io/obfuscated/test-a1.js"></script>
```

## Adding New JS Files

1. Add your `.js` file to the root directory
2. Commit and push to the `main` branch
3. The file will be available at: `https://cpen-320-test-group.github.io/your-file.js`
4. Update `index.html` to list the new file

## GitHub Pages Setup

This site is automatically deployed from the `main` branch. Any changes pushed to `main` will be reflected on the live site within a few minutes.

## Local Development

To test locally:
```bash
# Serve the files with a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```
