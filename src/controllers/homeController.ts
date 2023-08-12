import { Request, Response } from "express"
import { Url, UrlInterface } from "../models/Url"
import { User } from "../models/User"

const home = async (req: Request, res: Response) => {
  res.render('pages/home')
}

const login = (req: Request, res: Response) => {
  res.render('pages/login')
}

const register = (req: Request, res: Response) => {
  res.render('pages/register')
}

export { home, login, register }