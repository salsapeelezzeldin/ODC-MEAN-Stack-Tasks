const jsonDealHelper = require("../healper/dealWithJson.helper")
const dataHelper = require("../healper/data.helper")

class Book{
    static home = (req,res)=> { 
        res.render("home", { 
            name: "salsapeel", 
            pageTitle:"Home Page"
        }) 
    }

    static showall = (req,res)=> {
        const books = jsonDealHelper.readFromJSON()
        res.render("showall", { 
            pageTitle:"All Books" ,
            books,
            hasBooks:books.length
        }) 
    }

    static addbook = (req,res)=> {
        res.render("addbook", { pageTitle:"Add Book" }) 
    }
    static add = (req,res)=> {
        const book = {id:Date.now(), ...req.body}
        const books = jsonDealHelper.readFromJSON()
        books.push(book)
        jsonDealHelper.writeToJSON(books)
        res.redirect("/showall") 
    }

    static editbook = (req,res)=> {
        const books = jsonDealHelper.readFromJSON()
        const id = dataHelper.getId(books,"id", req.params.id)
        res.render("editbook", {
            pageTitle:"Edit Book",
            book: books[id]
        }) 
    }

    static edit = (req,res)=> {
        const books = jsonDealHelper.readFromJSON()
        const id = dataHelper.getId(books, "id", req.params.id)
        if(id == -1) return res.render("error404", {pageTitle:"invalid", err:"invalid id"})
        const newbook = {id: req.params.id, ...req.body}
        books[id] = newbook
        jsonDealHelper.writeToJSON(books)
        res.redirect(`/showbook/${req.params.id}`)
    }

    static delbook = (req,res)=> { 
        const books = jsonDealHelper.readFromJSON()
        const id = dataHelper.getId(books,"id", req.params.id)
        if(id != -1) books.splice(id, 1)
        jsonDealHelper.writeToJSON(books)
        res.redirect("/showall")
    }
    
    static showbook = (req,res)=> {
        const books = jsonDealHelper.readFromJSON()
        const id = dataHelper.getId(books, "id", req.params.id)
        res.render("showbook", { 
            pageTitle: "Show Book" ,
            book: books[id]
        })
    }

    static search = (req,res)=> {
        const all = jsonDealHelper.readFromJSON()
        const book = {...req.query}
        const books = all.filter(el => el.name.includes(book.name))
        res.render("showall", { 
            pageTitle:"All Books" ,
            books,
            hasBooks: books.length
        }) 
    }

    static sortnameasc = (req,res)=> {
        const books = jsonDealHelper.readFromJSON().sort(dataHelper.compare('name','asc'))
        res.render("showall", { 
            pageTitle:"All Books" ,
            books: books,
            hasBooks:books.length
        }) 
    }

    static sortnamedesc = (req,res)=> {
        const books = jsonDealHelper.readFromJSON().sort(dataHelper.compare('name','desc'))
        res.render("showall", { 
            pageTitle:"All Books" ,
            books: books,
            hasBooks:books.length
        }) 
    }

    static sortpagesasc = (req,res)=> {
        const books = jsonDealHelper.readFromJSON().sort((a, b) => a.pages - b.pages)
        res.render("showall", { 
            pageTitle:"All Books" ,
            books: books,
            hasBooks:books.length
        }) 
    }

    static sortpagesdesc = (req,res)=> {
        const books = jsonDealHelper.readFromJSON().sort((a, b) => b.pages - a.pages)
        res.render("showall", { 
            pageTitle:"All Books" ,
            books: books,
            hasBooks:books.length
        }) 
    }

}


module.exports = Book