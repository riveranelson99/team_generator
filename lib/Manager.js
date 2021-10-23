// Create an Manager constructor class to extend the base class of Employee
// Manager properties will include the properties of Employee as well as officeNumber and github
// Manager will have the following methods getGithub and getRole
// Export this class in order to be accessed from tests

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        super.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;