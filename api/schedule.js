module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-RateLimit-Limit', '100');
  res.setHeader('X-RateLimit-Remaining', '99');

  return res.status(200).json({
    day1: "Day 1 (1 Aug): 8:30 AM Registration & Kit Distribution, 9:00 AM Opening Ceremony, 10:30 AM Session I, 1:15 PM Lunch, 2:30 PM Session II, 5:00 PM Socials & Day 1 Departure",
    day2: "Day 2 (2 Aug): 8:30 AM Session III, 11:00 AM Session IV, 1:00 PM Lunch, 2:15 PM Session V, 4:00 PM Closing Ceremony & Awards Distribution"
  });
};
