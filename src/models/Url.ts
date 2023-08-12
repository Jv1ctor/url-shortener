import sequelize from "../instances/db";
import { DataTypes, Model } from "sequelize";
import { User } from "./User";

interface UrlInterface extends Model{
  id: number,
  code_url: string,
  original_url: string,
  clicks: number,
  status: 'active'| 'inactive',
  createAt: Date,
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
  clicks: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
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
  foreignKey: 'url_id',
})

Url.belongsTo(User, {
  foreignKey: 'url_id'
})

export {UrlInterface, Url}