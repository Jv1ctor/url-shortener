import { Request, Response } from "express"
import { Url } from "../models/Url"

const home = async (req: Request, res: Response) => {
  res.send('hello world')
}

export { home }