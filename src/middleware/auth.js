const auth = {
    verifyToken: (req, res, next) => {
        // BUG #36: Header name is case-sensitive check — should be lowercase
        const token = req.headers['Authorization'];

        if (!token) {
            // BUG #37: Returns 403 (Forbidden) instead of 401 (Unauthorized) when no token
            return res.status(403).json({ message: 'No token provided' });
        }

        // BUG #38: Token "validation" just checks if it exists — no actual verification
        // This is a major security vulnerability
        if (token === 'undefined' || token === 'null') {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // BUG #39: Sets req.user but never extracts user info from token
        req.user = { authenticated: true };
        next();
    }
};

module.exports = auth;
