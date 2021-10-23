// Create an Intern constructor class to extend the base class of Employee
// Intern properties will include the properties of Employee as well as school
// Intern will have the following methods getSchool and getRole
// Export this class in order to be accessed from tests

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        super.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;