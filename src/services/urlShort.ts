import { Url, UrlInterface } from "../models/Url"
import { UserInterface } from "../models/User"
import { generateCode } from "../helpers/codeUrl"

const createUrlShort = async (urlOriginal: string, user: UserInterface) => {
  try {
    const originalUrl = urlOriginal
    if (user && originalUrl !== "") {
      let [url, created] = await Url.findOrBuild({
        where: { original_url: originalUrl },
        defaults: {
          code_url: generateCode(10),
          original_url: originalUrl,
          user_id: user.id_user,
        }
      })

      if(!created) return { message: "data already exists" }
      await url.save()
    }
    return null
  }catch(err) {
    throw new Error('database error')
  }
}


const findUrlShort = async (user: UserInterface) => {
  if(user){
    return await Url.findAll({ where: { user_id: user.id_user } })
  }

  return null
}

const findOriginalUrl = async (code: string) => {
  const queryUrl = await Url.findOne({ where: { code_url: code } })

  if(queryUrl){
    const { original_url } = queryUrl
    queryUrl.clicks++
    await queryUrl.save()
    
    return original_url
  }

  return null
}

const findUrlDelete = async (code: string) => {
  try {
    const queryUrl = await Url.findOne({ where: { code_url: code }})
    if(queryUrl){
      await queryUrl.destroy()
      return true
    }
    return false
  }catch(err) {
    throw new Error('delete short url error')
  }
}

export { createUrlShort, findUrlShort, findOriginalUrl, findUrlDelete }
