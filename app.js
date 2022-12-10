const express = require("express");
require("./config/db");

const userRouter = require("./routes/user");

const loginRouter = require("./routes/login");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   return res.send("hello world");
})

app.use("/user", userRouter);

app.use("/login", loginRouter);

app.listen(3000, () => {
    console.log(`Server started on 3000`);
})
