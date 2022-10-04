const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, Id, email, school) {
        super (name, Id, email, 'Intern');
        
        this.school = school;
    }

    getSchool () {
        return this.school;
    }
  

}
module.exports = Intern; 