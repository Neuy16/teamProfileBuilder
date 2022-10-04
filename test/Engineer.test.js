const Engineer = require('../lib/engineer');

test('Testing github.', () => {
    const github = 'neuy16';
    const employeeInstance = new Engineer('Andrew', 59 , 'neuwirth@gmail.com', github);
    expect(employeeInstance.github).toBe(github);
})

test('Testing getGithub.', () => {
    const github = 'neuy16';
    const employeeInstance = new Engineer('Andrew', 59 , 'neuwirth@gmail.com', github);
    expect(employeeInstance.getGithub()).toBe(github);
})

test('Testing getRole.', () => {
    const role = 'Engineer';
    const employeeInstance = new Engineer('Andrew', 59 , 'neuwirth@gmail.com', 'neuy16');
    expect(employeeInstance.getRole()).toBe(role);
})