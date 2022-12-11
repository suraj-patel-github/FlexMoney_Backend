const bcrypt = require("bcrypt");
const pool = require("../../config/db");

const createrUser = async(req, res) => {
    try {
        const {email, name, password, age} = req.body;

        const findUserQuery = `select * from users where email=$1`;

        const user = await pool.query(findUserQuery, [email]);

        if(user.rowCount > 0) {
            return res.status(401).json({message: "User with this email already exists"});
        }
        else {

            if(age < 18) {
                return res.status(400).json({message: "User under age"});
            }
            if(age>65){

                return res.status(400).json({message: "User over age"})  
            }

            const encryptedPassword = await bcrypt.hash(password, 10);
            const createUserQuery = `insert into users (email, name, password, age, batch) values ($1, $2, $3, $4, $5)`;

            const createdUser = await pool.query(createUserQuery, [email, name, encryptedPassword, age, -1]);

            return res.status(200).json({message : "User Created"});  
        }

    }
    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = createrUser;
