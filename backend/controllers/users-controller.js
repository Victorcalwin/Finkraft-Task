const User = require("../model/User");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};


const addUser = async (req, res, next) => {
  const { name, author, position, office, age, start, salary } = req.body;
  let user;
  try {
    user = new User({
      name,
      author,
      position,
      office,
      age,
      start,
      salary,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ user });
};



exports.getUsers = getUsers;
exports.addUser = addUser;
