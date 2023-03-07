import { Request, Response } from 'express'

export const index = (req: Request, res: Response) => {
  res.send('Send from contact controller')
}
