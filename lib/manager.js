class Manager {
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

class employeeEngineer {
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

class employeeIntern {
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