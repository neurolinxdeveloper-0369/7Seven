const fs = require('fs');
const path = require('path');

const siteHtml = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf-8');

// Extract everything between <!-- banner-wrapper --> and <!----------footer Block-------------------->
const homeStart = siteHtml.indexOf('<div class="banner-wrapper">');
const homeEnd = siteHtml.indexOf('<footer class="footer-wrapper">');

let homeHtml = siteHtml.substring(homeStart, homeEnd);

// HTML to JSX conversions
homeHtml = homeHtml.replace(/class="/g, 'className="');
homeHtml = homeHtml.replace(/for="/g, 'htmlFor="');
homeHtml = homeHtml.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.substring(0, match.length - 1) + ' />';
});
homeHtml = homeHtml.replace(/<br>/g, '<br />');
homeHtml = homeHtml.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.substring(0, match.length - 1) + ' />';
});
homeHtml = homeHtml.replace(/<iframe(.*?)><\/iframe>/g, (match) => {
    return match.replace('allowfullscreen=""', 'allowFullScreen={true}');
});
homeHtml = homeHtml.replace(/style="([^"]*)"/g, (match, styleStr) => {
    // very basic style parsing
    const styles = styleStr.split(';').filter(s => s.trim().length > 0);
    const styleObj = {};
    styles.forEach(s => {
        const [key, val] = s.split(':');
        if (key && val) {
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            styleObj[camelKey] = val.trim();
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});
homeHtml = homeHtml.replace(/<!--(.*?)-->/gs, '');

const homeJsx = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    if (window.$) {
      setTimeout(() => {
        if (window.$('.banner-wrapper').flexslider) {
            window.$('.banner-wrapper').flexslider({ animation: "slide", slideshowSpeed: 4000, animationSpeed: 1500, smoothHeight: true });
        }
        if (window.$('.testimonial-slider').flexslider) {
            window.$('.testimonial-slider').flexslider({ animation: "slide", slideshowSpeed: 5500, animationSpeed: 1500 });
        }
        if (window.$('.services-carousel').slick) {
            window.$('.services-carousel').slick({ infinite: true, autoplay: true, autoplaySpeed: 5000, slidesToShow: 9, dots: false, arrows: true, slidesToScroll: 1, adaptiveHeight: true, responsive: [ { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } } ] });
        }
        if (window.$('.owl-carousel').owlCarousel) {
            window.$('.owl-carousel').owlCarousel({ margin: 10, nav: true, navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"], autoplay:true, autoplayTimeout:3000, loop: true, responsive: { 0: { items: 1 }, 500: { items: 1 }, 800: { items: 1 }, 1000: { items: 2 }, 1170: { items: 2 }, 1199: { items: 2 } } });
        }
      }, 500);
    }
  }, []);

  return (
    <div>
      ${homeHtml}
    </div>
  );
}

export default Home;`;

const pagesDir = path.join(__dirname, 'frontend', 'src', 'pages');
fs.mkdirSync(pagesDir, { recursive: true });
fs.writeFileSync(path.join(pagesDir, 'Home.jsx'), homeJsx);

const emptyPages = ['About', 'Rooms', 'Services', 'Gallery', 'Restaurant', 'Contact', 'BookRoom'];
emptyPages.forEach(page => {
    fs.writeFileSync(path.join(pagesDir, `${page}.jsx`), `import React from 'react';\n\nfunction ${page}() {\n  return ( <div className="container" style={{paddingTop: "150px", minHeight: "50vh"}}><h1>${page}</h1></div> );\n}\n\nexport default ${page};`);
});
console.log('Pages generated');
