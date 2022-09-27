const employee = require('./employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.school = school;
    }

    printInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Name: ${this.employeeId}`)
        console.log(`Name: ${this.email}`)
        console.log(`Name: ${this.school}`)
    }
}