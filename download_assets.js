const fs = require('fs');
const path = require('path');
const https = require('https');

const siteHtml = fs.readFileSync('C:\\Users\\venka\\.gemini\\antigravity\\brain\\90c039f6-80e1-4d61-ad99-4093c7cf373d\\site.html', 'utf-8');
const baseUrl = 'https://www.7seven.in';
const publicDir = path.join(__dirname, 'frontend', 'public');

// Create directories
['css', 'js', 'images'].forEach(dir => fs.mkdirSync(path.join(publicDir, dir), { recursive: true }));

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) return resolve();
        console.log(`Downloading ${url} to ${dest}`);
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
            } else {
                file.close(); fs.unlinkSync(dest);
                console.log(`Failed to download ${url}: ${response.statusCode}`);
                resolve();
            }
        }).on('error', err => {
            fs.unlinkSync(dest);
            console.log(`Error downloading ${url}: ${err.message}`);
            resolve();
        });
    });
};

const extractAndDownload = async () => {
    const cssRegex = /href="(\/css\/[^"]+)"/g;
    const jsRegex = /src="(\/js\/[^"]+)"/g;
    const imgRegex = /src="(\/?images\/[^"]+)"/g;
    
    const downloads = [];
    
    let match;
    while ((match = cssRegex.exec(siteHtml)) !== null) {
        downloads.push({ url: baseUrl + match[1], dest: path.join(publicDir, match[1]) });
    }
    while ((match = jsRegex.exec(siteHtml)) !== null) {
        downloads.push({ url: baseUrl + match[1], dest: path.join(publicDir, match[1]) });
    }
    while ((match = imgRegex.exec(siteHtml)) !== null) {
        let imgPath = match[1].startsWith('/') ? match[1] : '/' + match[1];
        downloads.push({ url: baseUrl + imgPath, dest: path.join(publicDir, imgPath) });
    }
    
    // Unique downloads
    const uniqueDownloads = Array.from(new Set(downloads.map(d => JSON.stringify(d)))).map(d => JSON.parse(d));
    
    console.log(`Found ${uniqueDownloads.length} files to download.`);
    for (const file of uniqueDownloads) {
        await downloadFile(file.url, file.dest);
    }
    console.log('Download complete.');
};

extractAndDownload();
