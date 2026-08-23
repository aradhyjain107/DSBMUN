module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-RateLimit-Limit', '100');
  res.setHeader('X-RateLimit-Remaining', '99');

  return res.status(200).json({
    name: "DSB MUN 5.0",
    theme: "Evolution for Revolution",
    dates: "1–2 August 2026",
    location: "DSB International Public School, Gumaniwala, Rishikesh, Uttarakhand 249204, India",
    committeesCount: 9,
    website: "https://dsbmun.vercel.app/"
  });
};
