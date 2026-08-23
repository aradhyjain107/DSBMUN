module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  return res.status(200).json({
    day1: "Indian Traditional / Ethnic Attire (Kurtas, Sarees, Anarkalis, Ethnic Suits with formal footwear).",
    day2: "Western Formal Attire (Suits, Blazers, Formal Shirts, Trousers, Formal Dresses with ties & dress shoes).",
    prohibited: "Casual wear (jeans, t-shirts, hoodies, sneakers, shorts) is strictly prohibited in committee rooms."
  });
};
