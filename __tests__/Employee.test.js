const Employee = require("../lib/Employee");

test('working of employee class', () => {
    const emp = new Employee('jatin');
    expect(emp.name).toBe('jatin');
    expect(emp.id).toEqual(expect.stringContaining(emp.id.toString()));
    expect(emp.email).toEqual(expect.stringContaining(emp.email.toString()));
} )


test('function getName ', () => {
    const emp = new Employee('jatin');
    expect(emp.getName()).toBe('jatin');
})
test('function getId ', () => {
    const emp = new Employee('jatin','20','xyz@gmail.com');
    expect(emp.getId()).toBe('20');
})
test('function getEmail ', () => {
    const emp = new Employee('jatin','20','xyz@gmail.com');
    expect(emp.getEmail()).toBe('xyz@gmail.com');
})
test('function getRole ', () => {
    const emp = new Employee('jatin','20','xyz@gmail.com');
    expect(emp.getRole()).toBe('Employee');
})