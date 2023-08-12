import { Model, DataTypes} from "sequelize";
import sequelize from "../instances/db";

interface UserInterface extends Model {
  id_user: string,
  email_user: string,
  name_user: string,
  password_user: string,
}

const User = sequelize.define<UserInterface>('User', {
  id_user: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email_user: {
    type: DataTypes.STRING,
    unique: true
  },
  name_user: {
    type: DataTypes.STRING,
  },
  password_user: {
    type: DataTypes.STRING,
  }

}, {
  tableName: 'users',
  createdAt: true,
  updatedAt: false,
})


export { User, UserInterface }