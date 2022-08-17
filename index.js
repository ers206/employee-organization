const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
          
    ])
    }


    // not sure if these need to be in a seperate js file  
    // valildate before .then to make sure something was input
    // add to .then to INSERT INTO table
const addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addEmployee',
            message: '',
        
        }
    ])
    .then()
}    

const addDepartment = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addDepartment',
            message: '',
        
        }
    ])
    .then()
}    

const addRoles = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addRoles',
            message: '',
        
        }
    ])
    .then()
}    