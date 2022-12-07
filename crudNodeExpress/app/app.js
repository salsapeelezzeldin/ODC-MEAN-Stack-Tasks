const express = require("express")
const path = require("path")
const hbs = require("hbs")
const userRouters = require("../routers/user.router.js")

const app = express()

const viewsDir = path.join(__dirname,"../frontend/views")
const layoutDir = path.join(__dirname,"../frontend/layout")
const staticDir = path.join(__dirname,"../frontend/static")

app.use(express.static(staticDir))
app.set("view engine", "hbs")
app.set("views", viewsDir)
hbs.registerPartials(layoutDir)



app.use(userRouters)

module.exports = app