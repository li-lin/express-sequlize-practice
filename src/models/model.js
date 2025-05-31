import { BookInfo } from "./bookinfo.js";
import { User, UserDetail } from "./user.js";
import { Category } from "./category.js";
import { Borrowing } from "./borrowing.js";
import db from "../db/connect-db.js";

// 将模型同步到数据库
await db.doSync(false);

export { User, UserDetail, BookInfo, Category, Borrowing, db };
