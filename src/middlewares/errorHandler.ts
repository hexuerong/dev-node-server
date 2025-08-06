import type { Context, Next } from 'koa'
import { HttpError } from '../errors/http.error'

interface ErrorResponse {
  status: number
  message: string
  details?: any
  stack?: string
}

const errorHandler = () => {
  return async (ctx: Context, next: Next) => {
    try {
      await next()
    } catch (err) {
      const response: ErrorResponse = {
        status: 500,
        message: 'Internal Server Error'
      }
      // 检查是否是已知错误类型
      if (err instanceof HttpError) {
        response.status = err.status
        response.message = err.message
        if (err.details) response.details = err.details
      } else if (err instanceof Error) {
        // 处理未知错误
        response.message = err.message
        // 在开发环境下打印完整错误
        if (process.env.NODE_ENV === 'development') {
          response.stack = err.stack || ''
          console.error(err)
        }
      }
      ctx.status = response.status
      ctx.body = { error: response }
      // 触发应用级别的错误事件
      ctx.app.emit('error', err, ctx)
    }
  }
}

export default errorHandler
