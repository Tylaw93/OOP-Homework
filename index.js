const inquirer = require('inquirer')
const fs = require('fs')

function allEmployees(params) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your name?',
        name: 'name',
        },
    {
        type: 'input',
        message:'What is your ID?',
        name: 'name',
        },
        {
    type: 'input',
    message:'What is your Email?',
    name: 'name',
    },
])
}
function teamManager(params) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your office number?',
        name: 'name',
        },
    {
        type: 'select',
        message:'Do you want to add an engineer or intern?',
        options: '[engineer], [intern], [No]',
        },
  
// if prompt options is engineer run that function


])
}

function engineer(params) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your office number?',
        name: 'name',
        },
    {
        type: 'input',
        message:'What is your github name?',
        name: 'name',
        },
        
])
}

function intern(params) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is your school?',
        name: 'name',
        },
        
])
}

function addEmployee(params) {
    inquirer
.prompt([
    {
        type: 'input',
        message:'Do you want to add another employee?',
        name: 'name',
        },
        
])
}



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

