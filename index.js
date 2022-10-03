const fs = require('fs');
const inquirer = require('inquirer');

// Reference to html
const generateTeam = require('./src/template');

// Team profile classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

// html path
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Holds choice from menu
let role = '';

let team = [];

generateMenu()

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
            role = response.teamChoices;
            switch (role) {
                case "Manager":
                    role = 'Manager';
                    generateManager();
                    break;
                case 'Engineer':
                    role = 'Engineer';
                    generateEngineer();
                    break;
                case 'Intern':
                    role = 'Intern';
                    generateIntern();
                    break;
                default:
                    createHtml();
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
        .then((mgrInput) => {
            
            const manager = new Manager (mgrInput.mgrName, mgrInput.mgrId, mgrInput.mgrEmail, mgrInput.officeNumber);
            team.push(manager);
            console.log(team);
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
            team.push(role);
            const engineer = new Engineer (engInput.engName, engInput.engId, engInput.engEmail, engInput.engGithub);
            team.push(engineer);
            console.log(team);
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
            team.push(role);
            const intern = new Intern (intInput.intName, intInput.intId, intInput.intEmail, intInput.intSchool);
            team.push(intern);
            console.log(team);
            generateMenu();
        })
}

// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// }; 


function createHtml () {
    console.log("Team has been created!")

    fs.writeFileSync(outputPath, generateTeam(team), "UTF-8")
}


console.log(team);






