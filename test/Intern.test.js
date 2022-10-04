const Intern = require('../lib/intern');

test('Testing school.', () => {
    const school = 'Mt Morris';
    const employeeInstance = new Intern('Andrew', 59 , 'neuwirth@gmail.com', school);
    expect(employeeInstance.school).toBe(school);
})

test('Testing school.', () => {
    const school = 'Mt Morris';
    const employeeInstance = new Intern('Andrew', 59 , 'neuwirth@gmail.com', school);
    expect(employeeInstance.getSchool()).toBe(school);
})

test('Testing getRole.', () => {
    const role = 'Intern';
    const employeeInstance = new Intern('Andrew', 59 , 'neuwirth@gmail.com', 'Mt Morris');
    expect(employeeInstance.getRole()).toBe(role);
})