const fs=require('fs'); 
let c=fs.readFileSync('src/pages/Home.jsx', 'utf8'); 
const startIndex = c.indexOf('<div className="banner-wrapper">');
if (startIndex !== -1) {
    const beforeStr = `import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
`;
    c = beforeStr + c.substring(startIndex);
}
c = c.replace(/<\/div>-->/g, '</div>');
fs.writeFileSync('src/pages/Home.jsx', c);
