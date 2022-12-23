const router = require("express").Router()
const User = require('../app/controller/user.contoller')
const {auth} = require("../app/middleware/auth.middleware")

//auth
router.post("/register", User.register)
router.post("/login", User.login)

//logout
router.post("/logout",auth, User.logOut)

//logout all
router.post("/logoutall",auth, User.logOutAll)

//profile
router.post("/me",auth, User.profile)

//all Users
router.get("/",auth, User.allUsers)

//get single user
router.get("/single/:id",auth, User.singleUser)

//activate & deactivate Status
router.post("/changeStatus",auth, User.changeStatus)

//edit my profile
router.post("/editprofile",auth, User.editProfile)

//edit other users
router.post("/edituser/:id",auth, User.edituser)

//delete me
router.delete("/deleteProfile",auth, User.deleteProfile)

//delete user
router.delete("/deleteUser/:id",auth, User.deleteUser)

//add address
router.post("/addAddress",auth, User.addAddress)

//delete address
router.delete("/deleteAddress/:id",auth, User.deleteAddress)

//show all adresses
router.get("/showAddresses",auth, User.showAddresses)

//show single adresses
router.get("/showAddress/:id",auth, User.showAddress)

module.exports = router