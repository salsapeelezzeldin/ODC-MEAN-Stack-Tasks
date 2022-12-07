require('dotenv').config()

const PORT = process.env.PORT

const app = require("./app/app.js")

app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))