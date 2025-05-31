import { BookInfo } from "./bookinfo.js";
import { User } from "./user.js";
import { DataTypes, Model } from "sequelize";
import db from "../db/connect-db.js";

class Borrowing extends Model {}
Borrowing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    borrowDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: db,
    modelName: "borrowing",
    unique: false,
    timestamps: false,
  }
);

// 配置用户与书籍之间的借还关系，该关系为多对多，通过borrowing模型进行关联。
User.belongsToMany(BookInfo, {
  through: { model: Borrowing, unique: false },
  foreignKey: "userId",
  as: "borrowedBooks",
  otherKey: "bookId",
});
BookInfo.belongsToMany(User, {
  through: { model: Borrowing, unique: false },
  foreignKey: "bookId",
  as: "borrowers",
  otherKey: "userId",
});

export { Borrowing };
