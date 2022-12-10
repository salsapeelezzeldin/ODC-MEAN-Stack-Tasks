const fs = require("fs")

class DealWithJson{
    static readFromJSON = () => {
        let data
        try{
            data = JSON.parse(fs.readFileSync('data/books.json'))
        }
        catch(e){
            data = []
        }   
        return data
    }

    static writeToJSON = (data)=> fs.writeFileSync("data/books.json", JSON.stringify(data))
}
module.exports = DealWithJson