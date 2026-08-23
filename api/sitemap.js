const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  
  try {
    const xml = fs.readFileSync(path.join(process.cwd(), 'sitemap.xml'), 'utf8');
    return res.status(200).send(xml);
  } catch (e) {
    const fallback = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://dsbmun.vercel.app/</loc></url></urlset>`;
    return res.status(200).send(fallback);
  }
};
