const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


test('Manager class', () => {
    const manager = new Manager('jatin','10','xyz@gmail.com','1234');

    expect(manager.name).toBe('jatin');
    expect(manager.id).toBe('10');
    expect(manager.email).toBe('xyz@gmail.com');
    expect(manager.officeNumber).toBe('1234');


    expect(manager.getRole()).toBe('Manager');
} )