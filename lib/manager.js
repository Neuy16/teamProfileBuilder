const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, Id, email, officeNumber) {
      super (name, Id, email, 'Manager');

      this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
      return this.officeNumber;
    }
   
}

module.exports = Manager; 