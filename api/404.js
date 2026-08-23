const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const acceptHeader = (req.headers['accept'] || '').toLowerCase();
  
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  
  if (acceptHeader.includes('text/markdown') || acceptHeader.includes('text/x-markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    const md404 = `# 404 Not Found — DSB MUN 5.0

The requested path \`${req.url}\` does not exist on DSB MUN 5.0.

## Recovery Links & Sitemap for AI Agents
- **Home:** https://dsbmun.vercel.app/
- **Agent Instructions (llms.txt):** https://dsbmun.vercel.app/llms.txt
- **Full Machine Spec:** https://dsbmun.vercel.app/llms-full.txt
- **About Page:** https://dsbmun.vercel.app/about
- **Contact Page:** https://dsbmun.vercel.app/contact
- **Privacy Policy:** https://dsbmun.vercel.app/privacy
- **XML Sitemap:** https://dsbmun.vercel.app/sitemap.xml
- **MCP Server Manifest:** https://dsbmun.vercel.app/.well-known/mcp.json
`;
    return res.status(404).send(md404);
  }
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let html404;
  try {
    html404 = fs.readFileSync(path.join(process.cwd(), '404.html'), 'utf8');
  } catch (e) {
    html404 = '<h1>404 Not Found</h1><p>Visit <a href="/">https://dsbmun.vercel.app/</a> or <a href="/llms.txt">llms.txt</a>.</p>';
  }
  return res.status(404).send(html404);
};
