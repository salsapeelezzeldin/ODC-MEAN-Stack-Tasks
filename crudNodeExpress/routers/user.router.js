const router = require("express").Router()

const userController = require("../controller/user.controller.js")

router.get("/",userController.home)
router.get("/add",userController.add)
router.get("/edit",userController.edit)
router.get("/showsingle",userController.showsingle)
router.get("/showall",userController.showall)


module.exports = router