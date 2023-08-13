import { Request, Response } from "express"
import { Url, UrlInterface } from "../models/Url"
import { User } from "../models/User"

const home = async (req: Request, res: Response) => {
  res.render('pages/home')
}

const login = (req: Request, res: Response) => {
  res.render('pages/emAndamento')
}

const register = (req: Request, res: Response) => {
  res.render('pages/emAndamento')
}

export { home, login, register }