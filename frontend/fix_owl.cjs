const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

c = c.replace(
    /if \(window\.\$\('\.owl-carousel'\)\.owlCarousel\) \{[\s\S]*?\} \}/,
    `try {
        if (window.$('.owl-carousel').owlCarousel) {
            window.$('.owl-carousel').owlCarousel({ margin: 10, nav: true, navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"], autoplay:true, autoplayTimeout:3000, loop: true, responsive: { 0: { items: 1 }, 1000: { items: 2 } } });
        }
    } catch (e) {
        console.error('Owl error', e);
    }`
);

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Fixed owl try-catch.');
