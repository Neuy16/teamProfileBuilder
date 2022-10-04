const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super (name, Id, email, 'Engineer');
        
        this.github = github;
    }

    getGithub () {
        return this.github;
    }
    
   
}

module.exports = Engineer; 