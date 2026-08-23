module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
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
};
