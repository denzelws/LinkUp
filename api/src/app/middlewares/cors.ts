import { NextFunction, Request, Response } from 'express'

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Max-Age', '10')
  next()
}

export default corsMiddleware
