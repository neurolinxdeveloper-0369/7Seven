const fs=require('fs'); 
let c=fs.readFileSync('src/pages/Home.jsx', 'utf8'); 
c = c.replace(/<div col-md-4="" text-center"="" className="col-md-12 text-right[\s\S]*?<\/div>/, '');
c = c.replace(/<div class=">/g, '<div className="col-md-4 text-center">');
fs.writeFileSync('src/pages/Home.jsx', c);
