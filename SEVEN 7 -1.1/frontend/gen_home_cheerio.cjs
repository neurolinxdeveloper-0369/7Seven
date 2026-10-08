const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf8');

// The original HTML has an unmatched `<!------<h3 ...` around line 895.
// Let's fix that string before passing to cheerio
let fixedHtml = html.replace(/<!------<h3 class="promo-code">Use Code:NEW750<\/h3>----->/g, '');

const $ = cheerio.load(fixedHtml);

// Remove the modal and navbars from the body (they go to Header)
$('#myModal').remove();
$('nav').remove();
$('.formpopup').remove(); // remove success popup
$('footer').remove();
$('.copy-right').remove();
$('#backtotop').remove();
$('script').remove();

// Remove all PHP
let bodyHtml = $('body').html();
bodyHtml = bodyHtml.replace(/<\/?\/?\?php[\s\S]*?\?>/g, '');
bodyHtml = bodyHtml.replace(/<\/\/\?php echo \$row_getBanner\['banner_image'\]; \? \/>/g, '');
bodyHtml = bodyHtml.replace(/<\/\/\?php echo \$row_getBanner\['banner_content'\]; \?>/g, '');

// Load back into cheerio to fix attributes for React
const $body = cheerio.load(bodyHtml, null, false);

// React specific attribute replacements
const attrMap = {
    'class': 'className',
    'for': 'htmlFor',
    'allowfullscreen': 'allowFullScreen',
    'frameborder': 'frameBorder',
    'enctype': 'encType',
    'accept-charset': 'acceptCharset',
    'onsubmit': 'onSubmit',
    'tabindex': 'tabIndex'
};

$body('*').each((i, el) => {
    if (el.attribs) {
        for (const [key, val] of Object.entries(el.attribs)) {
            if (attrMap[key.toLowerCase()]) {
                const newKey = attrMap[key.toLowerCase()];
                $body(el).attr(newKey, val);
                $body(el).removeAttr(key);
            }
            if (key === 'style') {
                $body(el).removeAttr('style'); // just remove inline styles to avoid react object syntax issues, the css files should handle it
            }
        }
    }
});

// Remove leftover PHP tags from Cheerio output if any
let jsx = $body.html();

jsx = jsx.replace(/<img([^>]*)>/g, (m, attrs) => {
    if(m.endsWith('/>')) return m;
    return `<img${attrs} />`;
});
jsx = jsx.replace(/<input([^>]*)>/g, (m, attrs) => {
    if(m.endsWith('/>')) return m;
    return `<input${attrs} />`;
});
jsx = jsx.replace(/<br>/g, '<br />');
jsx = jsx.replace(/<hr>/g, '<hr />');

// Remove any remaining `onSubmit` that calls strings, we handle it in React
jsx = jsx.replace(/onSubmit="[^"]*"/g, '');

const finalJsx = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    if (window.$) {
      setTimeout(() => {
        if (window.$('.banner-wrapper').flexslider) {
          window.$('.banner-wrapper').flexslider({
            animation: "slide",
            slideshowSpeed: 4000,    
            animationSpeed: 1500,
            smoothHeight: true
          });
        }
        if (window.$('.testimonial-slider').flexslider) {
          window.$('.testimonial-slider').flexslider({
            animation: "slide",
            slideshowSpeed: 5500,    
            animationSpeed: 1500
          });
        }
        if (window.$('.services-carousel').slick) {
          window.$('.services-carousel').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 9,
            dots: false,
            arrows: true,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [ 
              { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } } 
            ]
          }); 
        }
        if (window.$('.owl-carousel').owlCarousel) {
          window.$('.owl-carousel').owlCarousel({
            margin: 10,
            nav: true,
            navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"],
            autoplay:true,
            autoplayTimeout:3000,
            loop: true,
            responsive: { 0: { items: 1 }, 1000: { items: 2 } }
          });
        }
      }, 500); // delay to allow images to load
    }
  }, []);

  return (
    <div className="home-page-container">
      ${jsx}
    </div>
  );
}

export default Home;
`;

fs.writeFileSync('src/pages/Home.jsx', finalJsx);
console.log('Home.jsx built');
