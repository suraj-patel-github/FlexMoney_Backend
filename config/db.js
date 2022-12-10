const {Pool} = require("pg");

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "flexmoney",
    password : "hello",
    port : 5432
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
