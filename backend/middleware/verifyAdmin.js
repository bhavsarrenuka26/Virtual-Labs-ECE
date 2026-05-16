const User = require('../models/User');

const verifyAdmin = async (req, res, next) => {
    try {
        // Find the user making the request
        const user = await User.findById(req.user.id);
        
        // If don't exist, or just a regular student
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: "Access Denied. Admins only." });
        }
        
        // If  admin
        next(); 
    } catch (error) {
        console.error("Admin Verification Error:", error);
        res.status(500).json({ message: "Server error verifying admin status" });
    }
};

module.exports = verifyAdmin;