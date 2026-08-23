const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const content = fs.readFileSync(path.join(process.cwd(), 'llms-full.txt'), 'utf8');
    return res.status(200).send(content);
  } catch (e) {
    return res.status(200).send('# DSB MUN 5.0 Machine Spec\n\nVisit https://dsbmun.vercel.app/ for full details.');
  }
};
