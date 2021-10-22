const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const pageTemplate = require("./src/page-template")
/*
* WHEN the application is started, THEN a prompt to enter the team manager’s name, employee ID, email address, and office number is given
* WHEN the team manager’s name, employee ID, email address, and office number ar entered, then a menu with the option to add an engineer or an intern or to finish building my team is presented.
* WHEN the engineer option is selected, THEN a prompt to enter the engineer’s name, ID, email, and GitHub username is given, and redirected back to the menu
* WHEN the intern option is selected, THEN a prompt to enter the intern’s name, ID, email, and school is given, and redirected back to the menu
* WHEN finishing the building of the team, THEN the application is exited, and the HTML is generated
*/

function managerQuestions() {
    inquirer
        .prompt([
            {
                message: "What is the team manager's name?",
                name: "name",
            },
            {
                message: "What is the team manager's id?",
                name: "employee id",
            },
            {
                message: "What is the team manager's email?",
                name: "email address",
            },
            {
                message: "What is the team manager's office number?",
                name: "office number",
            },
        ])

        .then(response => {
            addTeamMember();
        });
};

function engineerQuestions() {
    inquirer
        .prompt([
            {
                message: "What is your engineer's name?",
                name: "name",
            },
            {
                message: "What is your engineer's id?",
                name: "employee id",
            },
            {
                message: "What is your engineer's email?",
                name: "email address",
            },
            {
                message: "What is your engineer's GitHub?",
                name: "github username",
            },
        ])

        .then(response => {
            addTeamMember();
        });
};

function internQuestions() {
    inquirer
        .prompt([
            
            {
                message: "What is your intern's name?",
                name: "name",
            },
            {
                message: "What is your intern's id?",
                name: "employee id",
            },
            {
                message: "What is your intern's email?",
                name: "email address",
            },
            {
                message: "What is your intern's school?",
                name: "school",
            },
        ])

        .then(response => {
            addTeamMember();
        });
};

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                choices: ["engineer", "intern", "none"],
                message: "Which type of team member would you like to add?",
                name: "team_list",
            },
        ])

        .then(response => {
            console.log(response);
            if (response.team_list == "engineer") {
                engineerQuestions();
            } else if (response.team_list == "intern") {
                internQuestions();
            } else {
                return
            }
        });
};

function writeToFile (fileName, data) {
    // fs work here
    // call the page template here
    // console message to confirm html is generated
}

function start() {
    // response answers to be put into html
}

managerQuestions();