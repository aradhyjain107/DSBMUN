const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const acceptHeader = (req.headers['accept'] || '').toLowerCase();
  
  // Set Vary header for CDN caching & content negotiation per acceptmarkdown.com spec
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  
  // Check if agent requested markdown
  if (acceptHeader.includes('text/markdown') || acceptHeader.includes('text/x-markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    const llmsFull = fs.readFileSync(path.join(process.cwd(), 'llms-full.txt'), 'utf8');
    return res.status(200).send(llmsFull);
  }
  
  // Serve standard static HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const indexHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  return res.status(200).send(indexHtml);
};
