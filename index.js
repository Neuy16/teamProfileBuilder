const fs = require('fs');
const inquirer = require('inquirer');

// Reference to html
const generateTeam = require('./src/template');

// Team profile classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 


// Holds choice from menu
let choice = '';

let team = [];

generateMenu();

function generateMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Who's on your team?",
                choices: ['Manager', 'Engineer', 'Intern', 'My team is full'],
                name: 'teamChoices',
            },
        ])
        .then((response) => {
            choice = response.teamChoices;
            switch (choice) {
                case "Manager":
                    generateManager();
                    break;
                case 'Engineer':
                    generateEngineer();
                    break;
                case 'Intern':
                    generateIntern();
                    break;
                case 'My team is full':
                    break;
            }
        })
}

function generateManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Manager name:',
                name: 'mgrName',
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'mgrId',
            },
            {
                type: 'input',
                message: 'Managers email:',
                name: 'mgrEmail',
            },
            {
                type: 'input',
                message: 'Office number:',
                name: 'officeNumber',
            },
        ])
        .then((mgrData) => {
            console.log(mgrData);
            const  { mgrName, mgrId, mgrEmail, officeNumber } = mgrInput;
            const manager = new Manager (mgrName, mgrId, mgrEmail, officeNumber);
            team.push(manager);
            generateMenu();
        })
}

function generateEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Name:',
                name: 'engName',
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'engId',
            },
            {
                type: 'input',
                message: 'Email:',
                name: 'engEmail',
            },
            {
                type: 'input',
                message: 'Github username:',
                name: 'engGithub',
            },
        ])
        .then((engInput) => {
            console.log(engInput);
            const  { engName, engId, engEmail, engGithub } = engInput;
            const engineer = new Engineer (engName, engId, engEmail, engGithub);
            team.push(engineer);
            generateMenu();
        })
}

function generateIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Name:',
                name: 'intName',
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'intId',
            },
            {
                type: 'input',
                message: 'Email:',
                name: 'intEmail',
            },
            {
                type: 'input',
                message: 'School:',
                name: 'intSchool',
            },
        ])
        .then((intInput) => {
            console.log(intInput);
            const  { intName, intId, intEmail, intSchool } = intInput;
            const intern = new Intern (intName, intId, intEmail, intSchool);
            team.push(intern);
            generateMenu();
        })
}




