# CPEN 320 Test Group - GitHub Pages

This repository hosts JavaScript files for the CPEN 320 project using GitHub Pages.

## Hosted Files

- `example.js` - Example JavaScript file with utility functions

## Usage

To use these files in your project, include them via a script tag:

```html
<script src="https://cpen-320-test-group.github.io/example.js"></script>
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
