// Create an Engineer constructor class to extend the base class of Employee
// Engineer properties will include the properties of Employee as well as github
// Engineer will have the following methods getGithub and getRole

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
    }

    getGithub() {

    }

    getRole() {
        return Engineer;
    }
}