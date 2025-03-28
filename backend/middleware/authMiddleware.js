const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

const verifyAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(401).json({message: "Unauthorized token provided"});
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next();

    } catch (error){
        res.status(403).json({message: "Forbidden: Invalid token"})
    }
};

module.exports = verifyAuth;
