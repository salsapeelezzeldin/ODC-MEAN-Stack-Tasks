class User{
    static home = (req,res)=> { 
        res.render("home", { 
            name: "salsapeel", 
            pageTitle:"Home Page"
        }) 
    }

    static add = (req,res)=> { 
        res.render("add", { 
            pageTitle:"Add Page"
        }) 
    }

    static edit = (req,res)=> { 
        res.render("edit", { 
            pageTitle:"Edit Page"
        }) 
    }

    static showsingle = (req,res)=> { 
        res.render("showsingle", { 
            pageTitle:"Show Single Page"
        }) 
    }

    static showall = (req,res)=> { 
        res.render("showall", { 
            pageTitle:"Show All Page"
        }) 
    }
}


module.exports = User