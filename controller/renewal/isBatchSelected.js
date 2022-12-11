const pool = require("../../config/db");


const isBatchSelected = async(req, res) => {
    try {
        const userId = req.user;

        const query = `select * from users where id = $1`;

        const user = await pool.query(query, [userId]);

        if(user.rows[0].batch == -1) {
            return res.status(200).json({message: "You can select batch"});
        }
        else {
            return res.status(400).json({message: "You cannot select batch"});
        }
    }
    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = isBatchSelected;
