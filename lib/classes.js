class Employee {
    constructor(name, ID, email, title) {
        this.name = name;
        this.ID = ID;
        this.email = email;   
        this.title = title;
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getID() {
        return this.ID
    }
    gettitle() {
        return this.title
    }
}

class Manager extends Employee {
    constructor(name, ID, email, title, officeNumber){
    super(name, ID, email, title)
    this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber
    }
}

class Engineer extends Employee {
    constructor(name, ID, email, title, github){
    super(name, ID, email, title)
    this.github = github;
    }
    getGithub() {
        return this.github
    }
}

class Intern extends Employee {
    constructor(name, ID, email, title, school){
    super(name, ID, email, title)
    this.school = school;
    }
    getSchool() {
        return this.school
    }
}

module.exports = {
    Employee: Employee,
    Manager: Manager, 
    Intern: Intern, 
    Engineer: Engineer
}