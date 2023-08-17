import sequelize from "../instances/db";
import { DataTypes, Model } from "sequelize";
import { User } from "./User";
import { formatDate } from "../helpers/formattedDate";

interface UrlInterface extends Model{
  id: number,
  code_url: string,
  original_url: string,
  clicks: number,
  status: 'active'| 'inactive',
  createdAt: Date,
  user_id: string,
}

const Url = sequelize.define<UrlInterface>('Url', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code_url: {
    type: DataTypes.STRING,
    unique: true,
  },
  original_url: {
    type: DataTypes.STRING,
  },
  short_url: {
    type: DataTypes.VIRTUAL,
    get(){
      return `${process.env.BASE_URL}/${this.code_url}` 
    }
  },
  clicks: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active'
  },
  date: {
    type: DataTypes.VIRTUAL,
    get(){
      const dateFormated = formatDate(this.createdAt)
      return `${dateFormated}`
    },
  },
  user_id:{
    type: DataTypes.UUID,
  }
},
{
  tableName: 'urls',
  createdAt: true,
  updatedAt: false,
})

User.hasMany(Url, {
  foreignKey: 'user_id',
})

Url.belongsTo(User, {
  foreignKey: 'user_id'
})

export {UrlInterface, Url}