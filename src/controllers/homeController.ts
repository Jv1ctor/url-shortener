import { Request, Response } from "express"
import { Url } from "../models/Url"

const home = async (req: Request, res: Response) => {
  res.render('pages/home')
}

export { home }