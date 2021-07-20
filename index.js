const fs = require('fs');
const inquirer = require("inquirer");
const {Manager}= require('./lib/classes');
const {Engineer} = require('./lib/classes');
const {Intern} = require('./lib/classes');
const constructHtml = require('./src/template')
const Employees = [];
var finishedPage = ""

const questions =
    ([
    {
        type: 'list',
        name: 'Title',
        message: "What kind of employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input',
        message:'What is your name?',
        name: 'Name',
        },
    {
        type: 'input',
        message:'What is your ID?',
        name: 'ID',
        },
        {
    type: 'input',
    message:'What is your Email?',
    name: 'Email',
    },
])

function manager({Name, ID, Email, Title}) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your office number?',
        name: 'Office',
        }
    
// if prompt options is engineer run that function
]).then(({Office})=>{
    const manager = new Manager(Name, ID, Email, Title, Office)
    Employees.push(manager)
    addEmployee()
})
}

function engineer({Name, ID, Email, Title}) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your github name?',
        name: 'github',
        }
        
]).then(({Github})=>{
    const engineer = new Engineer(Name, ID, Email, Title, Github)
    Employees.push(engineer)
    addEmployee();
})
}

function intern({Name, ID, Email, Title}) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'Where do you go to school?',
        name: 'School',
        }
]).then(({School}) =>{
    const intern = new Intern(Name, ID, Email, Title, School)
    Employees.push(School)
    addEmployee();
})
}

function addEmployee(params) {
    inquirer
.prompt([
    {
        type: 'list',
        message:'Do you want to add another employee?',
        name: 'newEmployee',
        choices: ["Yes", "No"]
        }
]).then((answer)=> {
    if(answer.newEmployee === "Yes"){
        starterQuestions();
    }
    else{
        finishedPage = constructHtml(Employees)
    }
    writeToFile("index.html", finishedPage)
})
}

function starterQuestions(){
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.Title === "Manager"){
            manager(answers)
        }
        else if(answers.Title === "Engineer"){
            engineer(answers)
        }
        else {
            intern(answers)
        }
    })
}
starterQuestions()
// options are team manager, engineer and intern.
// team manager
// employee ID
// Email address
// office number
// do you want to add an engineer or intern

// engineer
// employee ID
// email address
// office number 
// github name

// inter name
//id
// email
// school
// return to menu

// call each one as function
// then with each fucntion create an appropriate object


//seperate file to create objects from these entries

//seperate file to generate the html witht he given object values

// bulma

