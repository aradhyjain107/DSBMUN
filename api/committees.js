module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-RateLimit-Limit', '100');
  res.setHeader('X-RateLimit-Remaining', '99');

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
};
