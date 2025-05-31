import express from "express";
// todo: 导入其他必要的模块，如路由模块。
// 例如: import usersRouter from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// todo: 设置路由
// 例如：app.use("/users", usersRouter);

// 全局错误处理中间件
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || "服务器内部错误" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
