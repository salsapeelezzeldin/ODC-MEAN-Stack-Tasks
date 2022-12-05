heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]

const chalk = require('chalk')
const deal = require("./deal.module")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }

    static showAll(){
        const all = deal.readFromJson()
        all.forEach(user => {
            heads.forEach(head => {
                if(user[head.key] != null)
                    console.log(chalk.blue.bold(head.key + ": ") + chalk.green(user[head.key]))
            }); 
            console.log(chalk.red.bold("---------------------------"))
        });
        
    }

    static showSingle(data){
        const all = deal.readFromJson()
        const single = all.filter(user => user.id == data.id);
        if (single.length)
        {
            heads.forEach(head => {
                if(single[0][head.key] != null)
                    console.log(chalk.blue.bold(head.key + ": ") + chalk.green(single[0][head.key]))
            }); 
        }    
        else
            console.log(chalk.red.bold("User Not Found!"))
    }

    static edit(data){
        const all = deal.readFromJson()
        let single = all.filter(user => user.id == data.id);
        if (single.length)
        {
            heads.forEach(head => {
                if(data[head.key] != null && head.key != "id")
                {
                    single[0][head.key] = data[head.key]
                    deal.writeToJson(all)
                    console.log(chalk.blue.bold(head.key + ": ") + chalk.green(single[0][head.key]) + " " 
                                    +  chalk.green.bold( "\"" + head.key + " Updated Successfully\""))
                }
            }); 
        }    
        else
            console.log(chalk.red.bold("User Not Found!"))
    }
    
    static del(data){
        const all = deal.readFromJson()
        let single = all.filter(user => user.id == data.id);
        all.forEach((user , index) => {
            if (user.id == data.id)
            {
                heads.forEach(head => {
                    if(user[head.key] != null)
                        console.log(chalk.red(head.key + ": " + user[head.key]))
                });
                console.log(chalk.red.bold( "\"User Removed Successfully\""))
                all.splice(index,1)
                deal.writeToJson(all) 
            } 
        });
        if(!single.length)
            console.log(chalk.red.bold("User Not Found!"))
    }
}
module.exports = User