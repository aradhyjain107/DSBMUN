const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const reqUrl = String(req.url || '').toLowerCase();
  const parsedFromReq = new URL(reqUrl, 'https://dsbmun.vercel.app');
  const routeParam = ((req.query && req.query.route) ? String(req.query.route) : (parsedFromReq.searchParams.get('route') || '')).toLowerCase();
  const acceptHeader = String(req.headers['accept'] || '').toLowerCase();
  const xForwardedUri = String(req.headers['x-forwarded-uri'] || '').toLowerCase();
  const rawPath = parsedFromReq.pathname.toLowerCase();
  const combined = `${reqUrl} ${rawPath} ${xForwardedUri} ${routeParam}`;

  // Standard CORS, RateLimit, Versioning, Sunset, and Deprecation headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, API-Version');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Vary', 'Accept, Accept-Encoding');
  res.setHeader('API-Version', 'v1');
  res.setHeader('Deprecation', 'false');
  res.setHeader('Sunset', 'Wed, 01 Aug 2029 00:00:00 GMT');
  res.setHeader('Link', '<https://dsbmun.vercel.app/docs#deprecation>; rel="deprecation"');
  res.setHeader('RateLimit-Limit', '100');
  res.setHeader('RateLimit-Remaining', '99');
  res.setHeader('RateLimit-Reset', '60');
  res.setHeader('X-RateLimit-Limit', '100');
  res.setHeader('X-RateLimit-Remaining', '99');
  res.setHeader('X-RateLimit-Reset', '60');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. MCP Server Manifest & Complete JSON-RPC 2.0 Live Protocol Handshake
  if (routeParam === 'mcp' || combined.includes('mcp')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const manifest = {
      name: "dsb-mun-5-mcp",
      title: "DSB MUN 5.0 Model Context Protocol Server",
      description: "Exposes DSB MUN 5.0 conference data, committee agendas, schedule, and delegate rules as tools for AI agents.",
      version: "1.0.0",
      protocolVersion: "2024-11-05",
      transport: { type: "http", endpoint: "https://dsbmun.vercel.app/api/mcp" },
      capabilities: { tools: {}, resources: {}, prompts: {} },
      tools: [
        { name: "get_conference_info", description: "Returns basic details about DSB MUN 5.0", inputSchema: { type: "object", properties: {}, required: [] } },
        { name: "list_committees", description: "Lists all 9 committees with agendas and eligibility", inputSchema: { type: "object", properties: {}, required: [] } },
        { name: "get_schedule", description: "Returns hour-by-hour schedule for Day 1 and Day 2", inputSchema: { type: "object", properties: {}, required: [] } },
        { name: "get_dress_code", description: "Returns delegate dress code protocol", inputSchema: { type: "object", properties: {}, required: [] } },
        { name: "get_contact_info", description: "Returns Secretariat and leadership contacts", inputSchema: { type: "object", properties: {}, required: [] } }
      ]
    };

    if (req.method === 'GET') {
      return res.status(200).json(manifest);
    }

    if (req.method === 'POST') {
      let body = req.body || {};
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (e) { body = {}; }
      }
      const method = body.method;
      const params = body.params || {};
      const msgId = body.id !== undefined ? body.id : 1;

      if (method === 'initialize') {
        return res.status(200).json({
          jsonrpc: "2.0",
          id: msgId,
          result: { protocolVersion: "2024-11-05", capabilities: manifest.capabilities, serverInfo: { name: manifest.name, version: manifest.version } }
        });
      }

      if (method === 'ping') {
        return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: {} });
      }

      if (method === 'tools/list') {
        return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: { tools: manifest.tools } });
      }

      if (method === 'resources/list') {
        return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: { resources: [] } });
      }

      if (method === 'prompts/list') {
        return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: { prompts: [] } });
      }

      if (method === 'tools/call') {
        const toolName = params.name;
        let data = null;
        if (toolName === 'get_conference_info') data = { name: "DSB MUN 5.0", theme: "Evolution for Revolution", dates: "1–2 August 2026", location: "Rishikesh, India" };
        else if (toolName === 'list_committees') data = ["UNHRC", "UNSC", "Lok Sabha", "AIPPM", "UNGA", "UNCSW", "IP", "IPL Auction", "UNCLOS"];
        else if (toolName === 'get_schedule') data = { day1: "1 Aug: Sessions I & II", day2: "2 Aug: Sessions III, IV, V & Closing" };
        else if (toolName === 'get_dress_code') data = { day1: "Indian Traditional", day2: "Western Formal" };
        else if (toolName === 'get_contact_info') data = { email: "dsbmun@gmail.com", instagram: "@dsbmun" };

        if (data) {
          return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] } });
        }
        return res.status(200).json({ jsonrpc: "2.0", id: msgId, error: { code: -32601, message: `Tool '${toolName}' not found` } });
      }

      return res.status(200).json({ jsonrpc: "2.0", id: msgId, result: manifest });
    }
  }

  // 2. REST API Endpoints (Support /v1/ and /api/)
  if (routeParam === 'info' || combined.includes('info')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json({
      apiVersion: "v1",
      name: "DSB MUN 5.0",
      theme: "Evolution for Revolution",
      dates: "1–2 August 2026",
      location: "DSB International Public School, Gumaniwala, Rishikesh, Uttarakhand 249204, India",
      committeesCount: 9,
      website: "https://dsbmun.vercel.app/",
      documentation: "https://dsbmun.vercel.app/docs",
      openApiSpec: "https://dsbmun.vercel.app/openapi.json"
    });
  }

  if (routeParam === 'committees' || combined.includes('committees')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json([
      { name: "UNHRC", agenda: "Addressing Human Rights Violations and Civilian Protection in the Middle East Amid Escalating Regional Conflicts", eligibility: "Grades 6–12" },
      { name: "UNSC", agenda: "Addressing the Security Consequences of the Collapse of the Soviet Union, with Special Emphasis on Nuclear Proliferation and International Stability", eligibility: "Grades 8–12" },
      { name: "Lok Sabha", agenda: "Deliberation on Protecting India's Secular Framework Amidst Rising Communal Tensions and Political Polarisation", eligibility: "Grades 8–12" },
      { name: "AIPPM", agenda: "Deliberation on Tackling Corruption and Improving Government Transparency", eligibility: "Grades 8–12" },
      { name: "UNGA", agenda: "Weaponising Peace: Examining the Use of Security Narratives, Counterterrorism, and Arms Control as Instruments of Global Power", eligibility: "Grades 8–12" },
      { name: "UNCSW", agenda: "Negotiating Trans Inclusion, Biological Essentialism, and Gender Autonomy within Contemporary Feminist Movements", eligibility: "Grades 8–12" },
      { name: "IP", agenda: "Covering committee proceedings through journalism, photography, and political caricature", eligibility: "Grades 8–12" },
      { name: "IPL Auction", agenda: "Mega Auction and Deliberation on the Increasing Prominence of League Cricket", eligibility: "Open to all" },
      { name: "UNCLOS", agenda: "Addressing Maritime Disputes and Ensuring Sustainable Use of Ocean Resources", eligibility: "Open to all" }
    ]);
  }

  if (routeParam === 'schedule' || combined.includes('schedule')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json({
      day1: "Day 1 (1 Aug): 8:30 AM Registration & Kit Distribution, 9:00 AM Opening Ceremony, 10:30 AM Session I, 1:15 PM Lunch, 2:30 PM Session II, 5:00 PM Socials & Day 1 Departure",
      day2: "Day 2 (2 Aug): 8:30 AM Session III, 11:00 AM Session IV, 1:00 PM Lunch, 2:15 PM Session V, 4:00 PM Closing Ceremony & Awards Distribution"
    });
  }

  if (routeParam === 'dress-code' || combined.includes('dress-code')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json({
      day1: "Indian Traditional / Ethnic Attire (Kurtas, Sarees, Anarkalis, Ethnic Suits with formal footwear).",
      day2: "Western Formal Attire (Suits, Blazers, Formal Shirts, Trousers, Formal Dresses with ties & dress shoes).",
      prohibited: "Casual wear (jeans, t-shirts, hoodies, sneakers, shorts) is strictly prohibited in committee rooms."
    });
  }

  if (routeParam === 'contacts' || combined.includes('contacts')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json({
      email: "dsbmun@gmail.com",
      instagram: "@dsbmun",
      principal: "Mr. Shiv Sehgal",
      secretaryGeneral: "Ishika Dhamanda",
      directorGeneral: "Plaksha",
      webLead: "Aradhy Jain",
      venue: "DSB International Public School, Gumaniwala, Rishikesh, Uttarakhand 249204, India"
    });
  }

  // 3. OpenAPI Specification
  if (routeParam === 'openapi' || combined.includes('openapi')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    try {
      const spec = fs.readFileSync(path.join(process.cwd(), 'openapi.json'), 'utf8');
      return res.status(200).send(spec);
    } catch (e) {
      return res.status(500).json({ error: { code: "INTERNAL_ERROR", message: "Failed to load openapi.json", statusCode: 500 } });
    }
  }

  // 4. Machine Readable Specs & Sitemaps
  if (routeParam === 'llms-full' || combined.includes('llms-full')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    const content = fs.readFileSync(path.join(process.cwd(), 'llms-full.txt'), 'utf8');
    return res.status(200).send(content);
  }

  if (routeParam === 'llms' || combined.includes('llms')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    const content = fs.readFileSync(path.join(process.cwd(), 'llms.txt'), 'utf8');
    return res.status(200).send(content);
  }

  if (routeParam === 'sitemap' || combined.includes('sitemap')) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    const content = fs.readFileSync(path.join(process.cwd(), 'sitemap.xml'), 'utf8');
    return res.status(200).send(content);
  }

  if (routeParam === 'robots' || combined.includes('robots')) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const content = fs.readFileSync(path.join(process.cwd(), 'robots.txt'), 'utf8');
    return res.status(200).send(content);
  }

  // 5. Content Negotiation for Root / and Home
  if (routeParam === 'home' || routeParam === 'markdown' || rawPath === '/' || rawPath === '' || rawPath === '/home.html') {
    if (acceptHeader.includes('text/markdown') || routeParam === 'markdown') {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      const md = fs.readFileSync(path.join(process.cwd(), 'llms.txt'), 'utf8');
      return res.status(200).send(md);
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const html = fs.readFileSync(path.join(process.cwd(), 'home.html'), 'utf8');
    return res.status(200).send(html);
  }

  // 6. Dynamic Error Responses (Structured JSON for APIs / Agents; HTML for Browsers)
  const isApiRequest = rawPath.startsWith('/api/') || rawPath.startsWith('/v1/') || acceptHeader.includes('application/json') || acceptHeader.includes('application/problem+json');
  
  if (isApiRequest) {
    res.setHeader('Content-Type', 'application/problem+json; charset=utf-8');
    return res.status(404).json({
      type: "https://dsbmun.vercel.app/docs#errors",
      title: "Resource Not Found",
      status: 404,
      detail: `The requested endpoint '${rawPath}' does not exist on https://dsbmun.vercel.app.`,
      code: "NOT_FOUND",
      message: "The requested API endpoint was not found.",
      resolutionHint: "Check https://dsbmun.vercel.app/v1/openapi.json or https://dsbmun.vercel.app/docs for available endpoints."
    });
  }

  if (acceptHeader.includes('text/markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    return res.status(404).send('# 404 Not Found\n\nThe requested resource does not exist on https://dsbmun.vercel.app/.\n\n## Available Sitemap Links\n- [Homepage](https://dsbmun.vercel.app/)\n- [API Docs](https://dsbmun.vercel.app/docs)\n- [OpenAPI Spec](https://dsbmun.vercel.app/openapi.json)\n- [Agent Instructions](https://dsbmun.vercel.app/llms.txt)\n- [XML Sitemap](https://dsbmun.vercel.app/sitemap.xml)\n');
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  try {
    const notFoundHtml = fs.readFileSync(path.join(process.cwd(), '404.html'), 'utf8');
    return res.status(404).send(notFoundHtml);
  } catch (e) {
    return res.status(404).send('# 404 Not Found\n\nVisit https://dsbmun.vercel.app/docs or https://dsbmun.vercel.app/llms.txt for sitemap.');
  }
};
