const pool = require("../../config/db");

const getUser = async(req, res) => {
    try {
        const userId = req.user;

        const query = `select * from users where id = $1`;

        const user = await pool.query(query, [userId]);

        return res.status(200).json({message: "User found", user: user});
    }
    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = getUser;
