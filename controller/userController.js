const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const body = req.body;
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data = { ...body, password: hashedPassword };
  console.log(hashedPassword);
  try {
    const user = await UserModel.create(data);
    res.status(201).send("success");
  } catch (err) {
    res.status(500).send("error");
  }
};
const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await UserModel.findOne({ email: body.email });
  const id = user.id;
  if (user) {
    res.status(200).send(id);
    console.log(user);
  } else {
    res.status(404).send("user not found");
  }
};
module.exports = {
  createUser,
  loginUser,
};
