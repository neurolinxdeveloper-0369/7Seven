const fs = require('fs');

const originalHtml = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf8');

// Extract everything from <head> to </head>
let headStart = originalHtml.indexOf('<head>');
let headEnd = originalHtml.indexOf('</head>') + 7;
let originalHead = originalHtml.substring(headStart, headEnd);

const newIndexHtml = `<!doctype html>
<html lang="en">
  ${originalHead}
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

fs.writeFileSync('index.html', newIndexHtml);
console.log('index.html updated with original head');
