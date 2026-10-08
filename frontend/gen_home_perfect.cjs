const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf8');

let homeStart = html.indexOf('<div class="banner-wrapper">');
let homeEnd = html.indexOf('<footer class="footer-wrapper">');
let bodyHtml = html.substring(homeStart, homeEnd);

// Remove PHP blocks because they show up as text on the screen
bodyHtml = bodyHtml.replace(/<\/?\/?\?php[\s\S]*?\?>/g, '');
bodyHtml = bodyHtml.replace(/<\/\/\?php echo \$row_getBanner\['banner_image'\]; \? \/>/g, '');
bodyHtml = bodyHtml.replace(/<\/\/\?php echo \$row_getBanner\['banner_content'\]; \?>/g, '');

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
    <div className="home-page-container" dangerouslySetInnerHTML={{ __html: \`${bodyHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}

export default Home;
`;

fs.writeFileSync('src/pages/Home.jsx', finalJsx);
console.log('Home.jsx built perfectly via dangerouslySetInnerHTML');
