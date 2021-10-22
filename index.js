const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

/*
* WHEN the application is started, THEN a prompt to enter the team manager’s name, employee ID, email address, and office number is given
* WHEN the team manager’s name, employee ID, email address, and office number ar entered, then a menu with the option to add an engineer or an intern or to finish building my team is presented.
* WHEN the engineer option is selected, THEN a prompt to enter the engineer’s name, ID, email, and GitHub username is given, and redirected back to the menu
* WHEN the intern option is selected, THEN a prompt to enter the intern’s name, ID, email, and school is given, and redirected back to the menu
* WHEN finishing the building of the team, THEN the application is exited, and the HTML is generated
*/

const managerQuestions = [
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
]

const engineerQuestions = [
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
]

const internQuestions = [
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
];

const addTeamMember = [
    {
        type: "list",
        choices: ["engineer", "intern", "none"],
        message: "Which type of team member would you like to add?",
        name: "team list",
    },
];

function init() {
    inquirer
        .prompt()
}

init();