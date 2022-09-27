const employee = require('./employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.github = github;
    }

    printInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Name: ${this.employeeId}`)
        console.log(`Name: ${this.email}`)
        console.log(`Name: ${this.github}`)
    }
}