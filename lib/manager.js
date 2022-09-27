const employee = require('./employee');

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    printInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Employee ID: ${this.employeeId}`)
        console.log(`Name: ${this.email}`)
        console.log(`Name: ${this.officeNumber}`)
    }
}
