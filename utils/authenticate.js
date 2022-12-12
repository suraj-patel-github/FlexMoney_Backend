const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token) {
            return res.status(400).json({message: "Token missing"});
        }
        else {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
                if(err) {
                    return res.status(401).json({message: "Error with Token"});
                }
                else {
                    const query = `select * from users where id = $1`;

                    const user = await pool.query(query, [decode]);

                    if(user.rowCount == 0) {
                        return res.status(403).json({message: "Invalid Token"});
                    }
                    else {
                        req.user = decode;
                        next();
                    }
                }
            })
        }
    }
    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = authenticate;
