import { DataTypes, Model } from "sequelize";
import { BookInfo } from "./bookinfo.js";
import db from "../db/connect-db.js";

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "category",
    timestamps: false,
  }
);

Category.hasMany(BookInfo, {
  foreignKey: "cateId",
  as: "books",
});
BookInfo.belongsTo(Category, {
  foreignKey: "cateId",
});

export { Category };
