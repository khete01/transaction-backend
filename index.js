const cors = require("cors");
const express = require("express");
const connectDb = require("./util/connectDb");
const userRouter = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoutes");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

connectDb();
app.use(userRouter);
app.use(transactionRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Your backend server is running on ${port}`);
});
