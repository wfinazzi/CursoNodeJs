const chalk = require('chalk')
const yargs = require('yargs')
const task = require('./task')


yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
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
    handler: (argv) =>{
        const info = chalk.green.bold.inverse('Creating a new Task');
        console.log(info)
        task.addTask(argv.name, argv.description)
        // console.log(chalk.green(`Creating a new task:' ${argv.name}`))       
        // console.log(`Name: ${argv.name}`)
        // console.log(`Description: ${argv.description}`)
               
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task',
    builder: {
        name:{
            describe: 'Task name to be deleted',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) =>{        
        task.removeTask(argv.name)               
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: () =>{
        console.log(chalk.green('Listing out all Tasks'))
        const allTasks = task.loadAllTasks()
        const allTasksJSON = JSON.stringify(allTasks, null, 2)
        console.log(allTasksJSON)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task',
    builder: {
        name:{
            describe: 'Task to find',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) =>{
        //console.log(argv)
        console.log(chalk.green('Read a Task'))
        const taskFound = task.findTask(argv.name);
        console.log(JSON.stringify(taskFound))
    }
})

yargs.command({
    command: 'update',
    describe: 'update a task',
    builder: {
        name:{
            describe: 'Task to find',
            demandOption : true,
            type : 'string'
        },status: {
            describe: 'status to update the task',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        console.log(chalk.green('Update a Task'))
        task.updateTask(argv.name, argv.status)
        
    }
})


yargs.parse();