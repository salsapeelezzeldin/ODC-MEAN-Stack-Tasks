const router = require("express").Router()

const bookController = require("../controller/book.controller")

router.get("/",bookController.home)

router.get("/showall",bookController.showall)

router.get("/addbook",bookController.addbook)
router.post("/addbook",bookController.add)

router.get("/editbook/:id",bookController.editbook)
router.post("/editbook/:id",bookController.edit)

router.get("/delbook/:id",bookController.delbook)

router.get("/showbook/:id",bookController.showbook)

router.get("/search",bookController.search)

router.get("/showall/nameasc",bookController.sortnameasc)
router.get("/showall/namedesc",bookController.sortnamedesc)

router.get("/showall/pagesasc",bookController.sortpagesasc)
router.get("/showall/pagesdesc",bookController.sortpagesdesc)


module.exports = router