const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf8');

// Find the correct banner-wrapper that is NOT commented out
let footerStart = html.indexOf('<footer class="footer-wrapper">');

let homeStart = html.indexOf('<div class="banner-wrapper">\r\n<ul class="slides">\r\n<li>');
if (homeStart === -1) {
    homeStart = html.indexOf('<div class="banner-wrapper">\n<ul class="slides">\n<li>');
}
if (homeStart === -1) {
    homeStart = html.lastIndexOf('<div class="banner-wrapper">');
}
let homeEnd = footerStart;
let homeHtml = html.substring(homeStart, homeEnd);

// Fix the malformed HTML directly before passing to React
homeHtml = homeHtml.replace(/<div class="col-md-12 text-right <!------<h3 class="promo-code">Use Code:NEW750<\/h3>----->/g, '<div class="col-md-12 text-right">');

const homeComponent = `import React, { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (window.$) {
      setTimeout(() => {
        try { if (window.$('.banner-wrapper').flexslider) { window.$('.banner-wrapper').flexslider({ animation: "slide", slideshowSpeed: 4000, animationSpeed: 1500, smoothHeight: true }); } } catch (e) {}
        try { if (window.$('.testimonial-slider').flexslider) { window.$('.testimonial-slider').flexslider({ animation: "slide", slideshowSpeed: 5500, animationSpeed: 1500 }); } } catch (e) {}
        try { if (window.$('.services-carousel').slick) { window.$('.services-carousel').slick({ infinite: true, autoplay: true, autoplaySpeed: 5000, slidesToShow: 9, dots: false, arrows: true, slidesToScroll: 1, adaptiveHeight: true, responsive: [ { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } } ] }); } } catch (e) {}
        try { if (window.$('.owl-carousel').owlCarousel) { window.$('.owl-carousel').owlCarousel({ margin: 10, nav: true, navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"], autoplay:true, autoplayTimeout:3000, loop: true, responsive: { 0: { items: 1 }, 1000: { items: 2 } } }); } } catch (e) {}
      }, 500);
    }
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: \`${homeHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />;
}
`;
fs.writeFileSync('src/pages/Home.jsx', homeComponent);
console.log('Home.jsx regenerated cleanly.');
