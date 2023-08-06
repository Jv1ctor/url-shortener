import express, {Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
import mustache from "mustache-express"
import homeRouter from "./routes/home.routes";

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use( express.static(path.join(__dirname, '../public')))

server.use(homeRouter)

server.use( (req: Request, res: Response) => {
  res.status(404).send('pagina nao encontrada')
})


server.listen(process.env.PORT)

