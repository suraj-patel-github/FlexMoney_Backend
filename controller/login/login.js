const pool = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async(req, res) =>{
    try{
        const {email, password} = req.body;
        const findUserQuery = `select * from users where email = $1`;
        const user = await pool.query(findUserQuery, [email]);
        if(user.rowCount == 0){
            return res.status(400).json({ message: "User of this mail does not exist" });
        }
        else{
            const encryptedPassword = user.rows[0].password;
            bcrypt.compare( password, encryptedPassword )
                .then((correct)=>{
                    if(correct){
                        const token = jwt.sign(user.rows[0].id, process.env.JWT_SECRET);
                        return res.status(200).json({message : `User Logged in successfully`, token: token});
                    } 
                    else{
                        return res.status(403).json({message :" Password does not match"});
                    }
                })
        }
    }
    catch(err){
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = login;

