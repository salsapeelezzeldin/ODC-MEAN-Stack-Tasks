const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

const viewsDir = path.join(__dirname,"../frontend/views")
const layoutDir = path.join(__dirname, "../frontend/layout")
const staticDir = path.join(__dirname, "../frontend/static")

app.use(express.static(staticDir))
app.set("view engine", "hbs")
app.set("views", viewsDir)
hbs.registerPartials(layoutDir)

app.use(express.urlencoded({extended:true})) //Add post method

bookRouters = require("./routes/book.router")

app.use(bookRouters)


app.all('*', (req,res)=> res.render('error404', {
    pageTitle:"Page Not Found", 
    err:"invalid url please try again"
}))

module.exports = app