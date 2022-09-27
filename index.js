const fs = require('fs');
const inquirer = require('inquirer');
const teamPage = require('./src/template');



function generateManager() {
inquirer
    .prompt([
        {
            type:'input',
            message:'Manager name:',
            name:'mgrName',
        },
        {
            type:'input',
            message:'Employee ID:',
            name:'mgrId',
        },
        {
            type:'input',
            message:'Managers email:',
            name:'mgrEmail',
        },
    ])
    .then((response) => {
       console.log(response);
    
    })
}
