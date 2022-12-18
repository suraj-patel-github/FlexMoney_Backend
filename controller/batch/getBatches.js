const pool = require("../../config/db");


const getBatches = async(req, res) => {
    try {
        const query = `select * from batches oreder by time`;

        const batches = await pool.query(query, []);

        return res.status(200).json({message: "Batches", batches: batches.rows});
    }
    catch(err) {
        return res.status(500).json({message : "Server Error"});
    }
}

module.exports = getBatches;
