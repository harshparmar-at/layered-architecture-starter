// import { Model, DataTypes } from "sequelize";
// import sequelize from "../config/createConnection";

// export class UserModel extends Model {}

// UserModel.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     city: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     birthDate: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   { tableName: "users", sequelize, timestamps: false }
// );

import { Model, DataTypes } from "sequelize";
import sequelize from "../config/createConnection";

interface UserAttributes {
  id?: number;
  name: string;
  city: string;
  birthDate: Date;
}

export class UserModel extends Model<UserAttributes> {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "users", sequelize, timestamps: false }
);
