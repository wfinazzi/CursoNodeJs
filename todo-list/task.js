const fs = require('fs');
const chalk = require('chalk');

const addTask = (name,description) => {
    const tasks = loadAllTasks();

    // const duplicatedTask = tasks.find(function(task){
    //     return task.name === name
    // });

    const duplicatedTask = tasks.find((task) => task.name === name)

    
    if(!duplicatedTask){
        const newTask = {
            name,
            description
        }
    
        tasks.push(newTask)    
        saveTasks(tasks)
        const successMessage = chalk.green.bold('Task created')
        console.log(successMessage)
    }else {
        const errorMessage = chalk.red.bold(`Task with name: [${name}] already taken!`)
        console.log(errorMessage)
    }
    
}

const removeTask = (name) => {
    const tasks = loadAllTasks();
    // const tasksToKeep = tasks.filter(function(task){
    //     return task.name !== name
    // })

    const tasksToKeep = tasks.filter((task) => task.name !== name)

    saveTasks(tasksToKeep)   

    console.log(`Task with name [${name}] has been removed`)
    
}

const findTask = (name) => {
    const tasks = loadAllTasks();
    // const taskFound = tasks.find(function(task){
    //     return task.name === name
    // })

    const taskFound = tasks.find((task) => task.name === name)

    if(taskFound !== undefined){
        return taskFound
    }else {
        return []
    }    
}

const updateTask = (name, status) => {
    const tasks = loadAllTasks();
    tasks.map(function(task){
        if(task.name === name){
            task.status = status
        }
    })

    saveTasks(tasks)

    console.log(`Task status with name [${name}] has been updated`)

    const taskFound = tasks.find((task) => task.name === name)

    tasks.find((task) =>{
        if(task.name === name){
            task.status = status
        }
    })
    
}

const saveTasks = (task) => {
    const taskJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', taskJSON)
}

const loadAllTasks = () => {
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())
    }catch (error){
        return []
    }
}

module.exports = {
    addTask, removeTask, loadAllTasks, findTask, updateTask
}