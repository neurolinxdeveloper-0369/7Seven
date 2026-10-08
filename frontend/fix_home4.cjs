const fs = require('fs');

let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Fix the malformed HTML that is leaking text
c = c.replace(/<div class="col-md-12 text-right <!------<h3 class="promo-code">Use Code:NEW750<\/h3>----->/g, '<div class="col-md-12 text-right">');

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Fixed malformed HTML.');
