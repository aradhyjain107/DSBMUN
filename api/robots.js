const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  try {
    const txt = fs.readFileSync(path.join(process.cwd(), 'robots.txt'), 'utf8');
    return res.status(200).send(txt);
  } catch (e) {
    return res.status(200).send('User-agent: *\nAllow: /\nSitemap: https://dsbmun.vercel.app/sitemap.xml');
  }
};
