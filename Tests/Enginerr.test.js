  
const {Engineer} = require('../lib/classes');

describe('Initialization', () =>{
    it('creates a new Engineer instance with attributes from Employee', () => {
        const engineer = new Engineer("Tom", "1", "tom@tom.com", "github");
        expect(engineer).toBeInstanceOf(Engineer);
    })
})