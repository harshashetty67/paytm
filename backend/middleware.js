const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ msg: 'Forbidden' });
  }

  // extract token
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // Propogating the userId for other parts of code
    next(); // pass the control to next block
  }
  catch (err) {
    return res.status(403).json({ msg: 'Forbidden' });
  }

};

module.exports = { authMiddleware };