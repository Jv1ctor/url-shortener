import { Request, Response } from "express"
import { User } from "../models/User"
import { createUrlShort, findOriginalUrl, findUrlShort } from "../services/urlShort"


const home = async (_req: Request, res: Response) => {
  const user = await User.findOne()
  
  if(user){
    const url = await findUrlShort(user)
    res.render('pages/home', { url })
  }
}

const shortUrlCreate = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne()
    
    if(user){
      const urlOriginal: string = req.body.url
      const error = await createUrlShort(urlOriginal, user)
      const url = await findUrlShort(user)
      
      res.render('pages/home', { url, error })
    }
    
  }catch(err) {
    throw new Error('database error')
  }

}

const urlRedirect = async (req: Request, res: Response) => {
  const code = req.params.code
  const originalUrl = await findOriginalUrl(code)

  if(!originalUrl) return res.render('pages/404')
  if(originalUrl) res.redirect(originalUrl)
}

const login = (_req: Request, res: Response) => {
  res.render('pages/emAndamento')
}

const register = (_req: Request, res: Response) => {
  res.render('pages/emAndamento')
}

export { home, shortUrlCreate, urlRedirect, login, register }