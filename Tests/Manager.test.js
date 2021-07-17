  
const {Manager} = require('../lib/classes');

describe('Initialization', () =>{
    it(' creates a new instance of a Manager with Employee attributes', () => {
        const manager = new Manager("Tom", "1", "tom@tom.com", "Manager", "500");
        expect(manager).toBeInstanceOf(Manager);
    })
})