// Create an employee constructor class to use as the base class to build off of for the other roles
// Employee properties will include name, id, and email
// Employee will have the following methods getName, getId, getEmail, and get Role
// Export this class in order to super its properties and methods

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return Employee;
    }
}

module.exports = Employee;