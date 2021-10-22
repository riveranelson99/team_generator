// Create an employee constructor class to use as the base class to build off of for the other roles
// Employee properties will include name, id, and email
// Employee will have the following methods getName, getId, getEmail, and get Role
// Export this class in order to be accessed from sub classes and tests

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;