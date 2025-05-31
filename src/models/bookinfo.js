import db from "../db/connect-db.js";
import { DataTypes } from "sequelize";

const BookInfo = db.define(
  "bookinfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.CHAR(13),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    press: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
    },
    pubdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { BookInfo };
