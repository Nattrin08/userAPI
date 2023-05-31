const express = require("express");

//router es unmetodo que esta dentro la librerias de express
const router = express.Router();
const  authController  = require("../controllers/authController")

//imoportar controladores
const userController =  require ("../controllers/userController");

router.get("/",userController.getAllUsers);
// "/" significa el punto de partida, el dominio solito
router.post("/",userController.createUser);

router.put("/:id",userController.updateUser);

router.delete("/:id",userController.deleteUser);

router.post('/:login', authController.authenticaterUser);

module.exports = router;
//
