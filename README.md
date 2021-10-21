# Team Generator
Developing a generator the creates employee team information.

# Pseudo Code

* Build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
* Write a unit test for every part of your code and ensure that it passes each test.
* Generate a webpage that displays team's basic info that I have quick access to their emails and GitHub profiles
* WHEN prompted for team members and their information, an HTML file is generated that displays formatted team roster based on user input
* WHEN an email address in the HTML is clicked on, then the default email program opens and populates the TO field of the email with the address
* WHEN the GitHub username is clicked on, then that GitHub profile opens in a new tab
* WHEN the application is started, THEN a prompt to enter the team manager’s name, employee ID, email address, and office number is given
* WHEN the team manager’s name, employee ID, email address, and office number ar entered, then a menu with the option to add an engineer or an intern or to finish building my team is presented.
* WHEN the engineer option is selected, THEN a prompt to enter the engineer’s name, ID, email, and GitHub username is given, and redirected back to the menu
* WHEN the intern option is selected, THEN a prompt to enter the intern’s name, ID, email, and school is given, and redirected back to the menu
* WHEN finishing the building of the team, THEN the application is exited, and the HTML is generated
* The application should use Jest and Inquirer

# Directory Structure

It is recommended that you start with a directory structure that looks like the following example:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.