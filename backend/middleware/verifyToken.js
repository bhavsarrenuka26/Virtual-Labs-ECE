const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // 1. Look for the token in the headers
    const authHeader = req.headers.authorization || req.headers.Authorization;

    // 2. If there is no token, or it doesn't start with Bearer , reject it
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Access Denied. No valid token provided." });
    }

    // 3. Extract the actual token (Chop off the Bearer  part)
    const token = authHeader.split(' ')[1];

    try {
        // 4. Verify the token using your secret key
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // 5. Attach the decoded user data (like user.id) to the request
        req.user = verified; 
        
      
        next(); 
    } catch (err) {
        console.error("Token verification failed:", err.message);
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = verifyToken;