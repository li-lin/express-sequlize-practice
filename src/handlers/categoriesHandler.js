import { Category, BookInfo } from "../models/model.js";

async function addCategory(cate) {
  const newCate = await Category.create(cate);
  return newCate.toJSON();
}

async function setCategory(bookIds, cateId) {
  const books = await BookInfo.findAll({
    where: {
      id: bookIds,
    },
  });
  const cate = await Category.findOne({
    where: {
      id: cateId,
    },
  });
  return await cate.addBooks(books);
}

async function getBooksByCategory(cateId) {
  const cate = await Category.findOne({
    where: {
      id: cateId,
    },
  });
  const books = await cate.getBooks();
  return books.map((book) => book.toJSON());
}

export { addCategory, setCategory, getBooksByCategory };
