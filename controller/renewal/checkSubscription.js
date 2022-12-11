const pool = require("../../config/db");


const checkSubscription = async(req, res) => {
    try {
        const userId = req.user;

        const query = `select * from users where id = $1`;

        const user = await pool.query(query, [userId]);

        const currMonth = new Date().getMonth() + 1;

        if(currMonth == user.rows[0].last_month) {
            return res.status(200).json({message: "Subscribed"});
        }
        else {
            return res.status(400).json({message: "Not Subscribed"});
        }
    }
    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = checkSubscription;
