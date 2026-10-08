const fs = require('fs');
let siteHtml = fs.readFileSync('C:/Users/venka/.gemini/antigravity/brain/90c039f6-80e1-4d61-ad99-4093c7cf373d/site.html', 'utf-8');

let homeStart = siteHtml.indexOf('<div class="banner-wrapper">');
let homeEnd = siteHtml.indexOf('<footer class="footer-wrapper">');
let homeHtml = siteHtml.substring(homeStart, homeEnd);

homeHtml = homeHtml.replace(/<\/?\/?php[\s\S]*?\?>/g, ''); // Fix PHP tags
homeHtml = homeHtml.replace(/<!--[\s\S]*?-->/g, ''); // Fix HTML comments
homeHtml = homeHtml.replace(/class="/g, 'className="');
homeHtml = homeHtml.replace(/for="/g, 'htmlFor="');

homeHtml = homeHtml.replace(/<img([^>]*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1} />`;
});

homeHtml = homeHtml.replace(/<input([^>]*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1} />`;
});

homeHtml = homeHtml.replace(/<br>/g, '<br />');
homeHtml = homeHtml.replace(/<hr>/g, '<hr />');

homeHtml = homeHtml.replace(/<iframe(.*?)><\/iframe>/g, (match, p1) => {
    return `<iframe${p1.replace('allowfullscreen=""', 'allowFullScreen={true}')}></iframe>`;
});

homeHtml = homeHtml.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const obj = {};
    styleStr.split(';').filter(x => x.trim().length > 0).forEach(x => {
        const [k, v] = x.split(':');
        if (k && v) {
            const ck = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            obj[ck] = v.trim();
        }
    });
    return `style={${JSON.stringify(obj)}}`;
});

const jsCode = `import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      ${homeHtml}
    </div>
  );
}

export default Home;`;

fs.writeFileSync('src/pages/Home.jsx', jsCode);
console.log("Home.jsx generated successfully");
