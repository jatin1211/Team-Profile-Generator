const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Intern class', () => {
    const intern = new Intern('jatin','10','xyz@gmail.com','mmhs');

    expect(intern.name).toBe('jatin');
    expect(intern.id).toBe('10');
    expect(intern.email).toBe('xyz@gmail.com');
    expect(intern.school).toBe('mmhs');

    expect(intern.getSchool()).toBe('mmhs');
    expect(intern.getRole()).toBe('Intern');
} )