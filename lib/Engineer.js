// Create an Engineer constructor class to extend the base class of Employee
// Engineer properties will include the properties of Employee as well as github
// Engineer will have the following methods getGithub and getRole
// Export this class in order to be accessed from tests

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        super.role = "Engineer"
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;