const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        console.log("Decoded user:", decoded); // Debugging
        req.user = {
            userId: decoded.userId,
            username: decoded.username
        };
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;

