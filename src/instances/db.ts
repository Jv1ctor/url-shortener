import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
  process.env.NAME_DB as string,
  process.env.USER_DB as string,
  process.env.PASSWORD_DB as string,
  {
    dialect: "mysql",
    port: parseInt(process.env.PORT_DB as string)
  }
)

export default sequelize