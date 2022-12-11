const express = require("express");
require("./config/db");

const userRouter = require("./routes/user");
const renewalRouter = require("./routes/renewal");
const loginRouter = require("./routes/login");
const authenticate = require("./utils/authenticate");

const app = express();

app.use(express.json());

app.get("/", authenticate, (req, res) => {
   return res.send("hello world");
})

app.use("/user", userRouter);

app.use("/login", loginRouter);

app.use("/renewal", renewalRouter);

app.listen(3000, () => {
    console.log(`Server started on 3000`);
})
