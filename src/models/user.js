import db from "../db/connect-db.js";
import { DataTypes, Model } from "sequelize";

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: [5, 60],
        is: /^[\w]+$/,
        isUnique: async (value) => {
          const user = await User.findOne({
            where: {
              username: value,
            },
          });
          if (user) throw new Error("用户名已存在");
        },
      },
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: [6, 60],
      },
    },
  },
  {
    sequelize: db,
    modelName: "user",
    timestamps: false,
  }
);

class UserDetail extends Model {}
UserDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    address: {
      type: DataTypes.STRING(200),
    },
    phone: {
      type: DataTypes.CHAR(11),
    },
  },
  {
    sequelize: db,
    modelName: "userDetail",
    timestamps: false,
    tableName: "user_details",
  }
);

User.hasOne(UserDetail, {
  foreignKey: "userId",
  as: "details",
  onDelete: "CASCADE",
});
UserDetail.belongsTo(User, {
  foreignKey: "userId",
});

export { User, UserDetail };
