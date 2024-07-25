const jsonwebtoken = require("jsonwebtoken");

// Middleware to verify authorization
const authorization = function (req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    try {
        let tokengen = jsonwebtoken.verify(token, process.env.SECRET);
        
        if (tokengen) {
            req.id = tokengen.id;
            req.user_name=tokengen.user_name
            next();
        } else {
            res.status(500).json({
                message: "Something went wrong"
            });
        }  
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
};

module.exports = authorization;