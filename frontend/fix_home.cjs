const fs=require('fs'); 
let c=fs.readFileSync('src/pages/Home.jsx', 'utf8'); 
c=c.replace(/<img src="<[\s\S]*?\?>"\s*alt="IPS Banner"\s*\/>/g, ''); 
c=c.replace(/<img src="<\/\/\?php echo \$row_getBanner\['banner_image'\]; \? \/>" alt="IPS Banner" \/>/g, '');
c=c.replace(/<\/\/\?php echo \$row_getBanner\['banner_content'\]; \?>/g, '');
fs.writeFileSync('src/pages/Home.jsx', c);
