const {Intern} = require('../lib/classes');

describe('Initialization', () =>{
    it(' creates a new Intern object with super attributes of an Employee', () => {
        const intern = new Intern("Tom", "1", "tom@tom.com", "harvard");
        expect(intern).toBeInstanceOf(Intern);
    })
})