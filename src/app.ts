import Koa from "koa";
import { privateRouter, publicRouter, openRouter } from "./router/index";
import errorHandler from "./middlewares/errorHandler";

// const Koa = require("koa");
// const bodyParser = require("koa-bodyparser");
// const cors = require("@koa/cors");
// const errorHandler = require("./middlewares/errorHandler");

const app = new Koa();

// 中间件
// app.use(bodyParser());
// app.use(cors());
app.use(errorHandler());

// Routes
app.use(publicRouter.routes()).use(publicRouter.allowedMethods()); // 公共路由
app.use(privateRouter.routes()).use(privateRouter.allowedMethods()); // 权限路由
app.use(openRouter.routes()).use(openRouter.allowedMethods()); // 公开路由

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
