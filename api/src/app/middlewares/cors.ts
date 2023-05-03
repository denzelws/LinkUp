import { NextFunction, Request, Response } from 'express'

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
}

export default corsMiddleware
