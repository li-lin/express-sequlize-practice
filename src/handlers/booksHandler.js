import { BookInfo } from "../models/model.js";
import { Op } from "sequelize";

async function getBookByISBN(isbn) {
  var bookinfo = await BookInfo.findOne({
    where: {
      isbn,
    },
  });
  return bookinfo.toJSON();
}

async function getBooksByPrice(startPrice, endPrice) {
  let books = null;
  if (endPrice) {
    books = await BookInfo.findAll({
      where: {
        price: {
          [Op.between]: [startPrice, endPrice],
        },
      },
    });
  } else {
    books = await BookInfo.findAll({
      where: {
        price: {
          [Op.gte]: startPrice,
        },
      },
    });
  }
  return books.map((book) => book.toJSON());
}

export { getBookByISBN, getBooksByPrice };
