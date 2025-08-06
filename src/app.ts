import Koa from 'koa'
import koaRouter from '@koa/router'
// import { privateRouter, publicRouter, openRouter } from './router/index'
// import errorHandler from './middlewares/errorHandler'

const app = new Koa()
const router = new koaRouter()

router.get('/', async (ctx) => {
  ctx.body = `hello`
})

app.use(router.routes())

// 中间件
// app.use(bodyParser());
// app.use(cors());
// app.use(errorHandler())

// Routes
// app.use(publicRouter.routes()).use(publicRouter.allowedMethods()) // 公共路由
// app.use(privateRouter.routes()).use(privateRouter.allowedMethods()) // 权限路由
// app.use(openRouter.routes()).use(openRouter.allowedMethods()) // 公开路由

// 启动服务器
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
