/*
Bring in fs for the purposes of generating the html file
Bring in inquirer for the purposes of prompting the user with the questions that will be asked
Bring in the sub classes for the purposes of constructing new instances of those classes based on user response
Bring in the function defined in the page template for the purposes of feeding it the data that will be gathered from the user responses
Establish an empty array where the entirety of the user responses will be stored for the purposes of manipulation later on
*/

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./src/page-template");
let teamArr = [];
/*
* WHEN the application is started, THEN a prompt to enter the team manager’s name, employee ID, email address, and office number is given
* WHEN the team manager’s name, employee ID, email address, and office number ar entered, then a menu with the option to add an engineer or an intern or to finish building my team is presented.
* WHEN the engineer option is selected, THEN a prompt to enter the engineer’s name, ID, email, and GitHub username is given, and redirected back to the menu
* WHEN the intern option is selected, THEN a prompt to enter the intern’s name, ID, email, and school is given, and redirected back to the menu
* WHEN finishing the building of the team, THEN the application is exited, and the HTML is generated
*/

// First function is to generate a new instance of a manager class and feed the responses of the user into an empty array
// The last thing to be done is to initiate the choose additional employee function
function managerGenerator() {
    inquirer
        .prompt([
            {
                message: "What is the team manager's name?",
                name: "name",
            },
            {
                message: "What is the team manager's id?",
                name: "employee_id",
            },
            {
                message: "What is the team manager's email?",
                name: "email_address",
            },
            {
                message: "What is the team manager's office number?",
                name: "office_number",
            },
        ])

        .then(function(response) {
            const name = response.name;
            const id = response.employee_id;
            const email = response.email_address;
            const officeNumber = response.office_number;
            const manager = new Manager(name, id, email, officeNumber)

            teamArr.push(manager);
            console.log(teamArr);
            additionalTeamMember();
        })
};

// Second function is to generate a new instance of an engineer class and feed the responses of the user into an empty array
// The last thing to be done is to initiate the choose additional employee function
function engineerGenerator() {
    inquirer
        .prompt([
            {
                message: "What is your engineer's name?",
                name: "name",
            },
            {
                message: "What is your engineer's id?",
                name: "employee_id",
            },
            {
                message: "What is your engineer's email?",
                name: "email_address",
            },
            {
                message: "What is your engineer's GitHub?",
                name: "github_username",
            },
        ])

        .then(function(response) {
            const name = response.name;
            const id = response.employee_id;
            const email = response.email_address;
            const github = response.github_username;
            const engineer = new Engineer(name, id, email, github)

            teamArr.push(engineer);
            console.log(teamArr);
            additionalTeamMember();
        })
};

// Third function is to generate a new instance of an intern class and feed the responses of the user into an empty array
// The last thing to be done is to initiate the choose additional employee function
function internGenerator() {
    inquirer
        .prompt([
            
            {
                message: "What is your intern's name?",
                name: "name",
            },
            {
                message: "What is your intern's id?",
                name: "employee_id",
            },
            {
                message: "What is your intern's email?",
                name: "email_address",
            },
            {
                message: "What is your intern's school?",
                name: "school",
            },
        ])

        .then(function(response) {
            const name = response.name;
            const id = response.employee_id;
            const email = response.email_address;
            const school = response.school;
            const intern = new Intern(name, id, email, school)

            teamArr.push(intern);
            console.log(teamArr);
            additionalTeamMember();
        })
};

// Fourth function will allow the user to select if they desire additional engineer's or intern's infinitely if they so chose
// When the user is satisfied with the amount of employees they wish to list, the last step of this function is to utilize the write file function feeding it the name of the html and what information it will hold
function additionalTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
                message: "Which type of team member would you like to add?",
                name: "team_list",
            },
        ])

        .then(response => {
            if (response.team_list === "Engineer") {
                engineerGenerator();
            } else if (response.team_list === "Intern") {
                internGenerator();
            } else {
                writeToFile("team.html", teamArr);
            }
        });
};

// Final function is to write the html file by utilizing the function defined in the page template
// This is done by feeding it the data from the (at this point) non-empty array
function writeToFile (fileName, data) {
    fs.writeFile(`./output/${fileName}`, generateHtml(data), (err) => { 
        err ? console.error(err) : console.log("Generating HTML...")
    });
};

// Initialize the prompts starting with the manager function
managerGenerator();