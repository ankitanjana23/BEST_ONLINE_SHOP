const bcrypt = require("bcryptjs");
const ObjectId = require("mongodb").ObjectId;

const users = [
  {
    name: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    _id: new ObjectId("64a1d3fe5c40636c47e298fc"),
    name: "imran",
    lastName: "khan",
    email: "imrankhan211198@gmail.com",
    password: bcrypt.hashSync("imrankhan", 10),
  },
];

module.exports = users;
