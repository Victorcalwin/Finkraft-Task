const express = require("express");
const router = express.Router();
const User = require("../model/User");
const booksController = require("../controllers/users-controller");

router.get("/", booksController.getUsers);
router.post("/", booksController.addUser);
// router.get("/:id", booksController.getById);
// router.put("/:id", booksController.updateBook);
// router.delete("/:id", booksController.deleteBook);

module.exports = router;
