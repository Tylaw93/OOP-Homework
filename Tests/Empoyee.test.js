  
const {Employee} = require('../lib/classes');

describe('Initialization', () =>{
    it('creates a new Employee instance', () => {
        const employee = new Employee("Tom", "1", "tom@tom.com");
        expect(employee).toBeInstanceOf(Employee);
    })
})