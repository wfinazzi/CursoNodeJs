const chalk = require('chalk')
const yargs = require('yargs')

//alterando a versão do CLI
yargs.version('1.0.1')



yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name:{
            describe: 'Task name',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function(argv){
        console.log(chalk.green(`Creating a new task:' ${argv.name}`))
        console,log(info)
        console.log(`Name: ${argv.name}`)
        console.log(`Description: ${argv.description}`)
       
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    builder: {
        name:{
            describe: 'Task name',
            demandOption : true,
            type : 'string'
        }, 
        description: {
            describe: 'Task Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        const info = chalk.greeen.bold.inverse('Creating a new Task:');
        console.log(info)
        console.log(argv.name)
        console.log(argv.description)
    }
})