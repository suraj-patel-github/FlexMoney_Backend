const express = require("express");

require("dotenv").config();

require("./config/db");

const cors = require("cors");
const userRouter = require("./routes/user");
const renewalRouter = require("./routes/renewal");
const loginRouter = require("./routes/login");
const authenticate = require("./utils/authenticate");
const batchRouter = require("./routes/batches");

const app = express();

app.use(express.json());

app.use(cors("*"));

app.get("/home",(req,res)=>{
    res.send("Server is rocking");
})
app.get("/", (req, res) => {
   return res.send("hello world");
})

app.use("/user", userRouter);

app.use("/login", loginRouter);

app.use("/renewal", renewalRouter);

app.use("/batch", batchRouter);

app.listen(process.env.PORT ? process.env.PORT : 3001, '0.0.0.0', () => {
    console.log(`Server started on ${process.env.PORT ? process.env.PORT : 3001}`);
})
