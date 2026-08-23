module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const manifest = {
    name: "dsb-mun-5-mcp",
    title: "DSB MUN 5.0 Model Context Protocol Server",
    description: "Exposes DSB MUN 5.0 conference data, committee agendas, schedule, and delegate rules as tools for AI agents.",
    version: "1.0.0",
    transport: {
      type: "http",
      endpoint: "https://dsbmun.vercel.app/api/mcp"
    },
    capabilities: {
      tools: true,
      resources: true
    },
    tools: [
      {
        name: "get_conference_info",
        description: "Returns core conference details about DSB MUN 5.0 (dates, location, theme, host school)"
      },
      {
        name: "list_committees",
        description: "Lists all 9 committees with agendas and eligibility"
      },
      {
        name: "get_schedule",
        description: "Returns hour-by-hour schedule for Day 1 and Day 2"
      },
      {
        name: "get_dress_code",
        description: "Returns dress code requirements (Day 1: Indian Traditional, Day 2: Western Formal)"
      },
      {
        name: "get_contact_info",
        description: "Returns contact info for Secretariat and leadership"
      }
    ]
  };

  if (req.method === 'GET') {
    return res.status(200).json(manifest);
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const method = body.method;
    const params = body.params || {};

    if (method === 'initialize') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id || 1,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: manifest.capabilities,
          serverInfo: {
            name: manifest.name,
            version: manifest.version
          }
        }
      });
    }

    if (method === 'tools/list') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id || 1,
        result: {
          tools: manifest.tools
        }
      });
    }

    if (method === 'tools/call') {
      const toolName = params.name;
      let resultData = {};

      if (toolName === 'get_conference_info') {
        resultData = {
          name: "DSB MUN 5.0",
          theme: "Evolution for Revolution",
          dates: "1–2 August 2026",
          location: "DSB International Public School, Gumaniwala, Rishikesh, Uttarakhand, India",
          committeesCount: 9,
          website: "https://dsbmun.vercel.app/"
        };
      } else if (toolName === 'list_committees') {
        resultData = [
          { name: "UNHRC", agenda: "Addressing Human Rights Violations and Civilian Protection in the Middle East Amid Escalating Regional Conflicts", eligibility: "Grades 6–12" },
          { name: "UNSC", agenda: "Addressing the Security Consequences of the Collapse of the Soviet Union, with Special Emphasis on Nuclear Proliferation and International Stability", eligibility: "Grades 8–12" },
          { name: "Lok Sabha", agenda: "Deliberation on Protecting India's Secular Framework Amidst Rising Communal Tensions and Political Polarisation", eligibility: "Grades 8–12" },
          { name: "AIPPM", agenda: "Deliberation on Tackling Corruption and Improving Government Transparency", eligibility: "Grades 8–12" },
          { name: "UNGA", agenda: "Weaponising Peace: Examining the Use of Security Narratives, Counterterrorism, and Arms Control as Instruments of Global Power", eligibility: "Grades 8–12" },
          { name: "UNCSW", agenda: "Negotiating Trans Inclusion, Biological Essentialism, and Gender Autonomy within Contemporary Feminist Movements", eligibility: "Grades 8–12" },
          { name: "IP", agenda: "Covering committee proceedings through journalism, photography, and political caricature", eligibility: "Grades 8–12" },
          { name: "IPL Auction", agenda: "Mega Auction and Deliberation on the Increasing Prominence of League Cricket", eligibility: "Open to all" },
          { name: "UNCLOS", agenda: "Addressing Maritime Disputes and Ensuring Sustainable Use of Ocean Resources", eligibility: "Open to all" }
        ];
      } else if (toolName === 'get_schedule') {
        resultData = {
          day1: "Day 1 (1 Aug): 8:30 AM Registration, 9:00 AM Opening Ceremony, 10:30 AM Session I, 2:30 PM Session II, 5:00 PM Socials",
          day2: "Day 2 (2 Aug): 8:30 AM Session III, 11:00 AM Session IV, 2:15 PM Session V, 4:00 PM Closing Ceremony & Awards"
        };
      } else if (toolName === 'get_dress_code') {
        resultData = {
          day1: "Indian Traditional / Ethnic Attire (Kurtas, Sarees, Anarkalis)",
          day2: "Western Formal Attire (Suits, Blazers, Formal Shirts, Trousers, Formal Dresses)",
          prohibited: "Casual wear (jeans, t-shirts, hoodies, sneakers, shorts) is strictly prohibited."
        };
      } else if (toolName === 'get_contact_info') {
        resultData = {
          email: "dsbmun@gmail.com",
          instagram: "@dsbmun",
          principal: "Mr. Shiv Sehgal",
          secretaryGeneral: "Ishika Dhamanda",
          directorGeneral: "Plaksha",
          webLead: "Aradhy Jain"
        };
      } else {
        return res.status(404).json({
          jsonrpc: "2.0",
          id: body.id || 1,
          error: { code: -32601, message: `Tool '${toolName}' not found` }
        });
      }

      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id || 1,
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify(resultData, null, 2)
            }
          ]
        }
      });
    }

    return res.status(200).json(manifest);
  }

  return res.status(405).json({ error: "Method not allowed" });
};
