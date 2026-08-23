const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const acceptHeader = (req.headers['accept'] || '').toLowerCase();
  const urlPath = req.url || '';

  res.setHeader('Vary', 'Accept, Accept-Encoding');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // If client requested JSON or is hitting an /api/ path
  if (acceptHeader.includes('application/json') || urlPath.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `The requested path '${urlPath}' does not exist on DSB MUN 5.0.`,
        resolutionHint: "Refer to /openapi.json, /docs, or /llms.txt for available API endpoints.",
        statusCode: 404
      }
    });
  }

  // If client requested Markdown
  if (acceptHeader.includes('text/markdown') || acceptHeader.includes('text/x-markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    const md404 = `# 404 Not Found — DSB MUN 5.0

The requested path \`${urlPath}\` does not exist on DSB MUN 5.0.

## Recovery Links & Sitemap for AI Agents
- **Home:** https://dsbmun.vercel.app/
- **OpenAPI Spec:** https://dsbmun.vercel.app/openapi.json
- **API Documentation:** https://dsbmun.vercel.app/docs
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

  // Default HTML 404
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let html404;
  try {
    html404 = fs.readFileSync(path.join(process.cwd(), '404.html'), 'utf8');
  } catch (e) {
    html404 = '<h1>404 Not Found</h1><p>Visit <a href="/">https://dsbmun.vercel.app/</a> or <a href="/llms.txt">llms.txt</a>.</p>';
  }
  return res.status(404).send(html404);
};
