const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // console.log("hello express");
  // res.send("<h1>こんにちは</h1>");
  // res.sendStatus(500);
  // res.status(500).send("エラーです。");
  res.render("index", {text: "nodejsとExpress"})
});

// ルーティング
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);

// ミドルウェア


app.listen(PORT, () => console.log("サーバーが起動しました。"));
