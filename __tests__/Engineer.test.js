const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


test('Engineer class', () => {
    const eng = new Engineer('jatin','10','xyz@gmail.com','jatin1211');

    expect(eng.name).toBe('jatin');
    expect(eng.id).toBe('10');
    expect(eng.email).toBe('xyz@gmail.com');
    expect(eng.github).toBe('jatin1211');

    expect(eng.getGithub()).toBe('jatin1211');
    expect(eng.getRole()).toBe('Engineer');
} )