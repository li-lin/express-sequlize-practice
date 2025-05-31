import { User, UserDetail } from "../models/model.js";

// 创建一个用户
async function addUser(user) {
  const newUser = await User.create(user, {
    include: [{ model: UserDetail, as: "details" }],
  });
  if (newUser) console.log("Created: ", newUser.toJSON());
  else console.log("Create failed");
}

async function getUsers() {
  const users = await User.findAll({
    include: [{ model: UserDetail, as: "details" }],
  });
  users.forEach((user) => {
    console.log(user.toJSON());
  });
}

export { addUser, getUsers };
