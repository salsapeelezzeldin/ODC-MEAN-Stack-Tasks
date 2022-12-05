const chalk = require('chalk')
const user = require("./modules/user.module")
const yargs = require('yargs')

yargs.command({
    command:"add",
    handler: function(argv){
        user.add(argv)
    }
})
yargs.command({
    command:"showAll",
    handler: function(){
        user.showAll()
    }
})
yargs.command({
    command:"showSingle",
    handler: function(argv){
        user.showSingle(argv)
    }
})
yargs.command({
    command:"edit",
    handler: function(argv){
        user.edit(argv)
    }
})
yargs.command({
    command:"del",
    handler: function(argv){
        user.del(argv)
    }
})

yargs.argv

//console.log(chalk.red.bold('hello'));
