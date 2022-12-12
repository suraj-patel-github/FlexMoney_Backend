const {Pool} = require("pg");

console.log(process.env.PASSWORD);

const pool = new Pool({
    user : process.env.USER,
    host : process.env.HOST,
    database : process.env.DB,
    password : process.env.PASSWORD,
    port : process.env.DB_PORT,
    ssl: {rejectUnauthorized: false}
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
