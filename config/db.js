const {Pool} = require("pg");

const pool = new Pool({
    user : process.env.USER,
    host : process.env.HOST,
    database : process.env.DB,
    password : process.env.PASSWORD,
    port : process.env.PORT,
    ssl: true
})

pool.connect((err) => {
    if(err) {
        console.log("Error occured", err);
    }
    else {
        console.log("Connected to Database");
    }
})

module.exports = pool;
