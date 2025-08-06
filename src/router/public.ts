// const koaRouter = require("@koa/router");
import koaRouter from "@koa/router";

const router = new koaRouter();

router.get("/", (ctx) => {
	ctx.body = "Hello ESM!";
});

export default router;
