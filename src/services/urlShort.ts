import { Url, UrlInterface } from "../models/Url"
import { UserInterface } from "../models/User"
import { generateCode } from "../helpers/codeUrl"

const createUrlShort = async (urlOriginal: string, user: UserInterface) => {
  try {
    const originalUrl = urlOriginal
    if (user && originalUrl !== "") {
      let url: UrlInterface = Url.build({
        code_url: generateCode(10),
        original_url: originalUrl,
        user_id: user.id_user,
      })

      await url.save()
    }
  }catch(err) {
    if (err instanceof Error) {
      if (err.name === "SequelizeUniqueConstraintError") {
        return { message: "data already exists" }
      }
    }
    throw new Error('database error')
  }
}


const findUrlShort = async (user: UserInterface) => {
  if(user){
    return await Url.findAll({ where: { user_id: user.id_user } })
  }

  return null
}

export { createUrlShort, findUrlShort }
