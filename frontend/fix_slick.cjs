const fs = require('fs');

let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

c = c.replace(
    /if \(window\.\$\('\.services-carousel'\)\.slick\) \{[\s\S]*?\} \}/,
    `try {
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
    } catch (e) {
        console.error('Slick error', e);
    }`
);

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Fixed slick try-catch.');
