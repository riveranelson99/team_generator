// Create an Manager constructor class to extend the base class of Employee
// Manager properties will include the properties of Employee as well as github
// Manager will have the following methods getGithub and getRole

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
    }

    getGithub() {

    }

    getRole() {
        return Manager;
    }
}