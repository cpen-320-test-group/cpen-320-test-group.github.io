// Example JavaScript file hosted on GitHub Pages
// This file can be included in other projects

console.log('example.js loaded from GitHub Pages');

// Example function
function greet(name) {
    return `Hello, ${name}!`;
}

// Example utility
const utils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
};

// Export to window object for global access
if (typeof window !== 'undefined') {
    window.greet = greet;
    window.utils = utils;
}
