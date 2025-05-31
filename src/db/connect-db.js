import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const config = process.env;

const db = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USERNAME,
  config.DATABASE_PASSWORD,
  {
    host: config.DATABASE_HOST,
    dialect: config.DATABASE_TYPE,
  }
);

// 当flag为true时，对数据库进行同步操作。
db.doSync = async function (flag) {
  if (flag) await db.sync({ alter: true });
};

export default db;
