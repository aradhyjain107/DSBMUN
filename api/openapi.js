const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  
  try {
    const spec = fs.readFileSync(path.join(process.cwd(), 'openapi.json'), 'utf8');
    return res.status(200).send(spec);
  } catch (e) {
    return res.status(500).json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Failed to load OpenAPI specification",
        statusCode: 500
      }
    });
  }
};
