import sequelize from "../instances/db";
import { DataTypes, Model } from "sequelize";


interface UrlInterface extends Model{
  id: number,
  code_url: string,
  original_url: string,
  clicks: number,
  status: 'active'| 'inactive',
  createAt: Date
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
},
{
  tableName: 'urls',
  createdAt: true,
  updatedAt: false,
})

export {UrlInterface, Url}