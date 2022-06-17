// const express = require('express')
// const router=express.Router()
// simplify both two line-

const router = require('express').Router()
const { getAllUsers, createUser,updateUser, deleteUser} = require('../controllers/users.controller');


router.get("/", getAllUsers)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router;